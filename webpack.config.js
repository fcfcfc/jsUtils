const path = require('path');

module.exports = {
    entry:{
        entry: './src/main.js'
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd'
    },
    module:{
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, './src')
            ],
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
        }]
    },
    plugins:[
    ],
    devServer:{},
    mode: "production"
}
