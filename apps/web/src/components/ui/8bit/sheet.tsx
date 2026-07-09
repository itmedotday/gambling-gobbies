import { cn } from "@/lib/utils";
import { useEightBit } from "@/stores/settingsStore";

import {
  Sheet as ShadcnSheet,
  SheetClose as ShadcnSheetClose,
  SheetContent as ShadcnSheetContent,
  SheetDescription as ShadcnSheetDescription,
  SheetFooter as ShadcnSheetFooter,
  SheetHeader as ShadcnSheetHeader,
  SheetTitle as ShadcnSheetTitle,
  SheetTrigger as ShadcnSheetTrigger,
} from "@/components/ui/sheet";

import "@/components/ui/8bit/styles/retro.css";

const Sheet = ShadcnSheet;
const SheetTrigger = ShadcnSheetTrigger;
const SheetClose = ShadcnSheetClose;
const SheetHeader = ShadcnSheetHeader;
const SheetFooter = ShadcnSheetFooter;
const SheetDescription = ShadcnSheetDescription;

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnSheetTitle>) {
  const eightBit = useEightBit();
  return (
    <ShadcnSheetTitle
      className={cn(eightBit && "retro", className)}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof ShadcnSheetContent>) {
  const eightBit = useEightBit();

  if (!eightBit) {
    return (
      <ShadcnSheetContent side={side} className={className} {...props}>
        {children}
      </ShadcnSheetContent>
    );
  }

  const isVertical = side === "left" || side === "right";

  return (
    <ShadcnSheetContent
      side={side}
      className={cn("bg-card rounded-none border-none retro", className)}
      {...props}
    >
      {children}

      {isVertical ? (
        <div
          className={cn(
            "absolute inset-y-0 w-1.5 bg-foreground dark:bg-ring pointer-events-none",
            side === "right" ? "left-0" : "right-0"
          )}
          aria-hidden="true"
        />
      ) : (
        <div
          className={cn(
            "absolute inset-x-0 h-1.5 bg-foreground dark:bg-ring pointer-events-none",
            side === "bottom" ? "top-0" : "bottom-0"
          )}
          aria-hidden="true"
        />
      )}
    </ShadcnSheetContent>
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
