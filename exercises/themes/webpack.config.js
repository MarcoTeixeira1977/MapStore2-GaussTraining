const path = require("path");

const themeEntries = require('./themes.js').themeEntries;
const extractThemesPlugin = require('./themes.js').extractThemesPlugin;
/*
const themeEntries = require('./themes.js').themeEntries;
const extractThemesPlugin = require('./themes.js').extractThemesPlugin;
*/
const assign = require('object-assign');

module.exports = assign({}, require('./MapStore2/buildConfig')(
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
), {
        devServer: {
            proxy: {
                '/rest/geostore': {
                    target: "http://localhost:8090/mapstore",
                    secure: false,
                    headers: {
                        host: "localhost:8090"
                    }
                },
                '/pdf': {
                    target: "http://localhost:8090/mapstore",
                    secure: false,
                    headers: {
                        host: "localhost:8090"
                    }
                },
                '/mapstore/pdf': {
                    target: "http://localhost:8090",
                    secure: false,
                    headers: {
                        host: "localhost:8090"
                    }
                },
                '/proxy': {
                    target: "http://localhost:8090/mapstore",
                    secure: false,
                    headers: {
                        host: "localhost:8090"
                    }
                },
                '/docs': {
                    target: "http://localhost:8081",
                    pathRewrite: { '/docs': '/mapstore/docs' }
                }
            }
        }
});
