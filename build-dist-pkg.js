const fs = require('fs');
const pkg = require('./package.json');

/**
 * Remove scripts and devDependencies from package.json
 * and save it in the dist folder. This will be the package.json
 * that is send up to Kinvey on deploy.
 */

delete pkg.scripts;
delete pkg.devDependencies;

var json = JSON.stringify(pkg, null, 2);
try {
    fs.writeFileSync('./dist/package.json', json);
    console.log('updated dist/package.json');
} catch (error) {
    throw error;
}