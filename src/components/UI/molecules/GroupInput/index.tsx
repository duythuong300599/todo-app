import React from "react";
import { useStore } from "../../../../stores";
import InputAdd from "../../atoms/InputAdd";
import InputEdit from "../../atoms/InputEdit";
import "./style.css";

const GroupInput: React.FC = () => {
  const { state } = useStore();
  const { stateBtnSave } = state;

  return (
    <div className="input-group-container">
      {stateBtnSave ? <InputEdit /> : <InputAdd />}
    </div>
  );
};

export default GroupInput;
