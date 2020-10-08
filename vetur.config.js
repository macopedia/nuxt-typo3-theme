module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    {
      root: "./packages/nuxt-typo3-ce", //root of subproject
      package: "./package.json", // It is relative to root property.
      tsconfig: "./tsconfig.json", // It is relative to root property.
    },
    {
      root: "./packages/nuxt-typo3-theme", //root of subproject
      package: "./package.json", // It is relative to root property.
      tsconfig: "./tsconfig.json", // It is relative to root property.
    },
  ],
};
