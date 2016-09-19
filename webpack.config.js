const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const parts = require('./libs/parts');
const pkg = require('./package.json');
// occurence order; dedup 

const PATHS = {
	app: path.join(__dirname, 'client'), 
  style: [
    path.join(__dirname, 'client/styles', 'main.css')
  ],
	build: path.join(__dirname, 'build')
};

const common = {
  entry: {
  	app: PATHS.app + '/app.jsx',
    style: PATHS.style,
  	vendor: Object.keys(pkg.dependencies).filter(packages => packages !== 'mongoose')
  },
  output: {
      path: PATHS.build,
      filename: "[name].js"
  },
  plugins: [
  	new HtmlWebpackPlugin({
  		title: 'Regexcellence',
      template: PATHS.app + '/index.ejs'
  	})
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //Cache directory improves performance.
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    //Empty string needed. 
    extensions: ['', '.js', '.jsx', '.node']
  },
  node: {
    // For fixing erorr in modules 'fs' and 'net'; console/tls for mongoose error.
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

var config;

const TARGET = process.env.npm_lifecycle_event;
// Detect how npm is run and branch based on that
process.env.BABEL_ENV = TARGET;

switch(TARGET) {
  case 'build':
    config = merge(common, 
    	{
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
				}
			},
			parts.clean(PATHS.build),
			parts.setFreeVariable(
	      'process.env.NODE_ENV',
	      'production'
			),
			parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'redux', 'react-redux']
			}),
			parts.minify(),
			parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app])
    );
    break;

  default:
    config = merge(common, 
    	{
        devtool: 'source-map'
			},
    	parts.setupCSS(PATHS.style),
    	parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
			})
    );
}
module.exports = validate(config);
