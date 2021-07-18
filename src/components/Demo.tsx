import React from 'react'
import { useTranslation } from 'react-i18next'

function Demo() {
  const { t } = useTranslation()
  return <div className="">{t('Temp')}</div>
}

export default Demo
