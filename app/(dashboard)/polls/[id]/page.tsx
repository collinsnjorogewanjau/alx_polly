import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PollPageProps {
  params: { id: string };
}

export default function PollDetailPage({ params }: PollPageProps) {
  const { id } = params;

  // Placeholder poll details
  const poll = {
    id,
    question: "Tabs or spaces?",
    options: [
      { id: "a", label: "Tabs", votes: 50 },
      { id: "b", label: "Spaces", votes: 37 },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
          <CardDescription>Vote and see live results.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          {poll.options.map((opt) => (
            <div key={opt.id} className="flex items-center justify-between border rounded-md p-3">
              <span>{opt.label}</span>
              <Button variant="outline">Vote</Button>
            </div>
          ))}
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Total votes: {poll.options.reduce((sum, o) => sum + o.votes, 0)}
        </CardFooter>
      </Card>
    </div>
  );
}


