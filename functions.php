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
 * Includes
 */
require MCBIT_INC_DIR . 'enqueue.php';
require MCBIT_INC_DIR . 'blocks.php';