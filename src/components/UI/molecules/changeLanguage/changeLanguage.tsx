import { Select } from "antd";
import React from "react";
import i18n from "../../../../translations/i18n";

import "./changeLanguage.css";

const ChangeLanguage: React.FC = () => {
  const languages: Array<string> = ["vi", "en"];

  //handle changeLanguage
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className="element-changeLanguage">
      <Select defaultValue="vi" onChange={changeLanguage}>
        {languages.map((language, i) => (
          <Select.Option value={language} key={i}>
            {language}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default ChangeLanguage;
