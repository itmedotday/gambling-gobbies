import { cn } from "@/lib/utils";
import { useEightBit } from "@/stores/settingsStore";

import {
  Popover as ShadcnPopover,
  PopoverContent as ShadcnPopoverContent,
  PopoverTrigger as ShadcnPopoverTrigger,
} from "@/components/ui/popover";

import "@/components/ui/8bit/styles/retro.css";

const Popover = ShadcnPopover;
const PopoverTrigger = ShadcnPopoverTrigger;

function PopoverContent({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnPopoverContent>) {
  const eightBit = useEightBit();

  if (!eightBit) {
    return <ShadcnPopoverContent className={className} {...props} />;
  }

  return (
    <ShadcnPopoverContent
      className={cn(
        "bg-card rounded-none border-2 border-foreground dark:border-ring retro",
        className
      )}
      {...props}
    />
  );
}

export { Popover, PopoverContent, PopoverTrigger };
