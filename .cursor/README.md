# Cursor MCP Configuration

This directory contains MCP (Model Context Protocol) server configurations for Cursor IDE.

## GitHub MCP Server Setup

See the main `MCP_SETUP.md` file in the project root for detailed setup instructions.

## Quick Start

1. **Install the GitHub MCP server:**
   ```bash
   npm install -g github-repos-manager-mcp
   ```

2. **Create a GitHub Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Generate a new token with `repo` scope
   - Copy the token

3. **Set the token as an environment variable:**
   ```bash
   export GITHUB_PERSONAL_ACCESS_TOKEN="your-token-here"
   ```

4. **Configure Cursor:**
   - Copy `mcp-config.json` to your Cursor MCP settings location
   - Or manually add the configuration in Cursor Settings → MCP
   - Restart Cursor

## Security Note

The `mcp-config.json` file uses environment variables for the token, so it's safe to commit. However, if you hardcode a token, make sure it's in `.gitignore`.
