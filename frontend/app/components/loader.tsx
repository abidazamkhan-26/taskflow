import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-muted-foreground">
      <Loader2 className="w-9 h-9 animate-spin text-primary" />
      <span className="text-sm">Loading...</span>
    </div>
  );
};
