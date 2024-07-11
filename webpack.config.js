const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const config = {
        devtool: 'eval-cheap-module-source-map',
        entry: {
            app: [`./src/script.js`],
        },
        devServer: {
            allowedHosts: 'all',
            static: [
                {
                    directory: path.join(__dirname, 'static'),
                    watch: false,
                },
            ],
            hot: false,
        },
        resolve: {
            fallback: { path: false, url: false },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'esbuild-loader',
                },
            ],
        },
    };

    return config;
};
