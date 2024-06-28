# PJ9_personal_typescript

개인 프로젝트: 타입스크립트로 만든 프로젝트

## 프로젝트 개요

이 프로젝트는 타입스크립트를 사용하여 만든 API 를 호출하고 받은 응답값을 화면에 보여주는 애플리케이션이다.

## 컴포넌트 설명

### `CountryList` 컴포넌트

- 세계 나라들에 대한 다양한 정보를 제공해주는 API를 호출하여, 호출한 데이터를 `useState`를 통해 관리한다.

- `useEffect` 훅 내에서 데이터를 불러온 후, 모든 데이터에 **`isFavorite: false`라는 속성값을 추가**하여 나라 카드를 누를 때마다 `isFavorite`의 boolean 값이 바뀌도록 한다.

- 데이터를 불러오지 못한 상태에서는 로딩 컴포넌트를 렌더링하여 로딩 화면을 보여준다.

- select 태그를 둬서 나라 이름 오름차순, 수도 이름 오름차순으로 정렬을 구현한다. 수도 이름이 없는 경우에는 가장 마지막에 배치한다.

- `CountryCard` 컴포넌트에 필터링된 나라 데이터(`favoriteCountries`, `nonFavoriteCountries`)와 토글 함수(`onToggleFavorite`)를 props로 전달한다.

### `CountryCard` 컴포넌트

- `map()` 메서드를 이용하여 세계 나라들에 대한 기본 정보(국기, 나라 이름, 수도 이름)를 렌더링한다.

- 나라 카드를 클릭하면 Favorite 목록으로 토글되도록 `onClick` 속성에 이벤트 핸들러 함수를 설정한다.
