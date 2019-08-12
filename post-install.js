

// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files from package in Widget directory
 */

'use strict'

var gentlyCopy = require('gently-copy');
var fs = require('fs');
if (!fs.existsSync('widgets/treeview/js')){
    fs.mkdirSync('widgets/treeview/js');
}
if (!fs.existsSync('widgets/treeview/js/fancytree')){
    fs.mkdirSync('widgets/treeview/js/fancytree');
}
if (fs.existsSync('node_modules/jquery.fancytree/dist')){
  gentlyCopy('node_modules/jquery.fancytree/dist', 'widgets/treeview/js/fancytree');
} else {
  gentlyCopy('../jquery.fancytree/dist', 'widgets/treeview/js/fancytree');
}
