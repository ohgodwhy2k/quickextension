import resolve from "@rollup/plugin-node-resolve";

export default {
  // The main file that imports all your other files
  input: "src/index.js",
  output: {
    // The single file to be generated
    file: "dist/extension.js",
    // 'iife' stands for Immediately Invoked Function Expression
    format: "iife",

    // **REQUIRED FOR EXTENSIONS:** The global variable name for IIFE format.
    // This allows the runtime to execute your code and pass the Scratch object.
    name: "ScratchExtensions",

    // **RECOMMENDED:** Include a sourcemap for easier debugging.
    sourcemap: true,
  },
  plugins: [
    resolve(), // Allows you to import other files easily
  ],
};
