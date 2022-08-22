import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Space } from "antd";

interface Props {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  value?: string;
}

const AddNewTag: React.FC<Props> = ({ onChange, onClick, value }) => {
  return (
    <>
      <Divider style={{ margin: "8px 0" }} />
      <Space
        style={{
          padding: "0 8px 4px",
          display: "flex",
        }}
        direction="vertical"
      >
        <Input placeholder="Enter new tag" value={value} onChange={onChange} />
        <Button type="text" icon={<PlusOutlined />} onClick={onClick}>
          Add item
        </Button>
      </Space>
    </>
  );
};

export default AddNewTag;
