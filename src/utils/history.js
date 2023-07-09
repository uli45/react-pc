import { createHashHistory } from 'history'

/**
 *  注意 如果在别的页面中引用该模块 ，如果路由切换了，页面不更换，请注意 导入的history版本号 建议版本号为4.9.0
 */
const history = createHashHistory()

export default history
