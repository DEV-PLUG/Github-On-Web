# Github On Web - 깃헙 레포지토리를 웹에서 쉽게.

[![Patreon](https://img.shields.io/badge/Sponsor-Patreon-critical)](https://www.patreon.com/bePatron?u=64697816)

## ❓ Github On Web이 무엇인가요?   
- **Github On Web**은 html에서 **<u>Id 설정만으로 깃헙 레포지토리를 표시할 수 있게</u>** 하기 위해 만들었습니다.  
- 제가 필요해 만들어 봤고, 코드도 굉장히 굉장히 적기 때문에 포트폴리오에 깃헙 레포지토리 표시할 때 사용하시기 좋습니다.
- 피드백이나 문제점은 이슈를 생성해 알려주세요!

## 🙋‍♀️ 구체적인 사용법을 알려주세요!   
1. 우선, Js 파일을 로드해주세요! 제이쿼리와 구글 아이콘을 사용합니다!

> 제이쿼리와 구글 아이콘을 로드하지 않은 경우 다음 코드 사용
```html
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<script src="https://dev-plug.github.io/Github-On-Web/main.js"></script>
```

> 제이쿼리와 구글 아이콘을 로드한 경우 다음 코드 사용
```html
<script src="https://dev-plug.github.io/Github-On-Web/main.js"></script>
```

2. html에서 요소를 생성하고, 다음과 같이 클래스와 아이디를 설정해주세요! 아이디에는 자신의 레포지토리를 삽입하세요!
```html
<div class="github-repository" id="DEV-PLUG/Github-On-Web"></div>
```
3. 다크 모드를 적용하려면 클래스에 repository-style-dark를 추가하세요!
```html
<div class="github-repository repository-style-dark" id="DEV-PLUG/Github-On-Web"></div>
```

## 📥 사용결과
> 기본
<img src="https://github.com/DEV-PLUG/Github-On-Web/blob/main/.github/images/light.png?raw=true"/> 

> 다크 모드 적용
<img src="https://github.com/DEV-PLUG/Github-On-Web/blob/main/.github/images/dark.png?raw=true"/>

