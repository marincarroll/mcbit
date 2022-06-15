const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const fs = require( 'fs' );
const { resolve } = require('path');

function getEntries( dir ) {
	return fs
		   .readdirSync( `blocks/src/${ dir }` )
		   .reduce( ( entries, path ) => {
				let name =  `${ dir }/${ path }`;
				entries[ name ] = `./${ name }`;
				
				return entries;
			}, {} );
}

const chunkConfig = {
	...defaultConfig.optimization.splitChunks.cacheGroups.style,
	name( _, chunks, cacheGroupKey ) {
		const chunkName = chunks[ 0 ].name;
		return `${ 	chunkName }/${ cacheGroupKey }`;
	}
};

defaultConfig.plugins.map( p => {
    if(p.constructor.name == 'CopyPlugin') {
		//Default context of "src/" conflicted with our structure.
		p.patterns[0].context = '';
    }
	return p;
});

/**
 * Partially inspired by
 * https://github.com/WordPress/gutenberg-examples/blob/trunk/non-block-examples.webpack.config.js
 */
module.exports = {
	...defaultConfig,
	stats: {
		modules: false
	},
	context: resolve(__dirname, '../blocks/src'),
	entry: {
		...getEntries('core-blocks'),
		...getEntries('custom-blocks'),
		tooltip : './tooltip',
		fadeup  : './fadeup',
 	}, 
	output: {
		...defaultConfig.output,
		filename: '[name]/index.js'
	},
	optimization: {
		...defaultConfig.optimization,
		chunkIds: "named",
		splitChunks: {
			cacheGroups: {
				...defaultConfig.optimization.splitChunks.cacheGroups,
				style: {
					...chunkConfig
				},
				editor: {
					...chunkConfig,
					test: /[\\/]editor(\.module)?\.(sc|sa|c)ss$/
				}
			}
		}
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
		  'base': resolve(__dirname, '../assets/scss/base'),
		  'img': resolve(__dirname, '../assets/img')
		}
	},
	plugins: [
		...defaultConfig.plugins
	]
};
