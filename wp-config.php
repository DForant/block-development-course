<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_block_course' );

/** Database username */
define( 'DB_USER', 'db_deano' );

/** Database password */
define( 'DB_PASSWORD', 'F@52z147dea' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'nbBVj,E`pRxOCm^h$Ltk <]5r-Lc-@4+o#9<1d_2Iq#}A;c00`R/IN<T]-c: %MX' );
define( 'SECURE_AUTH_KEY',  'D.Ey6BmpmfkxXqc-cAH$d)[7L)!z=_,hB-w^o.L->!;Z+6+9e?P;$vmX`L.LV@`s' );
define( 'LOGGED_IN_KEY',    ',o80!7NZcqv3i-=z^AEC{ug9^(p&o (lJ}^Y${v@cS[!!F!Q5 QP! =;~u)s=JlK' );
define( 'NONCE_KEY',        '&u<PTR,f.b;HwQbBYyK5dEl8KqKg</Q9n2)A7%a~/-J%:NsR.m!%@r/FOl U  WZ' );
define( 'AUTH_SALT',        'oiUK>ZhrI%e:yO}AZ9+cR !bW|<O-zIa9;AFNe2d(KjPMgXgLWYsKS*_O.g8z>X%' );
define( 'SECURE_AUTH_SALT', ' #ss}z? =(PI*aZXSkcY,O#_w|e]uQzWgwCZ9R5FH3&>jSehN7$52<BAW,f@YcRG' );
define( 'LOGGED_IN_SALT',   'Q|1teI8r~DOG7w_J{%066fQQb12QCg;a0u`UAV5xt}?YE>g^4B(qYFlc4:^|oq%w' );
define( 'NONCE_SALT',       'tt{kQiTM#@C{8Yu&rz1l8EvfLZ((u4~L`#hrC{#+2AcwX-]M=Eqa@v=b;R=c)TZ5' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
