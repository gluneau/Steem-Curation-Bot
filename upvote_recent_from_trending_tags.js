/*

This bot will upvote recent posts with the trending tags.

*/

var steem = require('steem');
var config = require('./config');

steem.api.setOptions({ url: 'wss://steemd-int.steemit.com' });

var wif = steem.auth.toWif(config.steem.username, config.steem.password, 'owner');
