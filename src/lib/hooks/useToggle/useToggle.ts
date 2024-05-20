import { useCallback, useState } from "react";

/**
 * true false 두개의 상태를 toggle할 수 있는 hooks입니다.
 *
 * @param defaultValue useToggle의 기본값을 전달할 수 있습니다.
 *
 * @function handleToggle isToggle의 상태를 변경합니다.
 *
 * @function handleToggleOn isToggle의 상태를 true로 변경합니다.
 *
 * @function handleToggleOff isToggle의 상태를 false로 변경합니다.
 */
const useToggle = (defaultValue: boolean = false) => {
  const [isToggle, setIsToggle] = useState<boolean>(defaultValue);

  const handleToggleOn = useCallback(() => {
    setIsToggle(true);
  }, []);

  const handleToggleOff = useCallback(() => {
    setIsToggle(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsToggle((prevState) => !prevState);
  }, []);

  return {
    isToggle,
    handleToggle,
    handleToggleOn,
    handleToggleOff,
  };
};

export default useToggle;
