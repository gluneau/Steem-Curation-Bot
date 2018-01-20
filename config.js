var config = {};

config.steem = {};

config.steem.type =  'created'; //created, hot or trending
config.steem.tags =  ['steem','steemit','utopian-io']; //tags. leave empty for all trending tags
config.steem.amount = 1; //percentage of vote for each vote
config.steem.delay = 5; //delay in seconds between each vote
config.steem.username = process.env.STEEM_USER || 'ENTER_USERNAME_HERE';
config.steem.password =  process.env.STEEM_PASSWORD || 'ENTER_PASSWORD_HERE';

module.exports = config;