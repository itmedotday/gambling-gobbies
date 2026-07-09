import { Card, CardContent } from '@/components/kit';

export default function PlaceholderPage({ title, note }: { title: string; note: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="retro text-lg text-primary">{title}</h1>
      <Card>
        <CardContent className="flex min-h-40 items-center justify-center p-8 text-sm text-muted-foreground">
          {note}
        </CardContent>
      </Card>
    </div>
  );
}
