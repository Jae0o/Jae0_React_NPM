import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../../../lib";

/**
 * ## Skeleton Ui Component
 *
 * Skeleton UI를 편하게 만들어 사용할 수 있도록 구현한 Skeleton Component입니다.<br>
 * 기본적으로 `width`, `height`값을 전달해 원하는 크기의 Skeleton을 만들 수 있습니다.<br>
 * ( `radius`값을 전달해 radius를 수정할 수 있습니다. )
 *
 * ### use
 *
 * - **width Props**에 `string` | `number`를 전달해 너비를 지정합니다.
 * - **height Props**에 `string` | `number`를 전달해 높이를 지정합니다.
 *
 * <br>
 *
 * ```tsx
 * import { Skeleton } from "@jae0brary/react";
 *
 * return (
 *   <Modal
 *     width={500} // px
 *     width="50rem"
 *
 *     height={300} // px
 *     height="30rem"
 *
 *     // Optional
 *     radius={12} // 12px
 *     radius="1.2rem"
 *  />
 * ```
 *
 * ### Props
 *
 * - **width**<br>
 *   `string` | `number`를 전달해 너비를 지정합니다.
 *
 * - **height**<br>
 *   `string` | `number`를 전달해 높이를 지정합니다.
 *
 * - **radius ( optional )**<br>
 *   `string` | `number`를 전달해 radius를 지정합니다. ( default = 1.2rem )
 *
 * ### type
 *
 * - **width** : `string` | `number`
 * - **height** : `string` | `number`
 *
 * <br>
 *
 * - **radius ( optional )** : `boolean` | `number`
 * */
const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    width: {
      description: "`string` | `number`를 전달해 너비를 지정합니다.",
    },

    height: {
      description: "`string` | `number`를 전달해 높이를 지정합니다.",
    },

    radius: {
      description: "`string` | `number`를 전달해 radius를 지정합니다. ( default = 1.2rem )",
    },
  },

  args: {
    width: "20rem",
    height: "20rem",
    radius: "1.2rem",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
