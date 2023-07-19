import React from "react";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation();
  return <div>
    {t("Главная страница")}
    {t('dddddd')}
    </div>;
}
