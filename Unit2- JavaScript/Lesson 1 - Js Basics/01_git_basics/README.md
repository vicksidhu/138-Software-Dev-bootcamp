# Git Basics in VS Code

This example demonstrates the basic workflow for using Git version control directly in Visual Studio Code.

## Prerequisites

- [Git](https://git-scm.com/) installed on your computer
- [Visual Studio Code](https://code.visualstudio.com/) installed on your computer

## Initial Setup

1. **Configure Git** (if you haven't already):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## Git Workflow in VS Code

### 1. Initialize a Repository

1. Open VS Code
2. Open a folder where you want to initialize Git
3. Click on the Source Control icon in the sidebar (or press `Ctrl+Shift+G`)
4. Click on "Initialize Repository"

![Initialize Repository](https://code.visualstudio.com/assets/docs/sourcecontrol/overview/initialize-repository.png)

### 2. Stage Changes

After making changes to files:

1. Modified files will appear in the "Changes" section
2. Click the `+` (plus) button next to a file to stage it
3. Alternatively, stage all changes by clicking the `+` button at the top of the Changes section

### 3. Commit Changes

1. Type a commit message in the text box above the "Changes" section
2. Click the checkmark (✓) or press `Ctrl+Enter` to commit

### 4. View Commit History

1. Right-click in the Source Control view
2. Select "View History" to see previous commits

### 5. Create and Switch Branches

1. Click on the current branch name in the bottom left corner
2. Select "Create new branch..." or choose an existing branch to switch

## Common Git Commands in Terminal

VS Code also provides an integrated terminal where you can run Git commands directly:

```bash
# Check Git status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Your commit message"

# View commit history
git log

# Create a new branch
git branch new-branch-name

# Switch to a branch
git checkout branch-name
```

## Learn More

- [VS Code Source Control Documentation](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [Git Documentation](https://git-scm.com/doc) 