

// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files from package in Widget directory
 */

'use strict'

var gentlyCopy = require('gently-copy')
gentlyCopy('node_modules/jquery.fancytree/dist', 'widgets/treeview/js/fancytree');
gentlyCopy('../jquery.fancytree/dist', 'widgets/treeview/js/fancytree');
