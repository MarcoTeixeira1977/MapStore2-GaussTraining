/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const assign = require('object-assign');

const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
/**
 * Add custom (overriding) translations with:
 *
 * ConfigUtils.setConfigProp('translationsPath', ['./MapStore2/web/client/translations', './translations']);
 */
ConfigUtils.setConfigProp("translationsPath", [
    "./MapStore2/web/client/translations"
]);

ConfigUtils.setConfigProp('themePrefix', 'GaussTraining');

/**
 * Use a custom plugins configuration file with:
 *
 * ConfigUtils.setLocalConfigurationFile('localConfig.json');
 */
ConfigUtils.setLocalConfigurationFile('./localConfig.json');

/**
 * Use a custom application configuration file with:
 *
 * const appConfig = require('./appConfig');
 *
 * Or override the application configuration file with (e.g. only one page with a mapviewer):
 *
 * const appConfig = assign({}, require('../MapStore2/web/client/product/appConfig'), {
 *     pages: [{
 *         name: "mapviewer",
 *         path: "/",
 *         component: require('../MapStore2/web/client/product/pages/MapViewer')
 *     }]
 * });
 */
const appConfig = require('../MapStore2/web/client/product/appConfig');

/**
 * Define a custom list of plugins with:
 *
 * const plugins = require('./plugins');
 */
const pluginsDef = require('../MapStore2/web/client/product/plugins');
require('../MapStore2/web/client/product/main')(appConfig, pluginsDef);
const {plugins, ...other} = pluginsDef;

require('../MapStore2/web/client/product/main')(appConfig, {
    plugins: {
        ...plugins,
        PrintPlugin: require('./plugins/Print')
    },
    ...other
});

const PrintUtils = require('../MapStore2/web/client/utils/PrintUtils');
const SecurityUtils = require('../MapStore2/web/client/utils/SecurityUtils');

const printSpecFun = PrintUtils.getMapfishPrintSpecification;
PrintUtils.getMapfishPrintSpecification = (spec) => {
    const securityInfo = SecurityUtils.getSecurityInfo();
    return assign(printSpecFun(spec), {
        user: securityInfo.user && securityInfo.user.name || 'anonymous',
        extra: spec.extra || ''
    });
};
