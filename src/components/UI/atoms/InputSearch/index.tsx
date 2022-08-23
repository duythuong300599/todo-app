import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../../stores";
import { selectTagSearch } from "../../../../stores/actions";

import "./style.css";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit?: () => void;
  dataRender?: Array<string>;
}

const InputSearch: React.FC<Props> = ({ onChange, value, onSubmit }) => {
  const { t } = useTranslation();
  const { state, dispatch } = useStore();
  const { tags } = state;

  const handleSearchTag = (e: string) => {
    debugger;
    setTimeout(() => {
      dispatch(selectTagSearch(e));
    }, 500);
  };

  return (
    <>
      <div className="input-search-wrapper">
        <Input
          className="input-search"
          placeholder={t("content.searchPlaceholder")}
          allowClear
          onChange={onChange}
          value={value}
        ></Input>
        <Select
          className="select-search"
          defaultValue="all"
          onChange={handleSearchTag}
        >
          <Select.Option value="all">All</Select.Option>
          {tags?.map((item) => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
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
