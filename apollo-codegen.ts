import { CodegenConfig } from "@graphql-codegen/cli";

const schemaUrl = `${process.env.BACKEND_URL}/graphql` || "http://localhost:8080/graphql";

const config: CodegenConfig = {
  overwrite: true,
  debug: true,
  verbose: true,
  schema: schemaUrl,
  documents: [
    "./src/apollo/**/**/*.graphql.ts",
    "./src/apollo/**/*.graphql.ts"
  ],
  generates: {
    "./src/apollo/generated-hooks.ts": {
      plugins: [
        {
          add: {
            content: [
              "/* ЭТОТ ФАЙЛ АВТОМАТИЧЕСКИ СГЕНЕРИРОВАН, ЕСЛИ НУЖНО ПЕРЕСОБРАТЬ ФАЙЛ yarn graphql */"
            ] 
          }
        },
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ]
    },
    "./src/gql/": {
      preset: "client"
    }
  }
};

export default config;
