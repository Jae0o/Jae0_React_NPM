# Jae0brary React

React의 다양한 Hook, Component들을 제공하는 라이브러리입니다.<br>

[🔗 다양한 JavaScript TypeScript Util 라이브러리](https://www.npmjs.com/package/@jae0brary/utils)

## Install

```
npm install @jae0brary/react
```

## Use

```jsx
import {} from "@jae0brary/react";

// or

const {} = require("@jae0brary/react");
```

## Components

<br>

## Hooks

<br>

<details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>

toggle을 통한 상태를 관리하기 위한 hook입니다.<br>

### use

useToggle의 인수로 Boolean값을 전달해 초기 상태를 지정할 수 있습니다.<br>

`( default : false )`

```jsx
const { isToggle, handleToggle, handleToggleOn, handleToggleOff } =
  useToggle(true);
```

<br>

- **isToggle** : Toggle의 상태를 `boolean` 나타냅니다.
- **handleToggle** : isToggle의 상태를 반대 값으로 `toggle` 시킵니다.
- **handleToggleOn** : isToggle의 상태를 `true`로 변경시킵니다.
- **handleToggleOff** : isToggle의 상태를 `false`로 변경시킵니다.

### type

- isToggle : `boolean`
- handleToggle : `() => void`
- handleToggleOn : `() => void`
- handleToggleOff : `() => void`

 <hr>
</details>

## Version

<br>

- **0.0.1** <br>
  useToggle 추가

<!-- <details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>




 <hr>
</details> -->
