# Hide Private Mode

Firefox extension that provides an [IndexedDB implementation](https://github.com/dumbmatter/fakeIndexedDB) to sites in private browsing mode.

## Usage

Ensure the extension is allowed to run in private windows:  
https://support.mozilla.org/en-US/kb/extensions-private-browsing

## Building

### Requirements

* Node.js

### Instructions

````sh
git clone https://github.com/hensm/hide_private_mode
cd hide_private_mode
npm install
npm run build
````

| npm script | Description |
| ---------- | ----------- |
| `build`    | Builds to `./dist`. |
| `watch`    | Builds to `./dist` and listens for changes. |
| `start`    | Starts Firefox with built extension. |
| `lint`     | Runs TSLint on source files. |
| `package`  | Runs `build` in production mode and outputs extension archive to `./web-ext-artifacts`. |
