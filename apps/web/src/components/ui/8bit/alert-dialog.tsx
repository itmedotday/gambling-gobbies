import { cn } from "@/lib/utils";
import { useEightBit } from "@/stores/settingsStore";

import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogAction as ShadcnAlertDialogAction,
  AlertDialogCancel as ShadcnAlertDialogCancel,
  AlertDialogContent as ShadcnAlertDialogContent,
  AlertDialogDescription as ShadcnAlertDialogDescription,
  AlertDialogFooter as ShadcnAlertDialogFooter,
  AlertDialogHeader as ShadcnAlertDialogHeader,
  AlertDialogMedia as ShadcnAlertDialogMedia,
  AlertDialogOverlay as ShadcnAlertDialogOverlay,
  AlertDialogPortal as ShadcnAlertDialogPortal,
  AlertDialogTitle as ShadcnAlertDialogTitle,
  AlertDialogTrigger as ShadcnAlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import "@/components/ui/8bit/styles/retro.css";

const AlertDialog = ShadcnAlertDialog;
const AlertDialogTrigger = ShadcnAlertDialogTrigger;
const AlertDialogPortal = ShadcnAlertDialogPortal;
const AlertDialogOverlay = ShadcnAlertDialogOverlay;
const AlertDialogHeader = ShadcnAlertDialogHeader;
const AlertDialogFooter = ShadcnAlertDialogFooter;
const AlertDialogMedia = ShadcnAlertDialogMedia;
const AlertDialogDescription = ShadcnAlertDialogDescription;
const AlertDialogAction = ShadcnAlertDialogAction;
const AlertDialogCancel = ShadcnAlertDialogCancel;

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnAlertDialogTitle>) {
  const eightBit = useEightBit();
  return (
    <ShadcnAlertDialogTitle
      className={cn(eightBit && "retro", className)}
      {...props}
    />
  );
}

function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ShadcnAlertDialogContent>) {
  const eightBit = useEightBit();

  if (!eightBit) {
    return (
      <ShadcnAlertDialogContent className={className} {...props}>
        {children}
      </ShadcnAlertDialogContent>
    );
  }

  return (
    <ShadcnAlertDialogContent
      className={cn("bg-card rounded-none border-none retro", className)}
      {...props}
    >
      {children}

      <div
        className="absolute inset-0 border-x-6 -mx-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 border-y-6 -my-1.5 border-foreground dark:border-ring pointer-events-none"
        aria-hidden="true"
      />
    </ShadcnAlertDialogContent>
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
