import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import {
  setDataInput,
  setIdxEdit,
  toggleBtnSave,
} from "../../../../stores/actions";
import "./ButtonEdit.css";

interface Props {
  item: string;
  index: number;
}

const ButtonEdit: React.FC<Props> = ({ item, index }) => {
  const { t } = useTranslation();
  const { dispatch } = useStore();

  const handleEdit = () => {
    dispatch(setDataInput(item));
    dispatch(toggleBtnSave(true));
    dispatch(setIdxEdit(index));
  };

  return (
    <>
      <Button className="btn-edit" type="primary" onClick={handleEdit}>
        {t("content.btn-edit")}
      </Button>
    </>
  );
};

export default ButtonEdit;