import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// import './App.css'

// 导入页面
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import NotFound from './pages/NotFound'
import AuthRoute from '@/components/AuthRoute'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <AuthRoute path='/layout' component={Layout} />
          {/* 重定向写在已有规则后面 */}
          <Redirect exact from='/' to='/login' />
          {/* 404要写在最后 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
