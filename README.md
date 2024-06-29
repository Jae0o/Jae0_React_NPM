# Jae0brary React

React의 다양한 Hook, Component들을 제공하는 라이브러리입니다.<br>

<small>[🔗 다양한 JavaScript TypeScript Util 라이브러리](https://www.npmjs.com/package/@jae0brary/utils)</small>

<br>

## [📕 Storybook을 통한 설명 & 체험!](https://66531eb0404c060e28909c53-nicxjyuufq.chromatic.com/)

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

<!---------------------------------------- Modal UI ---------------------------------------------->

<details>
  <summary style="font-size:18px"><b>Modal UI</b></summary>
 <hr>
 <br>

Modal UI를 편하게 사용할 수 있도록 구현한 Modal Component입니다.<br>
기본적으로 `AwayClick`, `Escape key`를 이용한 Modal 닫기 기능을 제공합니다.<br>
( 해당 기능은 Option을 통해 off 할 수 있습니다. )

### use

[📕 Modal - Storybook 설명서 & 체험](https://66531eb0404c060e28909c53-kmxywolvcl.chromatic.com/?path=/docs/components-modal--docs)<br>

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

<!---------------------------------------- Skeleton ---------------------------------------------->

<details>
  <summary style="font-size:18px"><b>Skeleton UI</b></summary>
 <hr>
 <br>

Skeleton UI를 편하게 만들어 사용할 수 있도록 구현한 Skeleton Component입니다.<br>
기본적으로 `width`, `height`값을 전달해 원하는 크기의 Skeleton을 만들 수 있습니다.<br>
( `radius`값을 전달해 radius를 수정할 수 있습니다. )

### use

[📕 Skeleton - Storybook 설명서 & 체험](https://66531eb0404c060e28909c53-kmxywolvcl.chromatic.com/?path=/docs/components-skeleton--docs)<br>

- **width Props**에 `string` | `number`를 전달해 너비를 지정합니다.
- **height Props**에 `string` | `number`를 전달해 높이를 지정합니다.

<br>

```tsx
import { Skeleton } from "@jae0brary/react";

return (
  <Modal
    width={500} // px
    width="50rem"

    height={300} // px
    height="30rem"

    // Optional
    radius={12} // 12px
    radius="1.2rem"
  />
)
```

### Props

- **width**<br>
  `string` | `number`를 전달해 너비를 지정합니다.
- **height**<br>
  `string` | `number`를 전달해 높이를 지정합니다.
- **radius ( optional )**<br>
  `string` | `number`를 전달해 radius를 지정합니다. ( default = 1.2rem )

### type

- **width** : `string` | `number`
- **height** : `string` | `number`

<br>

- **radius ( optional )** : `boolean` | `number`

 <hr>
</details>

<br>

<!------- Hooks ---------------------------------------------->

## Hooks

<br>

<!---------------------------------------- useToggle ---------------------------------------------->

<details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>

toggle을 통한 상태를 관리하기 위한 hook입니다.<br>

### use

[📕 useToggle - Storybook 설명서 & 체험](https://66531eb0404c060e28909c53-kmxywolvcl.chromatic.com/?path=/docs/hooks-usetoggle--docs)<br>

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

<!-------------------------------- useSession Local Storage ------------------------------------>

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

<!---------------------------------------- useModal ---------------------------------------------->

<details>
  <summary style="font-size:18px"><b>useModal</b></summary>
 <hr>
 <br>

Modal UI의 상태 관리를 위해 사용하는 hook 입니다.

### use

Modal UI Component와 함께 사용가능합니다.<br>

아래 예시를 참고하여 Modal UI Component의 Prop에 값을 전달합니다.

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

### return

- **isShow** : Modal Component의 isShow Prop에 전달합니다.
- **handleShowModal** : Modal을 활성화시킬 때 호출합니다.
- **handleCloseModal** : Modal Component의 onClose Prop에 전달합니다.

### type

- **isShow** : `T`
- **handleShowModal** : `() => void`
- **handleCloseModal** : `() => void`

 <hr>

 <br>
 
</details>

 <br>
<br>

<!---------------------------------------- useAwayClick ---------------------------------------------->

<details>
  <summary style="font-size:18px"><b>useAwayClick</b></summary>
 <hr>
 <br>

특정 UI ( 요소 ) 외 다른 UI( 요소 )를 클릭하는 경우에 대해 컨트롤할 수 있는 hook 입니다.

### use

[📕 useClickAway - Storybook 설명서 & 체험](https://66531eb0404c060e28909c53-kmxywolvcl.chromatic.com/?path=/docs/hooks-useclickaway--docs)<br>

useClickAway hook의 인수로 callback 함수를 전달합니다.<br>
이후 useClickAway hook이 반환하는 ref를 대상 요소의 ref에 전달홥니다.<br>
( TypeScript 사용 시, `useClickAway<T>(callback)` 제네릭 타입을 통해 ref의 타입을 전달합니다. )<br>

- **callback**<br>
  다른 UI를 클릭했을 경우 실행될 callback 함수를 전달받습니다.<br>
  ( **type** : `( e? : MouseEvent, TouchEvent ) => void` )

  <br>

```tsx
import { useClickAway } from "@jae0brary/react";

const handler = () => {

  /* ... action */

}

const ref = useClickAway<HTMLButtonElement>(handler);

return (
  <>
    {/* other components */}

    <div ref={ref}>
      Click!
    </div>

    {/* other components */}

  </>
)
```

### return

- **ref** : Click Away의 대상 요소에 전달할 ref입니다.

### type

- **ref** : `MutableRefObject<T | null>`

 <hr>
</details>

<br>

<br>

## Version

- **0.0.1** <br>
  **hooks** : useToggle 추가

- **0.0.4** <br>
  **hooks** : useSessionStorage, useLocalStorage 추가

- **0.0.5** <br>
  **Components** : Modal 추가<br>
  **Hooks** : useModal, useClickAway 추가

- **0.0.8** <br>
  Storybook 도입

- **0.0.9** <br>
  Storybook : useToggle, useClickAway
- **0.0.11** <br>
  Modal : 로직 개선

<!-- <details>
  <summary style="font-size:18px"><b>useToggle</b></summary>
 <hr>
 <br>

### use



 <hr>
</details> -->
