/* ------ Components ------- */
import Modal from "./components/Modal/Modal";
import Skeleton from "./components/Skeleton/Skeleton";

/* ------ Hooks ------- */
import useClickAway from "./hooks/useClickAway/useClickAway";
import useLocalStorage from "./hooks/useLocalStorage/useLocalStorage";
import useModal from "./hooks/useModal/useModal";
import useSessionStorage from "./hooks/useSessionStorage/useSessionStorage";
import useToggle from "./hooks/useToggle/useToggle";

export {
  /* ------ Components ------- */

  Modal,
  Skeleton,

  /* ------ Hooks ------- */
  useToggle,
  useSessionStorage,
  useLocalStorage,
  useModal,
  useClickAway,
};
