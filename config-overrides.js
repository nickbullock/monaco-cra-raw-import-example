const { resolve } = require('path');
const { removeModuleScopePlugin } = require('customize-cra')

module.exports = function override(config, env) {
    const newConfig = removeModuleScopePlugin()(config, env);

    console.log('>>>> plugins', newConfig.plugins.map(p => p.constructor.name))
    console.log('>>>> babel rule which compiles typescript', newConfig.module.rules[2].oneOf[1])

    newConfig.module.rules.push(
        {
            test: /\.(d\.ts)$/i,
            include: resolve(__dirname, 'typings'),
            use: [
                {
                    loader: 'raw-loader',
                    options: {
                        esModule: false,
                    },
                },
            ],
        },
    );

    return newConfig;
}
