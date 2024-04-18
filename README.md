# Todo App
## 1. 프로젝트 순서
1. 프로젝트 준비하기
2. UI 구성하기
3. 기능 구현하기

## 2. 컴포넌트
1. TodoTemplate
    - 화면을 가운데에 정렬
    - 앱 타이틀 보여줌
    - children으로 내부 JSX를 props로 받아 와서 렌더링
2. TodoInsert
    - 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
    - state를 통해 인풋의 상태 관리
3. TodoListItem
    - 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트
    - todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여줌
4. TodoList
    - todos 배열을 props로 받아 옴
    - 받아온 todos 배열을 map을 사용해 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌
