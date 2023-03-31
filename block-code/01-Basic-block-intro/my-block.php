<?php
/**
 * Plugin Name: My Block
 * Description: A simple block
 * Version: 1.0.0
 * Author: Dean Forant
 */
function my_block_register_block() {
    register_block_type(__DIR__ . '/build') ;
}
add_action('init', 'my_block_register_block');