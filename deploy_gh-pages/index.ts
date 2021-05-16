const ghpages = require('gh-pages');
const fs = require('fs');

const publish_dist = 'docs';

ghpages.publish(publish_dist, {
    // options
    message: '[deploy] deploy gh-pages branch',

    async beforeAdd(git) {
        await fs.copyFile('circleci_config.yml', '../docs/.circleci/config.yml', (err) => {
            if (err) { console.log(err.stack); }
        })
    }
}, function(err) {
    // callback
    if (err) { console.log(err.stack); }
});
