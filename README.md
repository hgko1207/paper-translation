## Paper Translation

## Package Add

```bash
yarn add axios
yarn add styled-components
yarn add styled-reset
yarn add react-bootstrap bootstrap

yarn add react-textarea-autosize
yarn add copy-to-clipboard
```

## React Bootstrap

```js
// 추가해야 함.
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
```

## Deploying to Github Pages

```bash
npm i gh-pages
or
yarn add gh-pages
```

1. package.json -> "homepage": "./" 추가
2. npm run build 실행
3. package.json -> "homepage": "https://hgko1207.github.io/paper-translation/" 변경
4. package.json -> "scripts" -> "deploy": "gh-pages -d build" 추가
5. npm run deploy 실행