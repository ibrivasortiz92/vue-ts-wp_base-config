const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // PRODUCTION MODE
    mode: 'production',
    devtool: false,

    // PROD PLUGINS
    plugins: [
        new MiniCssExtractPlugin(),
    ],

    // PROD RULES
    module: {
        rules: [
            // CSS FILES
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

    // OPTS
    optimization: {
        minimize: true,
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
});