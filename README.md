# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `git init`

Initialize the project's git repository

### `npm install`

Installing project dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### 本基础项目框架采用的技术栈和第三方包如下

 - React 18.2.0
 - Ant Design UI组件库 v5
 - React-router-dom  5.3.0
 - sass sass-loader
 - @craco/craco 更改脚手架配置 初始化配置 @
 - axios
 - redux: redux,react-redux,redux-toolkit
 - wangEditor 富文本编辑器
 - classNames 动态样式添加
 - 

### 注意点
 - 在最新的`react 18.2.0` 中，如果入口文件中使用了严格模式，会导致路由切换不了，需要在`index.js`入口文件中把严格模式去掉
  ```js
  root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
  ```

####  使用步骤
  - 1、在 `.env.development` 和 `.env.production`文件内设置 开发环境和生产环境  `baseURL`
  - 2、`utlis/request.js`文件中，有创建好的基础`请求拦截器`和`响应拦截器`，可以根据需要更改
  - 3、根据`React`语法创建jsx文件和路由，即可完成业务
  - 4、`craco.config.js` 文件内有创建好的基础打包配置，可以根据需求增加`webpack`打包配置
  - 5、项目有开启懒加载，懒加载有助于优化首屏加载速度，但是可能会遇到闪屏的情况，建议项目不大的情况下没必要开启懒加载，如果项目过大，开启懒加载会有好点的体验，但是请`自行解决闪屏问题`，作者本人是刚开始学习`React`，水平不够，如果您解决了闪屏问题，请给我提交`issues`，本人将感激不尽，认真学习。
  
###### 最后 
 - ###### 给一个在B站找的黑马后台地址 `https://toutiao.itheima.net/v1_0/`