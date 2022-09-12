import React from "react";
import "./InputOption.css";

function InputOption() {
  return (
    <div className="inputOption">
      <span class="material-symbols-outlined span-icon">image</span>
      <span className="span-name">Photo</span>
      <span class="material-symbols-outlined span-icon">add_reaction</span>
      <span className="span-name">Reaction</span>
    </div>
  );
}

export { InputOption };
