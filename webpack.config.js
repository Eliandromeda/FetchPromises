var path= require('path');

module.exports=
{
    context:path.resolve('js'),

    entry:['./index.es6'],

    output:{
        path:path.resolve('build/js'),
        filename:"bundle.js"
    },
    watch:true,
    devServer:
    {
        liveReload: true
    },

     //That is the module babel to identify Ems6 to Ems6
     module:
     {
         rules:[
             {
                 test: /\.es6$/,
                 exclude: /node_modules/,
                 use: {
                     loader: "babel-loader"
                 }
             }
 
         ]
     },
     //we define the extensions that we could read because webpack doesn't recocognize Em6 extension just js by default.
     resolve:
     {
        modules: [
            path.resolve(__dirname, 'js'),
            'node_modules'
          ],
         extensions:[' ', '.js', '.es6']
     }
}