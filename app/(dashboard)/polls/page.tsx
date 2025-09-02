import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock poll data - in a real app, this would come from a database
const mockPolls = [
  {
    id: "1",
    title: "What's your favorite programming language?",
    description: "Choose the language you enjoy coding in the most",
    votes: 355,
    createdAt: "2024-01-15",
    optionsCount: 4,
  },
  {
    id: "2",
    title: "Tabs or spaces for indentation?",
    description: "The eternal debate in programming",
    votes: 223,
    createdAt: "2024-01-10",
    optionsCount: 2,
  },
  {
    id: "3",
    title: "What's your preferred code editor?",
    description: "Which editor do you use for development?",
    votes: 472,
    createdAt: "2024-01-05",
    optionsCount: 5,
  },
];

export default function PollsListPage() {
  return (
    <div className="p-6 grid gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Polls</h1>
          <p className="text-muted-foreground mt-1">Create and participate in polls</p>
        </div>
        <Button asChild>
          <Link href="/polls/new">Create New Poll</Link>
        </Button>
      </div>
      
      <div className="grid gap-4">
        {mockPolls.map((poll) => (
          <Card key={poll.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">
                    <Link 
                      className="hover:underline hover:text-foreground/80 transition-colors" 
                      href={`/polls/${poll.id}`}
                    >
                      {poll.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">{poll.description}</CardDescription>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>{poll.createdAt}</div>
                  <div>{poll.optionsCount} options</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {poll.votes} total votes
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href={`/polls/${poll.id}`}>View Poll</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


