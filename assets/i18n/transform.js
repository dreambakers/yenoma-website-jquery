#!/usr/bin/node
const fs = require('fs');

const json = JSON.parse(fs.readFileSync("./de.json"))

const transform = (obj) => {
	var res = {};
	(function recurse(obj, current) {
		for (var key in obj) {
			var value = obj[key];
			var newKey = (current ? current + "-" + key : key);  // joined key with dot
			if (value && typeof value === "object") {
				recurse(value, newKey);  // it's a nested object, so do it again
			} else {
				res[newKey] = value;  // it's not an object, so set the property
			}
		}
	})(obj);
	return res;
}

fs.writeFile("de.json", JSON.stringify(transform(json)), function (err) {
	if (err) throw err
})