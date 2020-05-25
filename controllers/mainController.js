const fs = require('fs');
const path = require('path');

// ************ Function para leer un archivo HTML ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	}
};

module.exports = controller
