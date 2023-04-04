<?php
/**
 * Plugin Name: DF Block
 * Description: A simple block
 * version: 1.0.0
 * Author: Dean Forant
 */
function df_block_register_block(){
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'df_block_register_block');