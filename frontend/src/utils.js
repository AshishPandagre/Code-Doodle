import { getIconForFile } from 'vscode-icons-js';

const extensionToLanguage = {
  'cpp': 'c++',
  'java': 'java',
  'py': 'python',
  'c': 'c',
  'cs': 'c#',
  'js': 'javascript',
  'rb': 'ruby',
  'swift': 'swift',
  'go': 'go',
  'scala': 'scala',
  'kt': 'kotlin',
  'rs': 'rust',
  'php': 'php',
  'ex': 'elixir',
  'dart': 'dart'
}

export function getIcon(name) {
  return `http://localhost:8000/${getIconForFile(name)}`
}

export function getLanguage(name) {
  const extension = name.split('.').at(-1)
  return extensionToLanguage[extension]
}

