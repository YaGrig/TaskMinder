const path = require('path')

function defaultIndexTemplate(filePaths) {
  const messageText = `/* Auto-generated file by SVGR. Read WUIIcon/README.md */\n`;
  const importProvider =`import {IconProvider} from '../IconProvider';`;
  const importEntries = [importProvider];
  const exportEntries = [];

  filePaths.forEach((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const iconName = `${basename}Icon`
    const svgName = `Svg${basename}`;

    importEntries.push(`import ${svgName} from './${basename}';`);
    exportEntries.push(`export const ${iconName} = IconProvider(${svgName}, '${iconName}');`);
  })

  return messageText +
      importEntries.join('\n') +
      '\n' +
      exportEntries.join('\n');
}

module.exports = defaultIndexTemplate
