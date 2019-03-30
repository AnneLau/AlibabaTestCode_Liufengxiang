1. 安装

  ```
  yarn add jest -D
  yarn add babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env
  ```
  编辑package.json

  ```
  {
    "scripts": {
      "test": "jest"
    }
  }
  ```

  编辑.babelrc
  ```
  {
    "presets": ["env", "react"]
  }
  ```
2. 启动测试

  ```
  npm test
  ```


