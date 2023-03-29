<?php
/**
 * Plugin Name: My Fisrt Block
 * Description: A simple gutenburg block
 * Version: 1.0.0
 * Author: Dean Forant
 */
function df_my_first_block_register_block(){
    register_block_type(__DIR__);
}
add_action('init', 'df_my_first_block_register_block');