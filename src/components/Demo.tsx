import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Atag = styled.h1`
  color: red;
`
function Demo() {
  const { t } = useTranslation()
  return (
    <div className="">
      <Atag>{t('Temp')}</Atag>
    </div>
  )
}

export default Demo
