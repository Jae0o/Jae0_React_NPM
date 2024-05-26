import type { Meta, StoryObj } from "@storybook/react";

import { ClickAwayTestComponent } from "./components";

/**
 * ## useClickAway Hooks
 *
 * 특정 UI ( 요소 ) 외 다른 UI( 요소 )를 클릭하는 경우에 대해 컨트롤할 수 있는 hook 입니다.
 *
 * ### use
 *
 * useClickAway hook의 인수로 callback 함수를 전달합니다.<br>
 * 이후 useClickAway hook이 반환하는 ref를 대상 요소의 ref에 전달홥니다.<br>
 * ( TypeScript 사용 시, `useClickAway<T>(callback)` 제네릭 타입을 통해 ref의 타입을 전달합니다. )<br>
 *
 * - **callback**<br>
 *   다른 UI를 클릭했을 경우 실행될 callback 함수를 전달받습니다.<br>
 *   ( **type** : `( e? : MouseEvent, TouchEvent ) => void` )
 *
 *   <br>
 *
 * ```tsx
 * import { useClickAway } from "@jae0brary/react";
 *
 * const handler = () => {
 *
 * //  ... action
 *
 * }
 *
 * const ref = useClickAway<HTMLButtonElement>(handler);
 *
 * return (
 *   <>
 *     // ... other components
 *
 *     <div ref={ref}>
 *       Click!
 *     </div>
 *
 *     // ... other components
 *
 *   </>
 * )
 * ```
 *
 * ### return
 *
 * - **ref** : Click Away의 대상 요소에 전달할 ref입니다.
 *
 * ### type
 *
 * - **ref** : `MutableRefObject<T | null>`
 * */
const meta = {
  title: "Hooks/useClickAway",
  component: ClickAwayTestComponent,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ClickAwayTestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
