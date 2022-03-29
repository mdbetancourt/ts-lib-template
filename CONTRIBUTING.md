# Contributing Guide

## Repo Setup

1. Run `pnpm i` in the root folder

2. Run `pnpm run build` in root folder.

## Debugging

If you want to use break point and explore code execution you can use the ["Run and debug"](https://code.visualstudio.com/docs/editor/debugging) feature from vscode.

1. Add a `debugger` statement where you want to stop the code execution.

2. Click on the "Run and Debug" icon in the activity bar of the editor.

3. Click on the "Javascript Debug Terminal" button.

4. It will open a terminal and run `pnpm run dev`.

5. The execution will stop and you'll use the [Debug toolbar](https://code.visualstudio.com/docs/editor/debugging#_debug-actions) to continue, step over, restart the process...

## Running Tests

Each folder contains a `__tests__` directory. The tests are run using [vitest](https://vitest.dev/).

├── \_\_tests\_\_  <- integration & unit tests  
│   ├── file11.unit.ts  
│   └── file12.integration.ts  
├── module2  
│   ├── \_\_tests\_\_  <- integration & unit tests  
│   │   └── file22.integration.ts  
│   ├── file22.ts  
│   └── file23.ts  
└── index.ts  

- `pnpm test` by default runs every test.
