const vscode = require('vscode');

function activate(context) {
    // 注册语言支持
    let disposable = vscode.languages.registerDocumentHighlightProvider(
        [
            { scheme: 'file', language: 'html' },
            { scheme: 'file', language: 'vue' },
            { scheme: 'file', language: 'svelte' }
        ],
        {
            provideDocumentHighlights(document, position, token) {
                // 基本的高亮支持
                return null;
            }
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
} 