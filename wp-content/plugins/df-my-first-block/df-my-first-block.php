<?php
/**
 * Plugin Name: My First Block
 * Description: A simple Gyutenburg block
 * Version: 1.0.0
 * Author: Dean Forant
 */
function df_my_first_block_register_block_type(){
    register_block_type(__DIR__);
}
add_action('init', 'df_my_first_block_register_block_type');