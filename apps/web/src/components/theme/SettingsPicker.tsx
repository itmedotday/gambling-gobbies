import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useEightBit } from '@/stores/settingsStore';
import { cn } from '@/lib/utils';

export interface SettingsPickerOption<T extends string> {
  value: T;
  label: string;
}

export interface SettingsPickerProps<T extends string> {
  id: string;
  value: T;
  onValueChange: (value: T) => void;
  options: SettingsPickerOption<T>[];
  'data-testid'?: string;
}

const triggerBaseClass =
  'flex h-10 w-full items-center justify-between gap-1.5 rounded-lg border border-input bg-background py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-[color,box-shadow,border-color] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 dark:hover:bg-input/50';

const itemBaseClass =
  'relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground';

/**
 * Settings dropdown that uses Popover (non-modal) so the page stays scrollable while open.
 * Radix Select always locks body scroll; this matches Select styling without that behavior.
 */
export function SettingsPicker<T extends string>({
  id,
  value,
  onValueChange,
  options,
  'data-testid': testId,
}: SettingsPickerProps<T>) {
  const eightBit = useEightBit();
  const active = options.find((o) => o.value === value) ?? options[0]!;

  const trigger = (
    <button
      type="button"
      id={id}
      data-testid={testId}
      role="combobox"
      aria-haspopup="listbox"
      className={cn(triggerBaseClass, eightBit && 'retro rounded-none border-0 ring-0')}
    >
      <span className="line-clamp-1 text-left">{active.label}</span>
      <ChevronDownIcon className="pointer-events-none size-4 shrink-0 text-muted-foreground" />
    </button>
  );

  return (
    <Popover>
      <div className="relative w-full shrink-0">
        <PopoverTrigger asChild>
          {eightBit ? (
            <div className="relative w-full border-y-6 border-foreground dark:border-ring">
              {trigger}
              <div
                className="pointer-events-none absolute inset-0 -mx-1.5 border-x-6 border-foreground dark:border-ring"
                aria-hidden="true"
              />
            </div>
          ) : (
            trigger
          )}
        </PopoverTrigger>
      </div>
      <PopoverContent
        align="end"
        sideOffset={4}
        className={cn(
          'max-h-(--radix-popover-content-available-height) overflow-y-auto p-1',
          eightBit && 'retro mt-1 rounded-none border-4 border-foreground dark:border-ring',
        )}
      >
        <div role="listbox" aria-labelledby={id}>
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={selected}
                className={cn(
                  itemBaseClass,
                  eightBit &&
                    'rounded-none border-y-3 border-dashed border-transparent hover:border-foreground dark:hover:border-ring',
                )}
                onClick={() => onValueChange(option.value)}
              >
                {option.label}
                {selected ? (
                  <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
                    <CheckIcon className="size-4" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
