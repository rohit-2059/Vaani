const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration optimized for mobile development
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Optimize transforms for mobile performance
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true, // Improve startup performance on mobile
      },
    }),
  },
  resolver: {
    // Ensure mobile-compatible asset extensions
    assetExts: ['bin', 'txt', 'jpg', 'png', 'json', 'gif', 'webp', 'svg'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
