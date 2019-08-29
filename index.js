const spawnSync = require('child_process').spawnSync;

const regKey =
	'HKCR\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppModel\\PackageRepository\\Packages';
const searchKey =
	'hkey_classes_root\\\\Local Settings\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\AppModel\\\\PackageRepository\\\\Packages\\\\';
const pattern = new RegExp(searchKey, 'gi');

let packages = [];
let packagesCount = 0;

function get() {
	if (packagesCount > 0) {
		return packages;
	}

	try {
		const shell = spawnSync('reg', ['query', regKey], {
			stdio: 'pipe'
		});
		let output = shell.stdout.toString();

		output = output.replace(pattern, '');
		packages = output.split('\r\n');
		packagesCount = packages.length;

		if (packagesCount > 1) {
			packages.shift();
			packages.pop();
			packagesCount -= 2;
		}
	} catch (exp) {
		console.error(exp);
		return packages;
	}

	return packages;
}

function find(list, value, caseSensitive) {
	const count = list.length;

	if (!caseSensitive) {
		value = value.toLowerCase();
	}

	for (let i = 0; i < count; i++) {
		let item = list[i];

		if (!caseSensitive) {
			item = item.toLowerCase();
		}

		if (item.indexOf(value) > -1) {
			return true;
		}
	}

	return false;
}

function findAll(list, values, caseSensitive) {
	const count = values.length;
	const result = [];

	for (let i = 0; i < count; i++) {
		result.push(find(list, values[i], caseSensitive));
	}

	return result;
}

function hasValue(value, caseSensitive) {
	if (packagesCount === 0) {
		return false;
	}

	return find(packages, value, caseSensitive);
}

function hasList(list, caseSensitive) {
	if (packagesCount === 0) {
		return false;
	}

	const count = list.length;

	if (count === 0) {
		return [];
	}

	return findAll(packages, list, caseSensitive);
}

function has(param, caseSensitive = false) {
	if (packagesCount === 0) {
		packages = get();
	}

	if (typeof param === 'string') {
		return hasValue(param, caseSensitive);
	} else if (param instanceof Array) {
		return hasList(param, caseSensitive);
	}
}

function refresh() {
	packages = [];
	packagesCount = 0;
}

function count() {
	return packagesCount;
}

module.exports = {
	get,
	has,
	refresh,
	count
};
