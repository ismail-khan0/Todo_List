// At the top of the file, import the required packages:
const path = require('path-browserify');
const util = require('util');
const buffer = require('buffer');

// Then, in your configuration object, add the following fallback configuration:
module.exports = {
  // ...
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
    },
  },
  // ...
};
