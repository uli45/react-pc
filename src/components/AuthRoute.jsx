import { Route, Redirect } from 'react-router-dom'
import { getToken } from '@/utils/storage'

function AuthRoute ({ children, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location: { pathname } }) => {
        const tokenObj = getToken()
        if (tokenObj && tokenObj.token) {
          // 登录了
          return children ? children : <Component />
        } else {
          // 未登录
          return (
            <Redirect to={{ pathname: '/login', state: { toUrl: pathname } }} />
          )
        }
      }}
    />
  )
}

export default AuthRoute
