import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
// import reportWebVitals from './reportWebVitals';
import store from '@/store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
const root = ReactDOM.createRoot(document.getElementById('root'))

window.addEventListener('error', function onError (e) {
  if (e.message === 'ResizeObserver loop limit exceeded') {
    e.stopPropagation()
    e.stopImmediatePropagation()
  }
})
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider direction='ltr' locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
