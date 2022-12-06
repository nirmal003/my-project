import React, { createPortal } from "react-dom";
import * as IoIcons from "react-icons/io";
import "./ModelUpdate.css";

function ModelUpdate({ children, open, close }) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div className="overlay">
      <div className="model">
        <div>
          <span onClick={close}>
            <IoIcons.IoMdClose />
          </span>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default ModelUpdate;
