const { promisify } = require('util');
const stat = promisify(require('fs').stat);
const path = require('path');

const loadEnvironment = require('../Utilities/loadEnvironment');
const findPackageRoot = require('../Utilities/findPackageRoot');
const getClientConfig = require('../Utilities/getClientConfig');
const getServiceWorkerConfig = require('../Utilities/getServiceWorkerConfig');

/**
 * We need a root directory for the app in order to build all paths relative to
 * that app root. It's not safe to use process.cwd() here because that depends
 * on what directory Node is run in. The project root should be the dir of the
 * webpack.config.js which called this function.
 *
 * There is no safe way to get the path of this function's caller, so instead we
 * expect that the webpack.config.js will do:
 *
 *     configureWebpack(__dirname);
 */
async function validateRoot(appRoot) {
    if (!appRoot) {
        throw new Error(
            'Must provide the root directory of the PWA as the first parameter to `configureWebpack()`. In webpack.config.js, the recommended code is `configureWebpack(__dirname)`.'
        );
    }
    // If root doesn't exist, an ENOENT will throw here and log to stderr.
    const rootIsValid = await isRealDirectory(appRoot);
    if (!rootIsValid) {
        throw new Error(
            `Provided application root "${appRoot}" is not a directory.`
        );
    }
}

function getMode(cliEnv = {}, projectConfig) {
    if (cliEnv.mode) {
        return cliEnv.mode;
    }
    if (projectConfig.isProd) {
        return 'production';
    }
    return 'development';
}

function isDevServer() {
    return process.argv.find(v => v.includes('webpack-dev-server'));
}

async function configureWebpack({ context, vendor = [], special = {}, env }) {
    await validateRoot(context);

    const babelConfigPresent = await fsHas(
        path.resolve(context, 'babel.config.js')
    );

    const projectConfig = loadEnvironment(context);

    const paths = {
        src: path.resolve(context, 'src'),
        output: path.resolve(context, 'dist')
    };

    const features = await Promise.all(
        Object.entries(special).map(async ([packageName, flags]) => {
            const depPath = path.resolve(context, packageName);
            if (await isRealDirectory(depPath)) {
                return [depPath, flags];
            }
            return [await findPackageRoot.local(packageName), flags];
        })
    );

    const hasFlag = flag =>
        features.reduce(
            (hasIt, [packagePath, flags]) =>
                flags[flag] ? [...hasIt, packagePath] : hasIt,
            []
        );

    const mode = getMode(env, projectConfig);

    const configOptions = {
        mode,
        context,
        babelConfigPresent,
        paths,
        hasFlag
    };

    const serviceWorkerConfig = getServiceWorkerConfig(configOptions);

    const clientConfig = await getClientConfig({
        ...configOptions,
        vendor,
        projectConfig
    });

    return { clientConfig, serviceWorkerConfig };
}

module.exports = configureWebpack;
