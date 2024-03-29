const path = require('path')

const buildEslintCommand = (filenames) =>
    `eslint --cache --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

module.exports = {
    '*.{js,json,ts,tsx}': [buildEslintCommand],
}
