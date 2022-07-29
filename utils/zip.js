/* 
Use this script to create a zip file of your theme. Add or remove files you want to include.
*/
const AdmZip = require('adm-zip');

const zip = new AdmZip();

// Folders
zip.addLocalFolder('./assets', 'assets');
zip.addLocalFolder('./partials', 'partials');

// Files
zip.addLocalFile('./author.hbs');
zip.addLocalFile('./default.hbs');
// zip.addLocalFile('./error-404.hbs');
// zip.addLocalFile('./home.hbs');
zip.addLocalFile('./index.hbs');
zip.addLocalFile('./package.json');
zip.addLocalFile('./post.hbs');
zip.addLocalFile('./README.md');
zip.writeZip('./dist/theme.zip');
