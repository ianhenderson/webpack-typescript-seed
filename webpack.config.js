const commonConfig = {
    entry: { },
    output: {
        path: __dirname + '/build',
        publicPath: '/assets/',
        filename: '[name].js',
        library: 'TestLib',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js'],
        alias: {
            app: __dirname,
            src: __dirname + '/src'
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!postcss',
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less',
            },
            {
                test: /\.png|jpg|gif$/,
                loader: 'url',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ]
    },
}

const clientConfig = Object.assign(
    {},
    commonConfig,
    {
        entry: {
            bundle: __dirname + '/src/client/client.ts',
        }
    }
)

const serverConfig = Object.assign(
    {},
    commonConfig,
    {
        entry: {
            server: __dirname + '/src/server/server.ts',
        },
        target: 'node',
        externals: {
            fs: 'fs',
            net: 'net'
        }
    }
)

module.exports = [
    clientConfig,
    serverConfig
]
