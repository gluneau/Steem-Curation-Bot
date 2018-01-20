# Steem-Upvote-Bot
Bot that upvotes posts from trending/following/followers/etc... TBD


### New Projects
- What is the project about?

This project will upvote posts from a set of tags. These tags can be set manually in the configuration files or they can be pulled from either hot, trending or created. These parameters can be set in the configuration file:

config.steem.type =  'created'; //created, hot or trending
config.steem.tags =  ['steem','steemit','utopian-io']; //tags. leave empty for all trending tags
config.steem.amount = 1; //percentage of vote for each vote
config.steem.delay = 5; //delay in seconds between each vote
config.steem.username = process.env.STEEM_USER || 'ENTER_USERNAME_HERE';
config.steem.password =  process.env.STEEM_PASSWORD || 'ENTER_PASSWORD_HERE';


- Technology Stack

The project is built in `NodeJS` with `JavaScript` and `npm`. It uses the `SteemJS` package which is set in `package.json`. Set-up the development environment by installing `NodeJS` and `npm`. Change to the directory of the script in a terminal and execute `npm install --save`. Run the script by entering command `node upvote_recent_from_trending_tags.js`.

- Roadmap

Make more parameters in `config.js` to select which posts get upvoted.
Add functionality to upvote comments also.


- How to contribute?

Upvote, re-steem and comment on this post. Follow my Steem account. Follow, Star, watch, clone, fork, commit, push & pull this GitHub repository/profile.