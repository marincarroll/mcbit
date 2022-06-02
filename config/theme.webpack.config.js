const defaultConfig = require( '@wordpress/scripts/config/webpack.config' ),
	  NoEmitPlugin  = require('no-emit-webpack-plugin');

const path = require('path');

module.exports = {
	...defaultConfig,
	context: path.resolve(__dirname, '../assets/scss'),
	entry: {
		editor: './editor.scss',
		style : './style.scss',
 	}, 
	optimization: {
		...defaultConfig.optimization,
		splitChunks: false
	},
	plugins: [
		...defaultConfig.plugins,
		new NoEmitPlugin( [ 
			'editor.js', 
			'style.js'
		] )
	]
};
