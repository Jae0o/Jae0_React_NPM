import React from "react";

import Modal from "./lib/components/Modal/Modal";
import useModal from "./lib/hooks/useModal/useModal";

const App = () => {
  const { isShow, handleShowModal, handleCloseModal } = useModal();
  console.log(window.getComputedStyle(document.body).overflow);
  return (
    <>
      <button onClick={handleShowModal}> 오픈</button>
      <Modal
        isShow={isShow}
        onClose={handleCloseModal}
      />

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
        }}
      />
      <button onClick={handleShowModal}> 오픈</button>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "orange",
        }}
      />
      <button onClick={handleShowModal}> 오픈</button>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "yellow",
        }}
      />
      <button onClick={handleShowModal}> 오픈</button>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "green",
        }}
      />
      <button onClick={handleShowModal}> 오픈</button>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "blue",
        }}
      />
    </>
  );
};

export default App;
