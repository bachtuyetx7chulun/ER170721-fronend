import { Button, Col, Drawer, Row, Select, Space, Typography } from 'antd' // eslint disable-this-line
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components'
import './index.scss'

const { Option, OptGroup } = Select
const { Text, Link } = Typography
const CLink = styled(Link)`
  color: #111 !important;
  font-weight: 400 !important;
  padding: 0.5rem;
`
const CSpace = styled(Space)`
  height: 100%;
  display: flex;
  justify-content: center;
`
const RSpace = styled(Space)`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`
const LSpace = styled(Space)`
  height: 100%;
  display: flex;
  justify-content: flex-start;
`
const CAiOutlineShopping = styled(AiOutlineShopping)`
  height: 1.5rem;
  width: 1.5rem;
`
const CGiHamburgerMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
  color: #111;
  width: 1.5rem;
  height: 1.5rem;
`
const CBsSearch = styled(BsSearch)``

function Navbar() {
  const [visible, setVisible] = useState(false)
  const [changeLanguage, setChangeLanguage] = useState(false)
  const [defaultLanguage, setDefaultLanguage] = useState('')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const setUpLanguage = () => {
      const currentLanguage = i18n.language
      setDefaultLanguage(currentLanguage)
    }
    setUpLanguage()
  }, [])

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const changeLang = () => {
    const language = defaultLanguage
    if (language === 'vi') {
      setDefaultLanguage('en')
      i18n.changeLanguage('en')
      setChangeLanguage(false)
    } else {
      setDefaultLanguage('vi')
      i18n.changeLanguage('vi')
    }
  }

  return (
    <div className="navbar">
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <div className="navbar__top">
            <CLink type="secondary" href="https://ant.design" target="_blank">
              {t('help')}
            </CLink>
            <CLink type="secondary" href="https://ant.design" target="_blank">
              {t('order')}
            </CLink>
            <CLink type="secondary" href="https://ant.design" target="_blank">
              {t('subcribe')}
            </CLink>
            <CLink type="secondary" href="https://ant.design" target="_blank">
              {t('login')}
            </CLink>
            <Select
              defaultValue={i18n.language}
              bordered={false}
              style={{ paddingRight: '0 !important' }}
              loading={changeLanguage}
              onChange={changeLang}
            >
              <OptGroup label="Local">
                <Option value="vi">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                    alt=""
                    style={{
                      width: '1.5rem',
                      height: '0.8rem',
                    }}
                  />
                </Option>
              </OptGroup>
              <OptGroup label="Global">
                <Option value="en">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                    alt=""
                    style={{
                      width: '1.5rem',
                      height: '1rem',
                    }}
                  />
                </Option>
              </OptGroup>
            </Select>
          </div>
        </Col>
      </Row>
      <Row className="navbar__bottom">
        <Col className="navbar__bottom-hambuger" xs={8} sm={8} md={8} lg={0} xl={0}>
          <LSpace align="end">
            <CGiHamburgerMenu onClick={showDrawer} />
          </LSpace>
          <Drawer placement="left" title="Adidas" width={520} onClose={onClose} visible={visible}>
            <LSpace align="end">
              <Select
                defaultValue="vi"
                bordered={false}
                style={{ paddingRight: '0 !important' }}
                loading={changeLanguage}
              >
                <OptGroup label="Local">
                  <Option value="vi">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                      alt=""
                      style={{
                        width: '1.5rem',
                        height: '0.8rem',
                      }}
                    />
                  </Option>
                </OptGroup>
                <OptGroup label="Global">
                  <Option value="en">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                      alt=""
                      style={{
                        width: '1.5rem',
                        height: '1rem',
                      }}
                    />
                  </Option>
                </OptGroup>
              </Select>
            </LSpace>
          </Drawer>
        </Col>
        <Col className="navbar__bottom-logo" xs={8} sm={8} md={8} lg={2} xl={8}>
          <Link href="/">
            <img src="https://www.adidas.com.vn/glass/react/044f108/assets/img/icon-adidas-logo.svg" alt="" />
          </Link>
        </Col>
        <Col className="navbar__bottom-nav" xs={0} sm={0} md={0} lg={10} xl={8}>
          <CSpace size={20} align="end">
            <Link href="/">
              <Text strong>{t('men')}</Text>
            </Link>
            <Link href="/">
              <Text strong>{t('women')}</Text>
            </Link>
            <Link href="/">
              <Text strong>{t('child')}</Text>
            </Link>
            <Link href="/">
              <Text>{t('sport')}</Text>
            </Link>
            <Link href="/">
              <Text>{t('brands')}</Text>
            </Link>
          </CSpace>
        </Col>
        <Col xs={8} sm={8} md={8} lg={12} xl={8}>
          <RSpace align="end">
            <div className="navbar__bottom-search">
              <Button type="text">
                <CBsSearch />
              </Button>
            </div>
            <div className="navbar__bottom-cart">
              <CAiOutlineShopping />
            </div>
          </RSpace>
        </Col>
      </Row>
    </div>
  )
}

export default Navbar
