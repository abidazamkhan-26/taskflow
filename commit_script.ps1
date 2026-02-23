$ErrorActionPreference = "Stop"

# Initialize git if not already
if (-not (Test-Path ".git")) {
    git init
    Write-Host "Initialized Git repository"
}

# 1. Initial Project Docs
git add README.md
git commit -m "docs: initialize project with README"
Start-Sleep -Seconds 1

# 2. Git Configuration
git add backend/.gitignore frontend/.gitignore
git commit -m "chore: setup gitignore for backend and frontend"
Start-Sleep -Seconds 1

# 3. Backend Setup
git add backend/package.json backend/package-lock.json
git commit -m "chore(backend): initialize backend dependencies"
Start-Sleep -Seconds 1

git add backend/env.exapmle
git commit -m "config(backend): add environment configuration example"
Start-Sleep -Seconds 1

git add backend/index.js
git commit -m "feat(backend): setup express server and db connection"
Start-Sleep -Seconds 1

git add backend/libs/
git commit -m "feat(backend): add utility libraries and helpers"
Start-Sleep -Seconds 1

# 4. Backend Models
git add backend/models/user.js
git commit -m "feat(backend): add User model schema"
Start-Sleep -Seconds 1

git add backend/models/workspace.js backend/models/workspace-invite.js
git commit -m "feat(backend): add Workspace and Invite models"
Start-Sleep -Seconds 1

git add backend/models/project.js
git commit -m "feat(backend): add Project model schema"
Start-Sleep -Seconds 1

git add backend/models/task.js backend/models/activity.js backend/models/comment.js
git commit -m "feat(backend): add Task, Activity, and Comment models"
Start-Sleep -Seconds 1

git add backend/models/verification.js
git commit -m "feat(backend): add Verification model"
Start-Sleep -Seconds 1

# 5. Backend Logic
git add backend/middleware/
git commit -m "feat(backend): add authentication middleware"
Start-Sleep -Seconds 1

git add backend/controllers/auth-controller.js
git commit -m "feat(backend): implement authentication controller"
Start-Sleep -Seconds 1

git add backend/controllers/user.js
git commit -m "feat(backend): implement user controller"
Start-Sleep -Seconds 1

git add backend/controllers/workspace.js
git commit -m "feat(backend): implement workspace controller"
Start-Sleep -Seconds 1

git add backend/controllers/project.js
git commit -m "feat(backend): implement project controller"
Start-Sleep -Seconds 1

git add backend/controllers/task.js
git commit -m "feat(backend): implement task controller"
Start-Sleep -Seconds 1

# 6. Backend Routes
git add backend/routes/auth.js
git commit -m "feat(backend): setup auth routes"
Start-Sleep -Seconds 1

git add backend/routes/user.js
git commit -m "feat(backend): setup user routes"
Start-Sleep -Seconds 1

git add backend/routes/workspace.js
git commit -m "feat(backend): setup workspace routes"
Start-Sleep -Seconds 1

git add backend/routes/project.js
git commit -m "feat(backend): setup project routes"
Start-Sleep -Seconds 1

git add backend/routes/task.js
git commit -m "feat(backend): setup task routes"
Start-Sleep -Seconds 1

git add backend/routes/index.js
git commit -m "feat(backend): configure main api router"
Start-Sleep -Seconds 1

# 7. Frontend Setup
git add frontend/package.json frontend/package-lock.json frontend/tsconfig.json frontend/vite.config.ts frontend/react-router.config.ts
git commit -m "chore(frontend): initialize frontend project structure"
Start-Sleep -Seconds 1

git add frontend/.npmrc frontend/components.json frontend/app.css
git commit -m "config(frontend): setup tailwind and environment variables"
Start-Sleep -Seconds 1

git add frontend/app/root.tsx frontend/app/routes.ts
git commit -m "feat(frontend): setup root layout and routing configuration"
Start-Sleep -Seconds 1

# 8. Frontend Core
git add frontend/app/lib/
git commit -m "feat(frontend): add utility functions and schema definitions"
Start-Sleep -Seconds 1

git add frontend/app/types/
git commit -m "feat(frontend): add typescript type definitions"
Start-Sleep -Seconds 1

git add frontend/app/hooks/
git commit -m "feat(frontend): implement custom hooks for data fetching"
Start-Sleep -Seconds 1

git add frontend/app/provider/
git commit -m "feat(frontend): setup context providers"
Start-Sleep -Seconds 1

# 9. Frontend Components
git add frontend/app/components/ui/
git commit -m "ui(frontend): add shadcn ui components"
Start-Sleep -Seconds 1

git add frontend/app/components/layout/
git commit -m "feat(frontend): implement app layout and sidebar"
Start-Sleep -Seconds 1

git add frontend/app/components/dashboard/
git commit -m "feat(frontend): add dashboard specific components"
Start-Sleep -Seconds 1

git add frontend/app/components/project/
git commit -m "feat(frontend): add project management components"
Start-Sleep -Seconds 1

git add frontend/app/components/task/
git commit -m "feat(frontend): add task management components"
Start-Sleep -Seconds 1

git add frontend/app/components/workspace/
git commit -m "feat(frontend): add workspace management components"
Start-Sleep -Seconds 1

git add frontend/app/components/*.tsx
git commit -m "feat(frontend): add shared components"
Start-Sleep -Seconds 1

# 10. Frontend Routes
git add frontend/app/routes/auth/
git commit -m "feat(frontend): implement authentication pages"
Start-Sleep -Seconds 1

git add frontend/app/routes/dashboard/
git commit -m "feat(frontend): implement dashboard pages and sub-routes"
Start-Sleep -Seconds 1

git add frontend/app/routes/root/ frontend/app/routes/user/
git commit -m "feat(frontend): implement landing and profile pages"
Start-Sleep -Seconds 1

# 11. Finalize
git add .
git commit -m "chore: final project structure cleanup"
Start-Sleep -Seconds 1

Write-Host "Committed all files in 30+ steps."
