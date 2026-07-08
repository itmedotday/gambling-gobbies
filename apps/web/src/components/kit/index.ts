/**
 * UI kit barrel — pages import from here, not from ui/8bit directly.
 * Wrappers branch on useEightBit() and fall back to shadcn primitives.
 */
export { Button, buttonVariants, type BitButtonProps } from '@/components/ui/8bit/button';
export { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/8bit/card';
export { Badge } from '@/components/ui/8bit/badge';
export { Progress } from '@/components/ui/8bit/progress';
export { Input } from '@/components/ui/8bit/input';
export { Label } from '@/components/ui/8bit/label';
export { Slider } from '@/components/ui/8bit/slider';
export { Switch } from '@/components/ui/8bit/switch';
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/8bit/select';
export { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/8bit/tabs';
export {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/8bit/table';
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/8bit/input-otp';
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart';
