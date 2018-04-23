// 'module.exprots = {
//   "root": true,
//   "extends": "airbnb",
//   "plugins": ["react", "jsx-a11y", "import"],
//   "parserOptions": {
//     "ecmaVersion": 6,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   "env": {
//       "es6": true,
//       "browser": true
//   },
//   "parser": "babel-eslint",
//   "rules": {
//     "strict": 0
//   }
// }
const setting = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-bitwise": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off"
  }
}

export default setting;