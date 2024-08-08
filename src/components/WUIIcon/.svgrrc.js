module.exports = {
    indexTemplate: require('./svgrTemplates/svgr-index-template.js'),
    replaceAttrValues: {
        '#292A43': 'currentColor',
        '#2C3E50': 'currentColor',
        '#fff': 'currentColor',
    },
    icon: true,
    typescript: true,
    outDir: 'iconComponents'
}
