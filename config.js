// Thin wrapper so Renovate can find your config when it's stored in `configs/config.js`.
// This keeps the real file in `configs/` while exposing a root-level `config.js`
// that Renovate will automatically load from the working directory.

module.exports = require('./configs/config.js');
