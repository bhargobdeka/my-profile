# GitHub MCP Server Setup Guide

This guide will help you configure GitHub as an MCP (Model Context Protocol) server in Cursor IDE to interact with your repositories.

## Option 1: GitHub Repos Manager MCP (Recommended)

This is a community-maintained MCP server with extensive features (80+ tools) and direct GitHub API integration.

### Step 1: Install the MCP Server

Install the GitHub Repos Manager MCP server globally:

```bash
npm install -g github-repos-manager-mcp
```

Or use npx (no installation needed, but slower):
```bash
npx -y github-repos-manager-mcp
```

### Step 2: Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "Cursor MCP Server")
4. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `read:org` (Read org and team membership)
   - `read:user` (Read user profile data)
   - `read:gpg_key` (Read GPG keys)
5. Click "Generate token"
6. **Copy the token immediately** (you won't be able to see it again)

### Step 3: Configure Cursor IDE

1. Open Cursor Settings (Cmd/Ctrl + ,)
2. Search for "MCP" or navigate to MCP settings
3. Add the following configuration:

**For Cursor's MCP settings (usually in `~/.cursor/mcp.json` or Cursor settings UI):**

```json
{
  "mcpServers": {
    "github": {
      "command": "github-repos-manager-mcp",
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}
```

**Or set the token as an environment variable:**

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="your-token-here"
```

Then use this configuration (which references the environment variable):

```json
{
  "mcpServers": {
    "github": {
      "command": "github-repos-manager-mcp",
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

## Option 2: GitHub Official MCP Server

GitHub's official MCP server (if available). Check the [GitHub MCP Server repository](https://github.com/github/github-mcp-server) for the latest installation instructions and package name.

### Installation:

The package name and installation method may vary. Check the official repository for current instructions.

### Configuration:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}
```

## Option 3: GitHub CLI MCP Server

Uses GitHub CLI (`gh`) for repository interactions.

### Prerequisites:

1. Install GitHub CLI: https://cli.github.com/
2. Authenticate: `gh auth login`

### Configuration:

```json
{
  "mcpServers": {
    "github": {
      "command": "gh",
      "args": ["mcp"],
      "env": {}
    }
  }
}
```

## Verifying the Setup

After configuration:

1. Restart Cursor IDE
2. The MCP server should appear in Cursor's MCP panel
3. You can test it by asking Cursor to:
   - List your repositories
   - Create an issue
   - Check pull requests
   - View repository details

## Security Notes

- **Never commit your GitHub token to version control**
- Store tokens in environment variables or use Cursor's secure input features
- Use tokens with minimal required permissions
- Rotate tokens regularly

## Troubleshooting

1. **Server not connecting**: Check that the token has correct permissions
2. **Command not found**: Ensure Node.js and npm are installed and in PATH
3. **Permission errors**: Verify your token has the necessary scopes

## Additional Resources

- [GitHub MCP Server Documentation](https://github.com/github/github-mcp-server)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Cursor MCP Documentation](https://docs.cursor.com/mcp)
