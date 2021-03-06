// Generated by CoffeeScript 1.9.3
var Buffer, Imagemin, Tools, _, _mapPath, color, crypto, fs, gulp, gutil, hashLength, imgMap, path, plumber, rename, setting,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

fs = require('fs');

path = require('path');

// _ = require('lodash');

// crypto = require('crypto');

gulp = require('gulp');

gutil = require('gulp-util');

// rename = require('gulp-rename');

// plumber = require('gulp-plumber');

// Buffer = require('buffer').Buffer;

// Imagemin = require('imagemin');

setting = require('./setting');

color = gutil.colors;

hashLength = setting.hashLength;

imgMap = {};

_mapPath = setting.mapPath;


/*
 * base functions
 */

Tools = {
  getType: function(dir) {
    var type;
    type = (path.parse(dir).ext).replace('.', '');
    if (type === 'html' || type === 'php' || type === 'ejs') {
      type = 'tpl';
    }
    return type;
  }
};

module.exports = Tools;
