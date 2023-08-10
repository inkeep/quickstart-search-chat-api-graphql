import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.inkeep.com/graphql',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/inkeepApi/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;