# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VSCode extension that reads and displays the autocomplete.jsonl log file from the Continue extension located at `/Users/linminhao/.continue/dev_data/0.2.0/autocomplete.jsonl`.

## Commands

- `npm install` - Install dependencies
- `npm run compile` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and recompile automatically
- `npm run vscode:prepublish` - Prepare extension for publishing

## Development Setup

1. Install dependencies: `npm install`
2. Compile the extension: `npm run compile`
3. Press F5 to open a new Extension Development Host window with the extension loaded

## Architecture

- `src/extension.ts` - Main extension entry point with command registration and file reading logic
- `package.json` - Extension manifest with commands and activation events
- `tsconfig.json` - TypeScript configuration
- `out/` - Compiled JavaScript output directory
- Command: `extension-log.readFile` - Reads the JSONL file and displays formatted content in a new document

## Key Implementation Details

- Hardcoded log file path: `/Users/linminhao/.continue/dev_data/0.2.0/autocomplete.jsonl`
- Reads JSONL files line by line, parsing each as separate JSON objects
- Creates new VSCode document with formatted JSON content
- Uses `formatLogContent()` function to convert JSONL entries to readable format with entry numbering
- Handles invalid JSON entries gracefully by displaying them as-is with error notation

## Extension Testing

- Press F5 in VSCode to launch Extension Development Host
- Run command "Read Autocomplete Log" from Command Palette (Ctrl+Shift+P)
- Extension activates on command execution (not on VSCode startup)