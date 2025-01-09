const vscode = require('vscode');

function activate(context) {
    // 注册 HTML 文件中 MoonBit 代码块的语言支持
    const moonbitSelector = {
        language: 'html',
        scheme: 'file',
        pattern: '**/*.html'
    };

    // 添加对 <script lang="mbt"> 标签的支持
    const provider = vscode.languages.registerEmbeddedLanguageConfiguration('html', {
        embeddedLanguages: {
            'source.moonbit': 'moonbit'
        }
    });

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
} 