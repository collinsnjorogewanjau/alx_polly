import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PollPageProps {
  params: { id: string };
}

// Mock poll data - in a real app, this would come from a database
const mockPolls = {
  "1": {
    id: "1",
    question: "What's your favorite programming language?",
    description: "Choose the language you enjoy coding in the most",
    options: [
      { id: "a", label: "JavaScript/TypeScript", votes: 156, percentage: 0 },
      { id: "b", label: "Python", votes: 89, percentage: 0 },
      { id: "c", label: "Rust", votes: 67, percentage: 0 },
      { id: "d", label: "Go", votes: 43, percentage: 0 },
    ],
    totalVotes: 0,
    createdAt: "2024-01-15",
  },
  "2": {
    id: "2",
    question: "Tabs or spaces for indentation?",
    description: "The eternal debate in programming",
    options: [
      { id: "a", label: "Tabs", votes: 89, percentage: 0 },
      { id: "b", label: "Spaces", votes: 134, percentage: 0 },
    ],
    totalVotes: 0,
    createdAt: "2024-01-10",
  },
  "3": {
    id: "3",
    question: "What's your preferred code editor?",
    description: "Which editor do you use for development?",
    options: [
      { id: "a", label: "VS Code", votes: 234, percentage: 0 },
      { id: "b", label: "Vim/Neovim", votes: 78, percentage: 0 },
      { id: "c", label: "IntelliJ/WebStorm", votes: 92, percentage: 0 },
      { id: "d", label: "Sublime Text", votes: 45, percentage: 0 },
      { id: "e", label: "Other", votes: 23, percentage: 0 },
    ],
    totalVotes: 0,
    createdAt: "2024-01-05",
  },
};

export default function PollDetailPage({ params }: PollPageProps) {
  const { id } = params;
  
  // Get poll data or show 404
  const poll = mockPolls[id as keyof typeof mockPolls];
  
  if (!poll) {
    return (
      <div className="max-w-3xl mx-auto p-6 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Poll not found</CardTitle>
            <CardDescription>The poll you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/polls">Back to Polls</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Calculate percentages and total votes
  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);
  const optionsWithPercentages = poll.options.map(opt => ({
    ...opt,
    percentage: totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0
  }));

  return (
    <div className="max-w-3xl mx-auto p-6 grid gap-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/polls">← Back to Polls</Link>
        </Button>
        <div className="text-sm text-muted-foreground">
          Created: {poll.createdAt}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{poll.question}</CardTitle>
          <CardDescription>{poll.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {optionsWithPercentages.map((opt) => (
            <div key={opt.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{opt.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {opt.votes} votes ({opt.percentage}%)
                  </span>
                  <Button variant="outline">
                    Vote
                  </Button>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-foreground h-2 rounded-full transition-all duration-300"
                  style={{ width: `${opt.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Total votes: {totalVotes}
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              Share Poll
            </Button>
            <Button variant="outline">
              View QR Code
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}


