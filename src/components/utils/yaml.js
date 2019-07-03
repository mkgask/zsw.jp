/*
    https://gist.github.com/hami-jp/75e233922c55dc83c6d3
        & read path arrange
*/
let fs = require('fs');
let yaml = require('js-yaml');

let _type = Object.prototype.toString;

let isObject = function (variable) {
    return variable !== null && _type.call(variable) === '[object Object]';
};

let toObjectNode = function (nodes, data) {
    if (isObject(data)) {
        let obj = new nodes.Object();
        for (let i in data) obj.set(i, toObjectNode(nodes, data[i]));
        return obj;
    }

    return new nodes.Ident(data, data);
}

module.exports = function () {
    return function (style) {
        let nodes = this.nodes;

        style.define('yaml', function (p) {
            let obj, hash;

            try {
                obj = yaml.safeLoad(fs.readFileSync(require("path").resolve(p.val), 'utf8'));
            } catch (e) {
                console.error(e);
            }

            hash = toObjectNode(nodes, obj);
            return hash;
        })
    };
};
