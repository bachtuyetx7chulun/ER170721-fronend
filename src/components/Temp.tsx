import React from 'react'
import { useTranslation } from 'react-i18next'

function Temp() {
  const { t } = useTranslation()
  return <div className="">{t('Temp')}</div>
}

export default Temp
