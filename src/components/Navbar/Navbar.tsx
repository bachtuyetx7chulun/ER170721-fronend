import { Button, Col, Drawer, Row, Select, Space, Typography } from 'antd' // eslint disable-this-line
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
const SSpace = styled(Space)`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`
const CAiOutlineShopping = styled(AiOutlineShopping)`
  height: 1.5rem;
  width: 1.5rem;
`
const CGiHamburgerMenu = styled(GiHamburgerMenu)`
  color: #111;
  width: 2rem;
  height: 2rem;
`
const CBsSearch = styled(BsSearch)``

function Navbar() {
  const [visible, setVisible] = useState(false)
  const [childrenDrawer, setChildrenDrawer] = useState(false)
  const [changeLanguage, setChangeLanguage] = useState(true)

  useEffect(() => {
    const setUpLanguage = () => {
      setTimeout(() => {
        setChangeLanguage(false)
      }, 5000)
    }
    setUpLanguage()
  }, [])

  const showDrawer = () => {
    setVisible(true)
  }

  const showChildrenDrawer = () => {
    setChildrenDrawer(true)
  }

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className="navbar">
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <div className="navbar__top">
            <CLink type="secondary" href="https://ant.design" target="_blank">
              trợ giúp
            </CLink>
            <CLink type="secondary" href="https://ant.design" target="_blank">
              trình theo dõi đơn hàng
            </CLink>
            <CLink type="secondary" href="https://ant.design" target="_blank">
              đăng ký bản tin
            </CLink>
            <CLink type="secondary" href="https://ant.design" target="_blank">
              đăng nhập
            </CLink>
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
                <Option value="Yiminghe">
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
          <Button type="link" onClick={showDrawer}>
            <CGiHamburgerMenu />
          </Button>
          <Drawer
            placement="left"
            title="Multi-level drawer"
            width={520}
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Button type="primary" onClick={showChildrenDrawer}>
              <Text type="danger">Two-level drawer</Text>
            </Button>
            <Drawer
              title="Two-level Drawer"
              width={320}
              closable={false}
              onClose={onChildrenDrawerClose}
              visible={childrenDrawer}
            >
              This is two-level drawer
            </Drawer>
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
              <Text strong>NAM</Text>
            </Link>
            <Link href="/">
              <Text strong>NỮ</Text>
            </Link>
            <Link href="/">
              <Text strong>TRẺ EM</Text>
            </Link>
            <Link href="/">
              <Text>THỂ THAO</Text>
            </Link>
            <Link href="/">
              <Text>CÁC NHÃN HIỆU</Text>
            </Link>
          </CSpace>
        </Col>
        <Col xs={8} sm={8} md={8} lg={12} xl={8}>
          <SSpace align="end">
            <div className="navbar__bottom-search">
              <Button type="text">
                <CBsSearch />
              </Button>
            </div>
            <div className="navbar__bottom-cart">
              <CAiOutlineShopping />
            </div>
          </SSpace>
        </Col>
      </Row>
    </div>
  )
}

export default Navbar
