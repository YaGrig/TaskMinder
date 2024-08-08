import { CodegenConfig } from "@graphql-codegen/cli";
const schemaUrl = "http://localhost:8080/graphql";

const config: CodegenConfig = {
  schema: schemaUrl,
  documents: [
    "./src/apollo/**/**/*.graphql.ts",
    "./src/apollo/**/*.graphql.ts",
  ],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
