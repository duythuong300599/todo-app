import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Space } from "antd";

import "./style.css";

interface Props {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  value?: string;
}

const AddNewTag: React.FC<Props> = ({ onChange, onClick, value }) => {
  return (
    <>
      <Divider className="add-new-tag-divider" />
      <Space className="add-new-tag-wrapper" direction="vertical">
        <Input placeholder="Enter new tag" value={value} onChange={onChange} />
        <Button type="text" icon={<PlusOutlined />} onClick={onClick}>
          Add item
        </Button>
      </Space>
    </>
  );
};

export default AddNewTag;
