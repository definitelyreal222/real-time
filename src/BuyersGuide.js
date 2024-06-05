import React from "react";
import { useState } from "react";
import guideButton from "./img/howbuy.png";
import buyguide from "./img/guide.png";

const BuyersGuide = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div
      className={"action-button"}
      style={{ alignItems: "center", display: "flex" }}
    >
      <img
        src={guideButton}
        className="img-fluid"
        onClick={openModal}
        alt={"buyer's guide"}
      />
      <PopoverModal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={buyguide}
          className="img-fluid"
          width={"100%"}
          alt={"buyer's guide"}
        />
      </PopoverModal>
    </div>
  );
};

const PopoverModal = ({ isOpen, children, onClose, position }) => {
  if (!isOpen) return null;

  const modalStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%", // Adjust width as necessary
    maxHeight: "80vh", // Adjust height as necessary
    overflow: "auto", // Enables scrolling
    zIndex: 1050,
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    border: "none",
    background: "#000000", // Vibrant color
    color: "white", // Contrasting text color
    padding: "8px 15px", // Larger clickable area
    borderRadius: "50%", // Circular button
    fontSize: "20px", // Larger font size
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)", // Adds depth
    outline: "none", // Removes focus border in some browsers
    zIndex: 1051,
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
      }}
      onClick={onClose}
    >
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default BuyersGuide;
