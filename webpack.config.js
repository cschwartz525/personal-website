const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    // Client
    {
        devtool: 'source-map',
        entry: './client/react/site.tsx',
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            path: `${__dirname}/dist/client`,
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'public' }
                ]
            })
        ]
    },
    // Styles
    {
        entry: './client/sass/base.scss',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'client/style',
                                name: '[name].min.css'
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        }
    },
    // Server
    {
        devtool: 'source-map',
        entry: './server/app.ts',
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        'ts-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            path: `${__dirname}/dist/server`,
            publicPath: '/',
            filename: 'app.js'
        }
    }
];
