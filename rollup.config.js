import resolve from '@rollup/plugin-node-resolve';

export default {
  // The main file that imports all your other files
  input: 'src/index.js',
  output: {
    // The single file to be generated
    file: 'dist/extension.js',
    // 'iife' stands for Immediately Invoked Function Expression
    // This wraps your code so it doesn't leak variables into the global window
    format: 'iife' 
  },
  plugins: [
    resolve() // Allows you to import other files easily
  ]
};