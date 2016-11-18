// This file isn't transpiled

// Register babel to transpile before test run
require('babel-register')();

// Disable webpack features
require.extensions['.css'] = function() {};
