module.exports = {
  displayName: 'shared-utils-test',
  preset: '../../../jest.preset.ts',
  transform: {
    '^.+/.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/shared/utils-test'
};
