import React from "react";
import { Trans, Translation, useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <main className="main">
      <h5>{t("content.functional")}</h5>
      <Trans i18nKey="content.class" />
      <Translation>{(t, { i18n }) => <p>{t("content.text")}</p>}</Translation>
    </main>
  );
}

export default Main;
