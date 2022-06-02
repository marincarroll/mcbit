<?php
/**
 * Gutenberg Blocks setup
 * 
 * @package mcbit
 */

/**
 * Automatically registers all blocks in blocks/src/custom-blocks by scanning for block.json
 */
add_action( 'init', 'mcbit_register_blocks' );
function mcbit_register_blocks() {
	$dirs = glob( MCBIT_BLOCKS_DIR  . 'src/custom-blocks/*' );
	foreach ( $dirs as $dir ) {
		$options = [];

		if ( file_exists( $dir . '/render.php' ) ) {
			//Only add a render callback if a file named render.php exists
			$options['render_callback'] = function( $attributes, $content, $block ) use ( $dir ) {
				$context = $block->context;

				ob_start();
				include $dir . '/render.php';
				return ob_get_clean();
			};
		};

		register_block_type( $dir, $options );
	};
}

/**
 * Add a category for our custom blocks
 */
add_filter( 'block_categories_all', 'mcbit_register_blocks_category', 10, 2 );
function mcbit_register_blocks_category( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'mcbit',
				'title' => __( 'Blocks in Theme Custom', 'mcbit' )
			)
		),		
		$categories
	);
}