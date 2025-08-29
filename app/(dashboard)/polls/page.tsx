import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PollsListPage() {
  // Placeholder sample polls
  const polls = [
    { id: "1", title: "Favorite frontend framework?", votes: 123 },
    { id: "2", title: "Tabs or spaces?", votes: 87 },
  ];

  return (
    <div className="p-6 grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Polls</h1>
        <Button asChild>
          <Link href="/polls/new">New Poll</Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {polls.map((poll) => (
          <Card key={poll.id}>
            <CardHeader>
              <CardTitle className="text-base">
                <Link className="hover:underline" href={`/polls/${poll.id}`}>
                  {poll.title}
                </Link>
              </CardTitle>
              <CardDescription>{poll.votes} votes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild>
                <Link href={`/polls/${poll.id}`}>View</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


