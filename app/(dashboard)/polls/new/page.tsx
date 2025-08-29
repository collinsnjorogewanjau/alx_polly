import Link from "next/link";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

async function createPoll(formData: FormData) {
  "use server";
  const question = formData.get("question")?.toString().trim() ?? "";
  const rawOptions = [
    formData.get("option1")?.toString(),
    formData.get("option2")?.toString(),
    formData.get("option3")?.toString(),
  ];
  const options = rawOptions.filter(Boolean).map((s) => (s as string).trim()).filter((s) => s.length > 0);

  // Placeholder: persist to DB here. For now we just redirect back.
  // eslint-disable-next-line no-console
  console.log("[createPoll]", { question, options });
  redirect("/polls");
}

export default function NewPollPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Create a new poll</CardTitle>
          <CardDescription>Define your question and options.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createPoll} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="question">Question</Label>
              <Input id="question" name="question" placeholder="What should we order for lunch?" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="option1">Option 1</Label>
              <Input id="option1" name="option1" placeholder="Pizza" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="option2">Option 2</Label>
              <Input id="option2" name="option2" placeholder="Sushi" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="option3">Option 3</Label>
              <Input id="option3" name="option3" placeholder="Burgers" />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" asChild>
                <Link href="/polls">Cancel</Link>
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


