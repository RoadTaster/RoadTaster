# RoadTaster

## 커밋 규칙
* 추가는 ``[추가]``를 앞에 붙여서 커밋메시지 작성합니다.
* 수정은 ``[수정]``을 앞에 붙여서 커밋메시지를 작성합니다.

## 라이브러리 / 프레임워크

* 프론트엔드 - [ReactNative](https://facebook.github.io/react-native/)
* 백엔드 - [Node.js]()

## 코딩스타일

### React
* 화면을 렌더링하는 파일은 ``*Screen.js`` 로 합니다.
* 컴포넌트의 이름은 ``*Comp.js``로 합니다.

### Node
* 아직 없음

### 공통
* 세미콜론은 없이 합니다.
* 상대방 코드를 건드릴 일이 있으면 짝코딩으로 합니다.
* 변수 / 함수는 소문자 카멜케이스로 합니다.
* 클래스는 대문자 카멜케이스로 합니다.
* 주석은 한글로 합니다. ( 함수마다 기능에 대한 요약 한줄 설명 )
* indent space 는 두 칸으로 합니다.
* 함수명은 동사, 파라미터는 목적어로 합니다.

## 깃헙 관리 규칙
* README.md 업데이트 시에는 알아서 Merge 해서 수정하기 !
* 단독으로 작성한 코드는 상호동의 하에 Merge 합니다.

# 할 일

## 프론트엔드

### 화면 구성

1. SplashScreen
    * 1000ms ~ 2000ms 사이에 보여주고 사라지는 화면

2. MainScreen
    * Google Map Api
    * Markers 다중 마커 (카테고리별 마커 아이콘 다르게 해서 보여줌)
    * 후기 추가 (to ReviewRegScreen)
    * 마커가 있나요 ? 마커 정보 컴포넌트 : (길게 눌렀나요 ? 등록하시겠어요 : 아무것도 뜨지 않음)
    * 카테고리 선택시 마커 선별적으로 보여주기

3. SignupScreen
    * 회원가입 양식
    * 개인정보수집 동의 체크
    * 서비스 이용 동의
    
4. SigninScreen
    * 로그인 화면
    * 소셜로그인 (네이버, 카카오, 구글, 페이스북)
    
5. ReviewScreen
6. ReviewRegScreen
7. GenerateScreen
8. MypageScreen

## 백엔드
### 







