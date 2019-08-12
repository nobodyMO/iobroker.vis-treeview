

// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files from package in Widget directory
 */

'use strict'

var ncp = require('ncp');
var fs = require('fs');
if (!fs.existsSync('widgets/treeview/js')){
    fs.mkdirSync('widgets/treeview/js');
}
if (!fs.existsSync('widgets/treeview/js/fancytree')){
    fs.mkdirSync('widgets/treeview/js/fancytree');
}

ncp((fs.existsSync('node_modules/jquery.fancytree/dist')?'node_modules/jquery.fancytree/dist':'../jquery.fancytree/dist'),'widgets/treeview/js/fancytree', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Copied fancytree files!');
});
