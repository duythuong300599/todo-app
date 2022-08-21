import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Tooltip } from "antd";

import "./style.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit?: () => void;
}

const InputSearch: React.FC<Props> = ({ onChange, value, onSubmit }) => {
  return (
    <>
      <div className="input-search-wrapper">
        <Input
          className="input-search"
          placeholder="input search text"
          allowClear
          onChange={onChange}
          value={value}
        ></Input>
        <Tooltip title="Search">
          <Button type="primary" onClick={onSubmit}>
            <SearchOutlined />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default InputSearch;
