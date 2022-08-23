import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Space } from "antd";
import { useTranslation } from "react-i18next";

import "./style.css";

interface Props {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  value?: string;
}

const AddNewTag: React.FC<Props> = ({ onChange, onClick, value }) => {
  const { t } = useTranslation();
  return (
    <>
      <Divider className="add-new-tag-divider" />
      <Space className="add-new-tag-wrapper" direction="vertical">
        <Input
          placeholder={t("content.newTag")}
          value={value}
          onChange={onChange}
        />
        <Button type="text" icon={<PlusOutlined />} onClick={onClick}>
          {t("content.btnAdd")}
        </Button>
      </Space>
    </>
  );
};

export default AddNewTag;
