import { Input } from "antd";
import { useTranslation } from "react-i18next";

import "./style.css";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onPressEnter?: () => void;
  name?: string;
}

const InputEdit: React.FC<Props> = ({ name, onChange, onPressEnter }) => {
  const { t } = useTranslation();
  return (
    <>
      <Input.Group compact>
        <Input
          className="edit-todo-input"
          placeholder={t("content.addPlaceholder")}
          value={name}
          onChange={onChange}
          onPressEnter={onPressEnter}
        />
      </Input.Group>
    </>
  );
};

export default InputEdit;
