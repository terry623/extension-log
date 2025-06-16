import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const LOG_FILE_PATH = '/Users/linminhao/.continue/dev_data/0.2.0/autocomplete.jsonl';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension-log.readFile', async () => {
        try {
            if (!fs.existsSync(LOG_FILE_PATH)) {
                vscode.window.showErrorMessage(`Log file not found: ${LOG_FILE_PATH}`);
                return;
            }

            const fileContent = fs.readFileSync(LOG_FILE_PATH, 'utf8');
            const lines = fileContent.split('\n').filter(line => line.trim());
            
            const document = await vscode.workspace.openTextDocument({
                content: formatLogContent(lines),
                language: 'json'
            });
            
            await vscode.window.showTextDocument(document);
            
            const latest5Count = Math.min(lines.length, 5);
            vscode.window.showInformationMessage(`Successfully loaded latest ${latest5Count} log entries`);
            
        } catch (error) {
            vscode.window.showErrorMessage(`Error reading log file: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

function formatLogContent(lines: string[]): string {
    const latest5Lines = lines.slice(-5);
    const parsedEntries: any[] = [];
    
    latest5Lines.forEach((line, index) => {
        try {
            const parsed = JSON.parse(line);
            parsedEntries.push(parsed);
        } catch (error) {
            parsedEntries.push({ error: "Invalid JSON", content: line });
        }
    });
    
    return JSON.stringify(parsedEntries, null, 2);
}

export function deactivate() {}