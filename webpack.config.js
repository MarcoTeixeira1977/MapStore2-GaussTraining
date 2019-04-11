const path = require("path");

const themeEntries = require('./themes.js').themeEntries;
const extractThemesPlugin = require('./themes.js').extractThemesPlugin;

module.exports = require('./MapStore2/buildConfig')(
    {
        'GaussTraining': path.join(__dirname, "js", "app"),
        'GaussTraining-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
        'GaussTraining-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "/dist/",
    '.GaussTraining'
);
