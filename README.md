# 영어 논문 번역 편리성을 위한 페이지

영어 논문을 번역하기 위해 구글과 네이버 파파고 번역을 사용한다. 그런데 논문의 pdf 파일을 복사하여 번역을 하면 대부분이 엔터나 개행 글자가 포함되어 있어 잘 되지 않을 경우가 많다.
그래서 영어 논문 번역의 편리성을 위해 불필요한 글자를 제거하는 기능을 구현했다.

## 글자 제거 목록

- [ ] 엔터(\r)
- [ ] 개행(\n)
- [ ] 주석(//)
- [ ] 여러 개의 공백

## Packages

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
4. package.json -> "scripts" -> "deploy": "gh-pages -d build", "predeploy": "npm run build" 추가
5. npm run deploy 실행

## 검색엔진 최적화(SEO)

```bash
yarn add react-router
yarn add react-router-sitemap
npm install --save-dev babel-cli babel-preset-es2015 babel-preset-react babel-register
```

출처 : https://satisfactoryplace.tistory.com/132?category=829221

## 구글 애드센스 적용

```bash
# 설치
yarn add react-adsense-google
```

```js
// BottomAdSense.js 파일 생성
import React, { useEffect } from 'react';
import GoogleAdsense from 'react-adsense-google';

const BottomAdSense = () => {
  return (
    <GoogleAdsense
      adClient='xxx'
      adSlot='xxx'
      style={{'display': 'block'}}
      adFormat='auto'
      fullWidthResponsive='true'
    />
  )
};

export default BottomAdSense;
```

```js
// 적용
import BottomAdSense from '../AdSense/BottomAdSense';

<BottomAdSense/>
```
