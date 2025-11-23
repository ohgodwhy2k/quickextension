import { logMessage } from "./utils.js";

class MyExtension {
  getInfo() {
    logMessage("Getting Info");
    return {
      id: "myextension",
      name: "My Extension",
      blocks: [],
    };
  }
}

Scratch.extensions.register(new MyExtension());
