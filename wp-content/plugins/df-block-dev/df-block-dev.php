<?php
/**
 * Plugin Name: My First Block
 * Description: A simple Gutenburg block
 * Version: 1.0.0
 * Author: Dean Forant
 */
function df_block_dev_register_block(){
    register_block_type(__DIR__);
}
add_action('init', 'df_block_dev_register_block');