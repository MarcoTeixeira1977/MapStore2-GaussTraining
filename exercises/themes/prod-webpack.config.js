const path = require("path");

const themeEntries = require('./themes.js').themeEntries;
const extractThemesPlugin = require('./themes.js').extractThemesPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    base: __dirname,
    dist: path.join(__dirname, "dist"),
    framework: path.join(__dirname, "MapStore2", "web", "client"),
    code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
};

module.exports = require('./MapStore2/buildConfig')(
    {
        'GaussTraining': path.join(__dirname, "js", "app"),
        'GaussTraining-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
        'GaussTraining-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
    },
    themeEntries,
    paths,
    extractThemesPlugin,
    true,
    "/GaussTraining/dist/",
    '.GaussTraining',
    [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'indexTemplate.html'),
            chunks: ['GaussTraining'],
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'embeddedTemplate.html'),
            chunks: ['GaussTraining-embedded'],
            inject: true,
            hash: true,
            filename: 'embedded.html'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'apiTemplate.html'),
            chunks: ['GaussTraining-api'],
            inject: 'head',
            hash: true,
            filename: 'api.html'
        })
    ]
);
