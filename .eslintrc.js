module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
    es6: true
  },
  plugins: ['react', 'import', 'prettier', 'markdown'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] }
    ], // 允许正常使用 Link
    'max-len': ['error', { code: 300 }],
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //允许在 .js 后缀文件中写 jsx
    'react/destructuring-assignment': 0, // 不强制对 state props 使用解构赋值
    'react/no-multi-comp': 0, // 可以在一个文件里写多个 react component
    'react/prefer-stateless-function': 0, // 可以不使用纯函数
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-props-no-spreading': 0,
    'prefer-destructuring': ['error', { object: true, array: false }], // 不强制要求使用数组解构赋值
    'no-console': 0, //可以 console
    semi: 0, //禁止在语句末尾使用分号
    'no-unused-expressions': 0, // 支持 func && func() 的写法
    'no-param-reassign': 0, // 允许修改函数参数
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], //允许在循环中使用 i++ / i--
    'comma-dangle': ['error', 'only-multiline'], // 对象的最后一个元素后不需要逗号
    'import/extensions': ['off', 'never'], // import 的时候可以不带文件后缀
    'import/no-unresolved': 0, //import 路径
    'import/order': 0, // 引入没有顺序要求
    'import/prefer-default-export': 0, //import 路径
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'prettier/prettier': ['error', { singleQuote: true, semi: false }]
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
}
