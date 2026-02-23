import { Header } from "@/components/layout/header";
import { SidebarComponent } from "@/components/layout/sidebar-component";
import { Loader } from "@/components/loader";
import { CreateWorkspace } from "@/components/workspace/create-workspace";
import { fetchData } from "@/lib/fetch-util";
import { useAuth } from "@/provider/auth-context";
import type { Workspace } from "@/types";
import { useEffect, useState } from "react";
import {
  Navigate,
  Outlet,
  useLoaderData,
  useSearchParams,
} from "react-router";

export const clientLoader = async () => {
  try {
    const workspaces = await fetchData<Workspace[]>("/workspaces");
    return { workspaces };
  } catch (error) {
    console.log(error);
    return { workspaces: [] };
  }
};
const DashboardLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [isCreatingWorkspace, setIsCreatingWorkspace] = useState(false);
  const loaderData = useLoaderData() as { workspaces: Workspace[] } | undefined;
  const workspaces = loaderData?.workspaces || [];
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace | null>(
    null
  );

  useEffect(() => {
    if (workspaces.length === 0) return;

    const workspaceId = searchParams.get("workspaceId");

    if (workspaceId && !currentWorkspace) {
      const workspace = workspaces.find((w) => w._id === workspaceId);
      if (workspace) {
        setCurrentWorkspace(workspace);
        return;
      }
    }

    if (!workspaceId && workspaces.length > 0) {
      const workspace = workspaces[0];
      setCurrentWorkspace(workspace);
      setSearchParams(
        (prev) => {
          prev.set("workspaceId", workspace._id);
          return prev;
        },
        { replace: true }
      );
    }
  }, [workspaces, searchParams, currentWorkspace, setSearchParams]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  const handleWorkspaceSelected = (workspace: Workspace) => {
    setCurrentWorkspace(workspace);
  };

  return (
    <div className="flex h-screen w-full">
      <SidebarComponent currentWorkspace={currentWorkspace} />

      <div className="flex flex-1 flex-col h-full">
        <Header
          onWorkspaceSelected={handleWorkspaceSelected}
          selectedWorkspace={currentWorkspace}
          onCreateWorkspace={() => setIsCreatingWorkspace(true)}
        />

        <main className="flex-1 overflow-y-auto h-full w-full bg-muted/30">
          <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-6 md:py-10 w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>

      <CreateWorkspace
        isCreatingWorkspace={isCreatingWorkspace}
        setIsCreatingWorkspace={setIsCreatingWorkspace}
      />
    </div>
  );
};

export default DashboardLayout;
