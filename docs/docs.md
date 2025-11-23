```
icon: ./icon.svg
title: Redline Documentation
version: 1.0.0
banner: https://images.unsplash.com/photo-1708533548050-16703eff12ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
color: #a0a0a0
```

# TurboWarp Extension Template

> A professional starter template designed to streamline the development of TurboWarp extensions.

This repository provides a pre-configured development environment featuring a modular file structure, automated build workflows via GitHub Actions, and a ready-to-deploy documentation site. It is designed to help you focus on writing blocks, not configuring build tools.

## Features

- **Standardized File Tree:** A clean structure separating source code (`src`), distribution files (`dist`), and documentation (`docs`).
- **Automated Builds:** Includes GitHub Actions to automatically build your extension and publish to the `dist` branch/folder on every push.
- **Documentation Ready:** A pre-set `docs` folder configured for GitHub Pages, making it easy to host a website for your extension.
- **Modern Workflow:** Configured for ESLint and a simple build script to support modular JavaScript development.

---

## How to Use This Template

1. **Create your repo:** Click the green **"Use this template"** button at the top right of this page to create a new repository based on this file structure.
2. **Clone locally:** Clone your new repository to your machine.
3. **Install dependencies:** Run `npm install` (if using Node.js features).

### Setting Up

_Make sure to do these before you publish:_

- [ ] **package.json:** Update `"name"`, `"description"`, and `"author"` fields.
- [ ] **src/index.js:** Update the `Extension ID` and `Class Name` to match your specific extension.
- [ ] **README.md:** Delete this "To Do" section and write your own extension documentation below.

---

## Extension Documentation

_Write your extension's actual documentation here. Below is a sample structure._

### Installation

To use this extension in TurboWarp:

1. Open [TurboWarp](https://turbowarp.org/editor).
2. Go to the _Extensions_ tab.
3. Choose "_Custom Extension_"
4. Paste this URL, replacing `janedoe` with your username and `extrepo` with your repository name:

```text
https://janedoe.github.io/extrepo/dist/extension.js
```

### Blocks

| Block             | Description        |
| :---------------- | :----------------- |
| `[example block]` | Does a cool thing. |

### License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.
