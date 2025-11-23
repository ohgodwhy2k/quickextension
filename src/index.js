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
  // In many runtimes the engine will call methods by opcode name directly; keep both to be safe.
  sayHelloOpcode() {
    return this.sayHello();
  }

  echoOpcode(args) {
    // The runtime may pass arguments differently; this helper normalizes:
    const value = args && args.VALUE !== undefined ? args.VALUE : "";
    return this.echo(value);
  }
}

// For testability in Node: export the class if module system exists
if (typeof module !== "undefined" && module.exports) {
  module.exports = MyExtension;
}

// If running in a Scratch / TurboWarp runtime, register the extension instance.
// The exact global object can differ; TurboWarp / Scratch typically expose Scratch and Scratch.extensions
try {
  if (typeof Scratch !== "undefined" && Scratch.extensions && typeof Scratch.extensions.register === "function") {
    // runtime expects instance methods named by opcode, so bind the functions to the instance
    const inst = new MyExtension();
    // Some runtimes call methods named as in getInfo().opcode. If needed adapt to runtime specifics.
    Scratch.extensions.register({
      getInfo: () => inst.getInfo(),
      // runtime may expect a flat object of opcodes -> function
      sayHello: () => inst.sayHello(),
      echo: (args) => inst.echo(args && args.VALUE)
    });
  }
} catch (e) {
  // Ignore if Scratch not available during build/test
  // console.warn("Scratch runtime not found — skipping registration.");
}
