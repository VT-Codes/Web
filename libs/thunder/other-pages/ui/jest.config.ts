module.exports = {
  displayName: 'thunder-other-pages-ui',
  preset: '../../../../jest.preset.ts',
  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/thunder/other-pages/ui'
};
