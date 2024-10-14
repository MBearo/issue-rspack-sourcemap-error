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
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 如果你想使用 Babel，可以启用这个选项
                            // transpileOnly: true,
                        }
                    }
                ],
            },
            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'builtin:swc-loader',
            //             options: {
            //                 jsc: {
            //                     parser: {
            //                         syntax: 'typescript',
            //                     },
            //                 },
            //             },
            //         }
            //     ],
            // },
        ],
    },
};
