const path = require('path');

module.exports={
    entry:{
        entry: './src/main.js'
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'lib'),
    },
    module:{
    },
    plugins:[
    ],
    devServer:{},
    mode: "production"
}
