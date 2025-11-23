// /mnt/data/quickextension-main/quickextension-main/test/getinfo.test.js
// Minimal test using Node's built-in assert so we don't need to add a test framework.

const assert = require('assert');
const path = require('path');

// Require the extension class (module export from src/index.js)
const MyExtension = require(path.join(__dirname, '..', 'src', 'index.js'));

console.log('Running getInfo() test...');

const inst = new MyExtension();
const info = inst.getInfo();

// Basic shape assertions
assert.ok(info && typeof info === 'object', 'getInfo should return an object');
assert.strictEqual(info.id, 'myextension', 'id should be "myextension"');
assert.strictEqual(info.name, 'My Extension', 'name should be "My Extension"');
assert.ok(Array.isArray(info.blocks), 'blocks should be an array');
assert.ok(info.blocks.length >= 1, 'blocks should contain at least one block');

// Test behavior of implementation methods
assert.strictEqual(inst.sayHello(), 'Hello, world!', 'sayHello() should return Hello, world!');

const echoed = inst.echo('test-value');
assert.strictEqual(echoed, 'test-value', 'echo("test-value") should return "test-value"');

// If we reach here, everything passed.
console.log('All tests passed!');
