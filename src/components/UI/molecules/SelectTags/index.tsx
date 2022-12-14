import { message, Select } from "antd";
import React, { useEffect, useState } from "react";

import AddNewTag from "../../atoms/AddNewTag";
import { useStore } from "../../../../stores";
import { addTag } from "../../../../stores/actions";
import "./style.css";
import { useTranslation } from "react-i18next";

interface Props {
  onChange?: (e: any) => void;
}

const SelectTags: React.FC<Props> = ({ onChange }) => {
  const { t } = useTranslation();
  const { state, dispatch } = useStore();
  const { tags } = state;
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (newTag.trim() !== "") {
      setTimeout(() => {
        dispatch(addTag(newTag.trim()));
        setNewTag("");
      }, 200);
    } else {
      message.error(t("message.addTypeError"));
    }
  };

  return (
    <Select
      className="select-tag"
      placeholder={t("content.selectPlaceholder")}
      onChange={onChange}
      dropdownRender={(menu) => (
        <>
          {menu}
          <AddNewTag onChange={onNameChange} onClick={addItem} value={newTag} />
        </>
      )}
    >
      {tags.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectTags;
