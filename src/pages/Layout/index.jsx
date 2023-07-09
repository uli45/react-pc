import {
  HddOutlined,
  HomeOutlined,
  EditOutlined,
  LoginOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme, Popconfirm } from 'antd'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthRoute from '@/components/AuthRoute'
import {
  useHistory,
  Switch,
  useLocation,
  Redirect
} from 'react-router-dom'
import style from './index.module.scss'
import Home from '../Home'

import { asyncGetUserInfo ,setUserInfo} from '@/store/reducers/user'
import {setToken} from '@/store/reducers/login'

const { Header, Sider } = Layout

const items = [
  {
    key: '/layout/home',
    icon: <HomeOutlined />,
    label: '数据预览'
  },
  {
    key: '/layout/article',
    icon: <HddOutlined />,
    label: '内容管理'
  },
  {
    key: '/layout/publish',
    icon: <EditOutlined />,
    label: '发布文章'
  }
]
export default function MyLayout () {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [selectedKeys, setSelectedKeys] = useState([location.pathname])
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  useEffect(() => {
    dispatch(asyncGetUserInfo())
  }, [])
  useEffect(()=>{
    setSelectedKeys([location.pathname])
  },[location.pathname])
  const switchMenu = ({ key }) => {
    history.push(key)
    setSelectedKeys([key])
  }

  const user = useSelector(state => state.user)
  const confirm = () => {
    dispatch(setToken({}))
    dispatch(setUserInfo({}))
    history.push('/login')
  }
  const cancel = () => {
    console.log('cancel')
  }
  return (
    <Layout className={style.root}>
      <Header
        className='header'
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className='demo-logo' />
        <div className='profile'>
          {user && <span>{user.name}</span>}
          <Popconfirm
            title='退出登录'
            description='确定退出吗?'
            onConfirm={confirm}
            onCancel={cancel}
            okText='Yes'
            cancelText='No'
          >
            <span>
              <LoginOutlined></LoginOutlined>
              退出
            </span>
          </Popconfirm>
        </div>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer
          }}
        >
          <Menu
            mode='inline'
            theme='dark'
            selectedKeys={selectedKeys}
            style={{
              height: '100%',
              borderRight: 0
            }}
            items={items}
            onClick={switchMenu}
          />
        </Sider>
        <Layout
          style={{
            padding: 20,
            overflow: 'auto'
          }}
        >
          <Switch>
            <AuthRoute path='/layout/home' component={Home}></AuthRoute>
            <Redirect exact from='/layout' to='/layout/home'></Redirect>
          </Switch>
        </Layout>
      </Layout>
    </Layout>
  )
}
