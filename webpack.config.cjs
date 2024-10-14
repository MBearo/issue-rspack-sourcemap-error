const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    // Use `.swcrc` to configure swc
                    loader: "swc-loader"
                }
            },
        ],
    },
};
