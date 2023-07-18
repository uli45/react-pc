import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import './App.css'
import React, { Suspense } from 'react'
// 导入页面
// import Login from '@/pages/Login'
// import Layout from '@/pages/Layout'
// import NotFound from './pages/NotFound'
// import AuthRoute from '@/components/AuthRoute'

const Login = React.lazy(() => import('@/pages/Login'))
const Layout = React.lazy(() => import('@/pages/Layout'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))
const AuthRoute = React.lazy(() => import('@/components/AuthRoute'))
function App () {
  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ margin: '200px auto', textAlign: 'center' }}>
            Loading...
          </div>
        }
      >
        <div className='App'>
          <Switch>
            <Route path='/login' component={Login} />
            <AuthRoute path='/layout' component={Layout} />
            {/* 重定向写在已有规则后面 */}
            <Redirect exact from='/' to='/login' />
            {/* 404要写在最后 */}
            <Route  component={NotFound} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
