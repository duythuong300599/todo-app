import { Button } from "antd";
import { useTranslation } from "react-i18next";
import "./ButtonEdit.css";

interface Props {
  item: string;
}

const ButtonEdit: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <>
      <Button
        className="btn-edit"
        type="primary"
        onClick={() => console.log(item)}
      >
        {t("content.btn-edit")}
      </Button>
    </>
  );
};

export default ButtonEdit;
