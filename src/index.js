class MyExtension {
  constructor() {
    // any instance state can go here
  }

  // Implementation functions that will be called by the runtime.
  sayHello() {
    return "Hello, world!";
  }

  echo(value) {
    // Demonstrates a reporter that echoes back its input
    // Ensure we return a string or number expected by Scratch
    return typeof value === "undefined" ? "" : String(value);
  }

  // getInfo returns the extension metadata the Scratch/TurboWarp runtime expects.
  getInfo() {
    return {
      id: "myextension",
      name: "My Extension",
      blocks: [
        {
          opcode: "sayHello",
          blockType: "reporter",
          text: "say hello"
        },
        {
          opcode: "echo",
          blockType: "reporter",
          text: "echo [VALUE]",
          arguments: {
            VALUE: {
              type: "string",
              defaultValue: "hello"
            }
          }
        }
      ]
    };
  }

  // Map opcodes to implementation names for the runtime
  sayHelloOpcode() {
    return this.sayHello();
  }

  echoOpcode(args) {
    const value = args && args.VALUE !== undefined ? args.VALUE : "";
    return this.echo(value);
  }
}

// ---------------------------
// NEW: ESM default export
// ---------------------------
export default MyExtension;

// ---------------------------
// Keep CommonJS compatibility
// ---------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = MyExtension;
}

// Register with TurboWarp runtime if present
try {
  if (typeof Scratch !== "undefined" && Scratch.extensions && typeof Scratch.extensions.register === "function") {
    const inst = new MyExtension();
    Scratch.extensions.register({
      getInfo: () => inst.getInfo(),
      sayHello: () => inst.sayHello(),
      echo: (args) => inst.echo(args && args.VALUE)
    });
  }
} 

catch {
    console.warn("Scratch runtime not found.");
    console.warn("Aborted registration.");
}