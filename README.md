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

<details>
  <summary style="font-size:18px"><b>Modal UI</b></summary>
 <hr>
 <br>

Modal UI를 편하게 사용할 수 있도록 구현한 Modal Component입니다.<br>
기본적으로 `AwayClick`, `Escape key`를 이용한 Modal 닫기 기능을 제공합니다.<br>
( 해당 기능은 Option을 통해 off 할 수 있습니다. )

### use

Modal은 `useModal hook`과 함께 사용하여 useModal 내부의 값을 Modal에 전달하여 사용할 수 있습니다.<br>

- **isShow Props**에 useModal hook 내부 isShow를 전달합니다.
- **onClose Props**에 useModal hook 내부 handleCloseModal 전달합니다.

<br>

`handleShowModal`를 호출하여 Modal을 나타낼 수 있습니다.

<br>

```tsx
import { Modal, useModal } from "@jae0brary/react";

const {
  isShow, // Modal Component의 isShow Prop에 전달합니다.
  handleShowModal, // Modal을 활성화시킬 때 호출합니다.
  handleCloseModal // Modal Component의 onClose Prop에 전달합니다.
} = useModal();

return (
  <Modal
    isShow={isShow}
    onClose={handleCloseModal}

    // Optional
    hideCloseIcon={false}
    disableAwayClick={false}
    backgroundStyle={/* CSS style */}
    modalStyle={/* CSS style */}
    zIndex={500}
  >

    /* children */

  </Modal>
)
```

### Props

- **isShow**<br>
  useModal의 `isShow` 값을 전달받습니다.

- **onClose**<br>
  useModal의 `handleCloseModal` 메서드를 전달받습니다.

- **hideCloseIcon ( optional )**<br>
  true 전달 시 기본 스타일 `Close Icon`을 비활성화합니다.

- **disableAwayClick ( optional )**<br>
  true 전달 시 `Away Click`을 통한 Modal close 기능을 비활성화합니다.

- **backgroundStyle ( optional )**<br>
  Modal의 background의 스타일을 변경하기 위해 `CSS style` 값을 전달받습니다.

- **modalStyle ( optional )**<br>
  Modal의 스타일을 변경하기 위해 `CSS style` 값을 전달받습니다.

- **zIndex ( optional )**<br>
  필요한 경우 Modal의 `z-index` 값을 제어하기 위해 사용할 수 있습니다.

### type

- **isShow** : `boolean`
- **onClose** : `() => void`

<br>

- **hideCloseIcon ( optional )** : `boolean`
- **disableAwayClick ( optional )** : `boolean`
- **backgroundStyle ( optional )** : `CSSProperties`
- **modalStyle ( optional )** : `CSSProperties`
- **zIndex ( optional )** : `number`

 <hr>
</details>

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

- **0.0.5** <br>
  Modal, useModal 추가

<!-- <details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>

### use



 <hr>
</details> -->
