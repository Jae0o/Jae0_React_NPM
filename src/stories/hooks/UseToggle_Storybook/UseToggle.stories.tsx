import type { Meta, StoryObj } from "@storybook/react";

import { ToggleTestComponent } from "./components";

/**
 * ## useToggle Hooks
 *
 * toggle을 통한 상태를 관리하기 위한 hook입니다.<br>
 *
 * ### use
 *
 * useToggle의 인수로 Boolean 값을 전달해 초기 상태를 지정할 수 있습니다.<br>
 *
 * `( default : false )`
 *
 * <br>
 *
 * ```jsx
 * import { useToggle } from "@jae0brary/react";
 *
 * const { isToggle, handleToggle, handleToggleOn, handleToggleOff } = useToggle(true);
 * ```
 *
 * ### return
 *
 * - **isToggle** : Toggle의 상태를 `boolean` 나타냅니다.
 * - **handleToggle** : isToggle의 상태를 반대 값으로 `toggle` 시킵니다.
 * - **handleToggleOn** : isToggle의 상태를 `true`로 변경시킵니다.
 * - **handleToggleOff** : isToggle의 상태를 `false`로 변경시킵니다.
 *
 * ### type
 *
 * - **isToggle** : `boolean`
 * - **handleToggle** : `() => void`
 * - **handleToggleOn** : `() => void`
 * - **handleToggleOff** : `() => void`
 * */
const meta = {
  title: "Hooks/useToggle",
  component: ToggleTestComponent,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ToggleTestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
