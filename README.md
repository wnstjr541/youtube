Youtube Clone Coding

# 왜 yarn을 사용했는가?

npm위에 동작하는 패키지 매니저이며 npm보다 보안, 속도 면에서 yarn이 더 우세하다는 의견이 있어서 사용했습니다.

# 사용 기술

Javascript <br />
React.js <br />
Styled-components <br />
Youtube API <br />

# 기본 메인 화면

<img width="949" alt="main" src="https://user-images.githubusercontent.com/73412692/128296823-3d18428a-970a-41c7-97da-4d1311af92fe.png">

# 검색 화면

![chrome-capture (4)](https://user-images.githubusercontent.com/73412692/128301077-6b704b8b-d5cb-43ef-a386-8a4eb58f6ef0.gif)

# 반응형

![chrome-capture (4)](https://user-images.githubusercontent.com/73412692/128301294-53c849a4-69d6-4004-8c71-0078d593f216.gif)

# juntube는 아래의 기능을 제공합니다.

1. Youtube API 를 호출해 실시간으로 인기 동영상 보기 <br />
2. Youtube API 를 호출해 원하는 동영상 검색하기 <br />
3. 홈 부분을 반응형으로 제작 <br />

## 제작 중 힘들었던 부분

- API통신 제한: Youtube API는 하루 최대 서버 통신량이 정해져 있습니다. 테스트를 위해 여러 번 통신 요청을 보냈고 `403 Error`를 매일 경험했습니다.
  > 구글 플랫폼에 유튜브 할당량을 확인해 가며 조절했습니다
- API KEY 비공개 : .env파일에 넣었음에도 github에 올릴시 api key가 노출되는 문제가 있었습니다.
  > gitignore 파일안에 올려야 인식하지 못한다는걸 검색을 통해 알고. gitignore부분에 #API Keys .env를 작성했습니다
