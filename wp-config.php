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
define( 'DB_NAME', 'newhorizon_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'Zzke)LpR)<$sX_)sC*U5RB&HN!!wJUtvNt+T+b1_X_M4E^_[<pxuM7kt{nmCNO$p' );
define( 'SECURE_AUTH_KEY',  'a.Q+@lKHnnKDmrV %DzKR|v4JXf je8`6n_ox&)(^-U z1juxUeKsEz0SL|@!#|R' );
define( 'LOGGED_IN_KEY',    'Givh!{z<~v`w *. I9=k>jT|HwvTNt4Wp%x`Vk7<D8&P^2t6EX>RG*g[ 4Oy+J|+' );
define( 'NONCE_KEY',        'gCqZ&h;b([dkF~,<1.=hc~sQ1~6xJ^5XXpqYBn J_P@8D]oj$pp$)[BsTKNp=[A2' );
define( 'AUTH_SALT',        'F(&Z%KeK}|7,!*KjWI2@IrOzS#5F#Z;bWilYju?o~A(]?nKwIcN|]4K,l#g1*fVZ' );
define( 'SECURE_AUTH_SALT', '8 +tBoRy<!,k^+rrkXja:6>_j}gAER Lst}79!u&a=I`?|^!Kw7,D~&/3eC&EUv?' );
define( 'LOGGED_IN_SALT',   '.@6z+:u`J]+i/+{v&JmvpsGp,L!e!Q6IB/+nq*%%xN<:H;v<c{&/#,zwqw@$DzIp' );
define( 'NONCE_SALT',       '<T>%DtC<pj)ThD=:p-:)/WFb3g :f@w)xy?BdN$pI UU%.Yo6qw4>&sO8=a)*B8V' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
