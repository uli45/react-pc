import React from 'react'
import style from './index.module.scss'
// import logo from '@/assets/logo.png'
import {useDispatch} from 'react-redux'
import {asyncLogin} from '@/store/reducers/login'
import {useHistory} from 'react-router-dom'
import { Card, Button, Checkbox, Form, Input,message } from 'antd'

export default function Login () {
  const dispatch = useDispatch()
  const history = useHistory()
  const onFinish = async values => {
    delete values.remember
    try { 
      // await dispatch(asyncLogin(values))
      message.success('登录成功',1)
      history.push('/layout')
    } catch (error) {
      message.error(error.response.data.message,1)
    }
  }
  return (
    <div className={style.root}>
      <Card className='login-container'>
        {/* <img src={logo} alt='项目名' className='login-logo' /> */}
        <Form
          name='basic'
          initialValues={{
            remember: true,
            mobile: '13911111111',
            code: '246810'
          }}
          onFinish={onFinish}
          autoComplete='off'
          size='large'
          
        >
          <Form.Item
            name='mobile'
            rules={[
              {
                required: true,
                message: '请输入手机号!'
              },
              {
                pattern:
                  /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                message: '请输入正确的手机号!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='code'
            rules={[
              {
                required: true,
                message: '请输入验证码!'
              },
              {
                pattern: /^[0-9]{6}$/,
                message: '请输入正确的验证码!'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            rules={[
              // {
              //   pattern: /true/,
              //   message: '请同意用户协议!'
              // }
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('请同意用户协议!')
              }
            ]}
          >
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
