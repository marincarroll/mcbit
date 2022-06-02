<?php
/**
 * Enqueue scripts and styles
 *
 * @package mcbit
 */

/**
 * Enqueue these assets on both front-end and editor.
 */
function mcbit_enqueue_assets() {	
	$theme_path = 'css/style.css';
	wp_enqueue_style(
		'mcbit-style', 
		MCBIT_ASSETS_URL . $theme_path, 
		[ ], 
		filemtime( MCBIT_ASSETS_DIR . $theme_path )
	);
	wp_style_add_data( 'mcbit-style', 'rtl', 'replace' );
}
add_action('enqueue_block_assets', 'mcbit_enqueue_assets');

/**
 * Enqueue these assets in editor only.
 */
function mcbit_blocks_enqueue_block_editor_assets() {
	//Editor stylesheet
	$editor_path = 'css/editor.css';
	wp_enqueue_style(
		'mcbit-editor',
		MCBIT_ASSETS_URL . $editor_path,
		[ 'mcbit-style' ],
		filemtime( MCBIT_ASSETS_DIR . $editor_path )
   );

   	//Text format example
    $textformat_asset = require(MCBIT_BLOCKS_DIR . 'build/text-format/index.asset.php');
	wp_enqueue_script(
        'mcbit-textformat', 
        MCBIT_BLOCKS_URL. 'build/text-format/index.js', 
        $textformat_asset['dependencies'],
        $textformat_asset['version']
    );

	//Global attribute example
    $global = require(MCBIT_BLOCKS_DIR  . 'build/global-attr/index.asset.php');
	wp_enqueue_script(
        'mcbit-thingy-editor', 
        MCBIT_BLOCKS_URL. 'build/global-attr/index.js', 
        $thingy_asset['dependencies'],
        $thingy_asset['version']
    );

    mcbit_enqueue_blocks_core_mods();
}
add_action('enqueue_block_editor_assets', 'mcbit_blocks_enqueue_block_editor_assets');

/**
 * Automatically enqueue all editor scripts in blocks/src/core-blocks
 * (Or throw error if block needs to be built)
 */
function mcbit_enqueue_blocks_core_mods() {
    $dirs = glob( MCBIT_BLOCKS_DIR . 'src/core-blocks/*' );

    foreach( $dirs as $dir ) {
        $block = basename($dir);
        $path  = 'build/core-blocks/' . $block;
        $asset = require(MCBIT_BLOCKS_DIR . $path . '/index.asset.php');

        wp_enqueue_script(
            'mcbit-core-' . $block, 
            MCBIT_BLOCKS_URL. $path . '/index.js', 
            $asset['dependencies'],
            $asset['version']
        );
    }
}

/**
 * Enqueue these assets on front-end only.
 */
function mcbit_blocks_enqueue_frontend_assets() {
    mcbit_blocks_enqueue_thingy_script();

	//Enqueue assets for core blocks only if they are present
    if( has_block('core/image') ){   
        $image_path = 'js/image.js';
        wp_enqueue_script(
            'mcbit-image', 
            MCBIT_ASSETS_URL . $image_path,
            [ ],
            filemtime( MCBIT_ASSETS_DIR  . $image_path ), 
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'mcbit_blocks_enqueue_frontend_assets' );

/**
 * Enqueue an asset for global attribute, only if blocks with it set are present
 */
function mcbit_blocks_enqueue_thingy_script() {
    global $post;
    if( !$post ) { return; }
    $blocks = parse_blocks($post->post_content);

    //Search through blocks on page until a block with 'thingy' class is found
    foreach ($blocks as $block) {
        $attrs = $block['attrs'];
        
        if( !$attrs || !isset($attrs['className']) ) {
            return;
        }
        
        if( str_contains($attrs['className'], 'thingy') ) {   
            $thingy_patb = 'js/thingy.js';
            wp_enqueue_script(
                'mcbit-thingy-behavior', 
                MCBIT_ASSETS_URL. $thingy_patb,
                [ ],
                filemtime( MCBIT_ASSETS_DIR  . $thingy_patb ), 
                true
            );
            
            break;
        }
    }
}