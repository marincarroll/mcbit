<?php
/**
 * @package mcbit
 */

define( 'MCBIT_BLOCKS_URL', get_template_directory_uri() . '/blocks/' );
define( 'MCBIT_BLOCKS_DIR', get_template_directory() . '/blocks/' );
define( 'MCBIT_ASSETS_URL', get_template_directory_uri() . '/assets/' );
define( 'MCBIT_ASSETS_DIR', get_template_directory() . '/assets/' );
define( 'MCBIT_INC_DIR', get_template_directory() . '/inc/' );

/**
 * Load i18n file
 */
function mcbit_load_pot() {
    load_theme_textdomain( 'mcbit', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'mcbit_load_pot' );

/**
 * Includes
 */
require MCBIT_INC_DIR . 'enqueue.php';
require MCBIT_INC_DIR . 'blocks.php';