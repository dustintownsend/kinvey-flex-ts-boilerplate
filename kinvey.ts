require('dotenv').config();
const path = require('path');
const { 
    KINVEY_CLI_HOST,
} = process.env;

/**
 * To override a default property, add it to config.
 * path.package must point to 'dist' folder.
 * path.session can use default location - just delete line.
 */
const config = {
    host: KINVEY_CLI_HOST || 'https://manage.kinvey.com/',
    paths: {
        project: path.join(process.cwd(), '.kinvey'),
        package: path.join(process.cwd(), 'dist'),
        session: path.join(process.cwd(), '.kinvey-cli')
      }
};

process.env.NODE_CONFIG = `${JSON.stringify(config)}`;

require('kinvey-cli');