import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "react-router";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const Achieved = () => {
  const [searchParams] = useSearchParams();
  const workspaceId = searchParams.get("workspaceId");

  // This is a placeholder. You would typically fetch achieved tasks or projects here.
  const achievedItems = [
    {
      id: "1",
      title: "Completed Project Alpha",
      type: "Project",
      date: new Date().toISOString(),
      status: "Achieved",
    },
    {
      id: "2",
      title: "Finished Task Beta",
      type: "Task",
      date: new Date().toISOString(),
      status: "Achieved",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Achieved Items</h1>
        <p className="text-muted-foreground">
          View your completed projects and tasks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievedItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.type}</div>
              <p className="text-xs text-muted-foreground">
                {format(new Date(item.date), "PPP")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {achievedItems.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 text-center border rounded-lg border-dashed">
            <div className="bg-muted p-4 rounded-full mb-4">
               <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No achieved items yet</h3>
            <p className="text-muted-foreground max-w-sm mt-2">
              Items you mark as achieved or completed will appear here.
            </p>
          </div>
      )}
    </div>
  );
};

export default Achieved;
