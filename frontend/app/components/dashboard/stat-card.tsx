import type { StatsCardProps } from "@/types";
import { CheckCircle2, FolderKanban, ListTodo, Timer } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const StatsCard = ({ data }: { data: StatsCardProps }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-400" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-600">
            <FolderKanban className="size-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalProjects}</div>
          <p className="text-xs text-muted-foreground">
            {data.totalProjectInProgress} in progress
          </p>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-400" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
          <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600">
            <CheckCircle2 className="size-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalTasks}</div>
          <p className="text-xs text-muted-foreground">
            {data.totalTaskCompleted} completed
          </p>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">To Do</CardTitle>
          <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600">
            <ListTodo className="size-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalTaskToDo}</div>
          <p className="text-xs text-muted-foreground">
            Tasks waiting to be done
          </p>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          <div className="rounded-lg bg-violet-500/10 p-2 text-violet-600">
            <Timer className="size-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalTaskInProgress}</div>
          <p className="text-xs text-muted-foreground">
            Tasks currently in progress
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
