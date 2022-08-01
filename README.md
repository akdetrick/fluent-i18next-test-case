## i18next-fluent dist issues

This repo is a minimal example of i18next-fluent modules being incompatible with common consumers.

This example uses create-react-app with react-app-rewired, but the issues can also reproduced in NextJS.

### The errors

`i18next-fluent-backend` references a `lib` directory when importing `ftl2js`:

```
Creating an optimized production build...
Failed to compile.

Module not found: Error: Package path ./lib/ftl2js is not exported from package /Users/akdetrick/narmi/poc-rewired-fluent/node_modules/fluent_conv (see exports field in /Users/akdetrick/narmi/poc-rewired-fluent/node_modules/fluent_conv/package.json)
```


When the backend is removed as a dependency, we still get the following errors:

```
Failed to compile.

Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)
File was processed with these loaders:
 * ./node_modules/babel-loader/lib/index.js
 * ./node_modules/source-map-loader/dist/cjs.js
You may need an additional loader to handle the result of these loaders.
> import { FluentParser } from "./parser.js";
| import { FluentSerializer } from "./serializer.js";
| export * from "./ast";
```

### How to reproduce these errors

1. use create-react-app OR NextJS to initialize a new project
2. add dependencies for `i18next` fluent support with backend
3. add the `i18n.js` config to the project
4. `npm run build`
