// metro.config.js
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    assetExts: ["db", "mp4", "jpg", "jpeg", "png", "ttf", "wav", "mp3"],
    sourceExts: ["jsx", "js", "ts", "tsx", "cjs"],
  },
  watchFolders: [
    // Add custom watch folders if needed
    // For example:
    // path.resolve(__dirname, 'src'),
  ],
};
