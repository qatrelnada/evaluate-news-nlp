const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
})
