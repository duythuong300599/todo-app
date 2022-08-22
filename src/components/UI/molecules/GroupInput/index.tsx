import React from "react";
import { useStore } from "../../../../stores";
import InputAdd from "../../atoms/InputAdd";
import InputEdit from "../../atoms/InputEdit";
import "./style.css";

const GroupInput: React.FC = () => {
  return <div className="input-group-container">{<InputAdd />}</div>;
};

export default GroupInput;
