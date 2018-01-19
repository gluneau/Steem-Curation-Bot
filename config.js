var config = {};

config.steem = {};

config.steem.type =  'followers'; //either following or followers
config.steem.message = 'Gift!'; //message to be send in each memo
config.steem.amount = '0.001 SBD'; //amount of SBD or STEEM to send to each follower/following
config.steem.delay = 5; //delay in seconds between each memo
config.steem.start = ''; //username to start at
config.steem.username = process.env.STEEM_USER || 'ENTER_USERNAME_HERE';
config.steem.password =  process.env.STEEM_PASSWORD || 'ENTER_PASSWORD_HERE';

module.exports = config;