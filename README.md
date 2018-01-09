## Overview
The purpose of this project is to provide a boilerplate for Kinvey Flex Services (https://devcenter.kinvey.com/nodejs/guides/flex-services) using TypeScript and Webpack.
The current implementation is barebones, but may evolve overtime.

## Quickstart
1. Create a .env file. Use .env.example as a starting point.
2. Run either `yarn` or `npm install` to install the node modules.
3. Initialize Kinvey by running `npm run kinvey init` and complete in the prompts. This will generate a .kinvey-cli file.
4. Initialize Flex by running `npm run kinvey flex init` and complete the prompts. This will generate a .kinvey file.
5. Deploy by running `npm run kinvey-flex-deploy`
6. To test locally run `npm run dev`.

## Some things to know
* A `kinvey-flex-sdk` TypeScript declaration file is needed to take full advantage of TypeScript. Currently one does not exist.
* You can change the path where the .kinvey-cli file is stored. This boilerplate changed the default location of your os home directory, but this can be set back to default by removing the `path.session` property from `kinvey.js`.
* TypeScript is not required to use this. Can also use plain ol Javascript and beyond (ES2017, etc.) see `tsconfig.json`.
* Using the version 3 beta of Kinvey-CLI.
* Can run any commands available from the Kinvey-CLI by using `npm run kinvey`. It will show an error currently if a full command is not specified.

## Future improvements
* Built in testing to make it easier to do local testing. For example, include the headers needed for testing.
* Use webpack to cleanup the bundle.js. Removing comments, etc.
* Look into hot module reloading for local testing (so don't need to restart node process for every change).

## License
MIT

## Support
No support provided. Use at your own risk.