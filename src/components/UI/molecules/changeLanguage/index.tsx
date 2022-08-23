import { Select } from "antd";
import React from "react";
import { getLocalStorage } from "../../../../utils/getLocalStorange";
import i18n from "../../../../translations/i18n";

import "./changeLanguage.css";

const ChangeLanguage: React.FC = () => {
  const languages: Array<string> = ["vi", "en"];
  const language = getLocalStorage("language", "en");

  //handle changeLanguage
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", JSON.stringify(value));
  };
  return (
    <div className="element-changeLanguage">
      <Select defaultValue={language} onChange={changeLanguage}>
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
