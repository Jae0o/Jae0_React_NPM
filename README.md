# Jae0brary React

React의 다양한 Hook, Component들을 제공하는 라이브러리입니다.<br>

[🔗 다양한 JavaScript TypeScript Util 라이브러리](https://www.npmjs.com/package/@jae0brary/utils)

## Install

```
npm install @jae0brary/react

yarn add @jae0brary/react
```

<br>

## Use

`EMS` 방식과 `CJS` 방식 모두 사용 가능합니다.

```jsx
import { components, hooks } from "@jae0brary/react";

// or

const { components, hooks } = require("@jae0brary/react");
```

<br>

<br>

## Components

<br>

<br>

## Hooks

<br>

<!-- useToggle -->

<details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>

toggle을 통한 상태를 관리하기 위한 hook입니다.<br>

### use

useToggle의 인수로 Boolean 값을 전달해 초기 상태를 지정할 수 있습니다.<br>

`( default : false )`

<br>

```jsx
import { useToggle } from "@jae0brary/react";

const { isToggle, handleToggle, handleToggleOn, handleToggleOff } = useToggle(true);
```

### return

- **isToggle** : Toggle의 상태를 `boolean` 나타냅니다.
- **handleToggle** : isToggle의 상태를 반대 값으로 `toggle` 시킵니다.
- **handleToggleOn** : isToggle의 상태를 `true`로 변경시킵니다.
- **handleToggleOff** : isToggle의 상태를 `false`로 변경시킵니다.

### type

- **isToggle** : `boolean`
- **handleToggle** : `() => void`
- **handleToggleOn** : `() => void`
- **handleToggleOff** : `() => void`

 <hr>
</details>

<br>

<!-- useSessionStorage useLocalStorage -->

<details>
  <summary style="font-size:18px"><b>useSessionStorage & useLocalStorage</b></summary>
 <hr>
 <br>

Session & Local Storage에 쉽게 접근하여 데이터를 저장하고 꺼내기 위한 hook입니다.

### use

TypeScript를 사용하시는 경우 `Generics Type`을 통해 데이터 Storage 속 데이터의 타입을 전달하실 수 있습니다.

- **param : key**<br>
  Session & Local Storage에 접근할 `key` 값을 전달받습니다.

- **param : initialData**<br>
  전달한 `key`에 해당하는 Session Storage의 기본 값을 전달받습니다.

  <br>

```ts
import { useLocalStorage, useSessionStorage } from "@jae0brary/react";

const {
  data,
  setSessionStorage /* setLocalStorage */,
  removeSessionStorage /* removeLocalStorage */,
} = useSessionStorage<string>({
  key: "address",
  initialData: "",
}); /* useLocalStorage */

setSessionStorage("leey153@naver.com");

removeSessionStorage();
```

### return

- **data** : 전달한 `key`에 해당하는 Session Storage 값을 사용할 수 있습니다.
- **setSessionStorage** : 전달한 `key`에 해당하는 Session Storage에 값을 추가합니다.
- **removeSessionStorage** : 전달한 `key`에 해당하는 Session Storage를 제거합니다.

### type

- **data** : `T`
- **setSessionStorage** : `( newData : T ) => T`
- **removeSessionStorage** : `() => void`

 <hr>
</details>

<br>

<br>

## Version

- **0.0.1** <br>
  useToggle 추가

- **0.0.4** <br>
  useSessionStorage, useLocalStorage 추가

<!-- <details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>

### use



 <hr>
</details> -->
