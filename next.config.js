const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    target: 'serverless',
    assetPrefix: isProd ? '/_assets' : '',
    typescript: {
        ignoreDevErrors: true
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/^encoding$/, /node-fetch/))
        return config
    },

}
