#  Webpack error

`Module not found: Error: Can't resolve 'aws-sdk' when importing Webpack`

To reproduce:

```shell
npm install
npm run build
```

## Full error:

```
[clarkj84:~/Desktop/webpack-err]$ npm run build

> Desktop@1.0.0 build /Users/clarkj84/Desktop/webpack-err
> webpack --config webpack.config.dev.js

Hash: 25000e5a7d0cf6ca86b9
Version: webpack 4.26.0
Child
    Hash: 25000e5a7d0cf6ca86b9
    Time: 40147ms
    Built at: 22/11/2018 21:16:41
     1 asset
    Entrypoint main = main.bundle.js
       [1] external "path" 42 bytes {0} [built]
       [9] (webpack)/lib/Template.js 7.96 KiB {0} [built]
      [39] (webpack)/lib/dependencies/DependencyReference.js 1.75 KiB {0} [built]
      [45] (webpack)/lib/util/createHash.js 1.92 KiB {0} [built]
      [46] (webpack)/lib/Module.js 10.1 KiB {0} [built]
      [53] (webpack)/lib/ModuleFilenameHelpers.js 5.36 KiB {0} [built]
      [60] (webpack)/lib/Dependency.js 1.97 KiB {0} [built]
      [79] (webpack)/lib/ExternalsPlugin.js 546 bytes {0} [built]
      [87] (webpack)/lib/Stats.js 38.2 KiB {0} [built]
     [110] (webpack)/lib/node/NodeTemplatePlugin.js 880 bytes {0} [built]
     [166] (webpack)/lib/web/JsonpTemplatePlugin.js 751 bytes {0} [built]
     [510] (webpack)/lib/webpack.js 7.71 KiB {0} [built]
     [512] (webpack)-dev-middleware/index.js 2.21 KiB {0} [built]
     [513] ./index.js 532 bytes {0} [built]
    [1321] ./webpack.config.dev.js 437 bytes {0} [built]
        + 1308 hidden modules
    
    WARNING in ./node_modules/terser-webpack-plugin/dist/worker.js 14:130-137
    Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
     @ ./node_modules/terser-webpack-plugin/dist/TaskRunner.js
     @ ./node_modules/terser-webpack-plugin/dist/index.js
     @ ./node_modules/terser-webpack-plugin/dist/cjs.js
     @ (webpack)/lib/WebpackOptionsDefaulter.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/express/lib/view.js 81:13-25
    Critical dependency: the request of a dependency is an expression
     @ ./node_modules/express/lib/application.js
     @ ./node_modules/express/lib/express.js
     @ ./node_modules/express/index.js
     @ ./index.js
    
    WARNING in ./node_modules/worker-farm/lib/child/index.js 49:33-53
    Critical dependency: the request of a dependency is an expression
     @ ./node_modules/worker-farm/lib/fork.js
     @ ./node_modules/worker-farm/lib/farm.js
     @ ./node_modules/worker-farm/lib/index.js
     @ ./node_modules/terser-webpack-plugin/dist/TaskRunner.js
     @ ./node_modules/terser-webpack-plugin/dist/index.js
     @ ./node_modules/terser-webpack-plugin/dist/cjs.js
     @ (webpack)/lib/WebpackOptionsDefaulter.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/util/versioning.js 17:20-67
    Critical dependency: the request of a dependency is an expression
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/loader-runner/lib/loadLoader.js 3:2-28
    Critical dependency: the request of a dependency is an expression
     @ ./node_modules/loader-runner/lib/LoaderRunner.js
     @ (webpack)/lib/NormalModule.js
     @ (webpack)/lib/NormalModuleFactory.js
     @ (webpack)/lib/Compiler.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/pre-binding.js 20:22-48
    Critical dependency: the request of a dependency is an expression
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/fsevents/fsevents.js 14:13-71
    Critical dependency: the request of a dependency is an expression
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js
    Module not found: Error: Can't resolve 'node-gyp' in '/Users/clarkj84/Desktop/webpack-err/node_modules/fsevents/node_modules/node-pre-gyp/lib/util'
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js
    Module not found: Error: Can't resolve 'npm' in '/Users/clarkj84/Desktop/webpack-err/node_modules/fsevents/node_modules/node-pre-gyp/lib/util'
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/util/nw-pre-gyp/index.html 1:0
    Module parse failed: Unexpected token (1:0)
    You may need an appropriate loader to handle this file type.
    > <!doctype html>
    | <html>
    | <head>
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$ ./util/nw-pre-gyp/index.html
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    WARNING in ./node_modules/loader-runner/lib/loadLoader.js 3:2-28
    System.import() is deprecated and will be removed soon. Use import() instead.
    For more info visit https://webpack.js.org/guides/code-splitting/
     @ ./node_modules/loader-runner/lib/LoaderRunner.js 7:17-40
     @ (webpack)/lib/NormalModule.js
     @ (webpack)/lib/NormalModuleFactory.js
     @ (webpack)/lib/Compiler.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    ERROR in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/unpublish.js
    Module not found: Error: Can't resolve 'aws-sdk' in '/Users/clarkj84/Desktop/webpack-err/node_modules/fsevents/node_modules/node-pre-gyp/lib'
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/unpublish.js 16:14-32
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    ERROR in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/publish.js
    Module not found: Error: Can't resolve 'aws-sdk' in '/Users/clarkj84/Desktop/webpack-err/node_modules/fsevents/node_modules/node-pre-gyp/lib'
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/publish.js 18:14-32
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
    
    ERROR in ./node_modules/fsevents/node_modules/node-pre-gyp/lib/info.js
    Module not found: Error: Can't resolve 'aws-sdk' in '/Users/clarkj84/Desktop/webpack-err/node_modules/fsevents/node_modules/node-pre-gyp/lib'
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/info.js 14:14-32
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib sync ^\.\/.*$
     @ ./node_modules/fsevents/node_modules/node-pre-gyp/lib/node-pre-gyp.js
     @ ./node_modules/fsevents/fsevents.js
     @ ./node_modules/chokidar/lib/fsevents-handler.js
     @ ./node_modules/chokidar/index.js
     @ ./node_modules/watchpack/lib/DirectoryWatcher.js
     @ ./node_modules/watchpack/lib/watcherManager.js
     @ ./node_modules/watchpack/lib/watchpack.js
     @ (webpack)/lib/node/NodeWatchFileSystem.js
     @ (webpack)/lib/node/NodeEnvironmentPlugin.js
     @ (webpack)/lib/webpack.js
     @ ./index.js
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! Desktop@1.0.0 build: `webpack --config webpack.config.dev.js`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the Desktop@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/clarkj84/.npm/_logs/2018-11-22T21_16_41_268Z-debug.log
````