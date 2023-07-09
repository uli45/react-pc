import { configureStore } from '@reduxjs/toolkit'

// 导入模块
import login from './reducers/login'
import user from './reducers/user'
import channel from './reducers/channel'

export default configureStore({
  reducer: {
    login,
    user,
    channel
  }
})
