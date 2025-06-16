# Extension Log Reader

A VSCode extension that reads and displays autocomplete log files from the Continue extension in a formatted, readable view.

## Features

- 📖 Read JSONL (JSON Lines) log files from Continue extension
- 🎨 Display formatted JSON content in VSCode editor
- 📊 Shows the latest 5 log entries for quick inspection
- ⚡ One-click command execution from Command Palette
- 🛡️ Graceful error handling for invalid JSON entries

## Installation

### Development Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the TypeScript code:
   ```bash
   npm run compile
   ```
4. Press `F5` in VSCode to launch the Extension Development Host

### Manual Installation

1. Compile the extension: `npm run vscode:prepublish`
2. Package the extension (requires `vsce`): `vsce package`
3. Install the generated `.vsix` file in VSCode

## Usage

1. Open VSCode
2. Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type "Read Autocomplete Log" and press Enter
4. The extension will open a new document with the formatted log content

## Configuration

The extension currently reads from a hardcoded path:
```
/Users/linminhao/.continue/dev_data/0.2.0/autocomplete.jsonl
```

To use with a different path, modify the `LOG_FILE_PATH` constant in `src/extension.ts`.

## Commands

| Command | Description |
|---------|-------------|
| `extension-log.readFile` | Read Autocomplete Log |

## Development

### Available Scripts

- `npm run compile` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and recompile automatically
- `npm run vscode:prepublish` - Prepare extension for publishing

### Project Structure

```
├── src/
│   └── extension.ts      # Main extension logic
├── out/                  # Compiled JavaScript output
├── package.json         # Extension manifest
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

### Key Implementation Details

- **File Reading**: Reads JSONL files line by line, parsing each as separate JSON objects
- **Error Handling**: Invalid JSON entries are displayed with error notation
- **Output Format**: Creates a new VSCode document with formatted JSON content
- **Performance**: Only processes the latest 5 entries for quick loading

## Requirements

- VSCode version 1.74.0 or higher
- Continue extension with autocomplete logging enabled
- Node.js for development

## Known Issues

- Currently hardcoded to read from a specific user path
- Only displays the latest 5 log entries
- Requires Continue extension to be installed and configured

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Compile and test: `npm run compile`
5. Submit a pull request

## License

This project is open source. Please check the license file for details.

## Changelog

### [0.0.1] - Initial Release
- Basic JSONL file reading functionality
- Command palette integration
- Formatted JSON output display
- Error handling for invalid entries

---

**Enjoy using Extension Log Reader!** 🚀