module.exports = {
  detectPackageFiles,
};

function detectPackageFiles(config, fileList) {
  const { logger } = config;
  logger.debug('npm.detectPackageFiles()');
  const packageFiles = [];
  if (config.npm.enabled) {
    for (const file of fileList) {
      if (file === 'package.json' || file.endsWith('/package.json')) {
        packageFiles.push(file);
      }
    }
  }
  return packageFiles;
}
