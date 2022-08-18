import { Button, message, Popconfirm } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { deleteTodo } from "../../../../stores/actions";
import "./style.css";

interface Props {
  index: number;
}

const ButtonDelete: React.FC<Props> = ({ index }) => {
  const { t } = useTranslation();
  const { dispatch } = useStore();
  const [loading, setLoading] = useState<boolean>(false);

  const confirm = () => {
    message.info(t("message.delSuccess"));
  };

  const handleDelete = (): void => {
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteTodo(index));
      confirm();
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Popconfirm
        placement="top"
        title={t("message.del")}
        onConfirm={handleDelete}
        okText={t("content.yes")}
        cancelText={t("content.no")}
      >
        <Button className="btn-delete" loading={loading} type="primary" danger>
          {t("content.btn-del")}
        </Button>
      </Popconfirm>
    </>
  );
};

export default ButtonDelete;
