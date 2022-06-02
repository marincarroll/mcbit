const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const fs = require('fs');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function getEntries(parentDir) {
	return fs.readdirSync(`blocks/src/${parentDir}`).reduce((entries, blockDir) => {
		const name = `${parentDir}/${blockDir}`;
		entries[name] = `./${name}`;

		return entries;
	}, {});
}

/**
 * Partially inspired by
 * https://github.com/WordPress/gutenberg-examples/blob/trunk/non-block-examples.webpack.config.js
 */
module.exports = {
	...defaultConfig,
	context: path.resolve(__dirname, '../blocks/src'),
	entry: {
		...getEntries('core-blocks'),
		...getEntries('custom-blocks'),
		'text-format': './text-format',
		'global-attr': './global-attr',
	},
	output: {
		...defaultConfig.output,
		filename: '[name]/index.js',
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			base: path.resolve(__dirname, `./assets/scss/base`),
		},
	},
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin({
			patterns: [
				{
					from: '**/render.php',
					noErrorOnMissing: true,
				},
			],
		}),
	],
};
