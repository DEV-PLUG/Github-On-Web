# Github On Web - 깃헙 레포지토리를 웹에서 쉽게.

[![Patreon](https://img.shields.io/badge/Sponsor-Patreon-critical)](https://www.patreon.com/bePatron?u=64697816)

## ❓ Github On Web이 뭐에요?   
- **Github On Web**은 html에서 **<u>Id 설정만으로 깃헙 레포지토리를 표시할 수 있게</u>** 하기 위해 만들었습니다.  
- 제가 필요해 만들어 봤고, 코드도 굉장히 굉장히 적기 때문에 포트폴리오에 깃헙 레포지토리 표시할 때 사용하시기 좋습니다.
- 피드백이나 문제점은 이슈를 생성해 알려주세요!

## 🙋‍♀️ 구체적인 사용법을 알려주세요!   
1. 우선, Js 파일을 로드해주세요! 제이쿼리와 구글 아이콘은 필수이니 둘 다 로드하지 않은 경우 아래 코드를 헤더 부분에 붙여넣으세요.
```html
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<script src="https://dev-plug.github.io/Github-On-Web/main.js"></script>
```
2. html에서 요소를 생성하고, 다음과 같이 클래스와 아이디를 설정해주세요! 아이디에는 자신의 레포지토리를 삽입하세요!
```html
<div class="github-repository" id="DEV-PLUG/Github-On-Web"></div>
```
3. 다크 모드를 적용하려면 클래스에 repository-style-dark를 추가하세요!
```html
<div class="github-repository repository-style-dark" id="Github-On-Web"></div>
```

## 📑기여
아직 레포지토리 주요 언어에 대한 색을 몇개만 지원합니다! <br> 
여러분의 기여는 많은 도움이 됩니다!
