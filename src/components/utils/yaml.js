/*
    https://gist.github.com/hami-jp/75e233922c55dc83c6d3
        & read path arrange
*/
const fs = require('fs')
const yaml = require('js-yaml')

const _type = Object.prototype.toString

const isObject = function (variable) {
    return variable !== null && _type.call(variable) === '[object Object]'
}

const toObjectNode = function (nodes, data) {
    if (isObject(data)) {
        const obj = new nodes.Object()

        for (const i in data) {
            obj.set(i, toObjectNode(nodes, data[i]))
        }
        return obj
    }

    return new nodes.Ident(data, data)
}

module.exports = function () {
    return function (style) {
        const nodes = this.nodes

        style.define('yaml', p => {
            let obj, hash

            try {
                obj = yaml.safeLoad(fs.readFileSync(require('path').resolve(p.val), 'utf8'))
            } catch (e) {
                console.error(e)
            }

            hash = toObjectNode(nodes, obj)
            return hash
        })
    }
}
