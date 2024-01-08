# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

#＃
二、github搜索案例相关知识点
1.设计状念时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
2.ES6小知识点：解构赋值＋重命名
let obj = {a:{b:1}}
const {a}=obj;11传统解构赋值
const 1a:{b}}二0；11迮续解构赋值
const ta:fb:value}}= obj;11迮续解构赋值＋亚命名
3.消息订阅与发布机制
1•先订阅，再发布（理解：有一种隔空对话的感觉）
2.适用于任意组件间通信
3.要在组件的componentwi11Unmount中取消订阅
4.fetch发送请求（关注分离的设计思想）
try {
const response= await fetch (* /apil/search/users2?q=${keyWord}')
const data = await response.json()
console.log (data);
} catch (error) {
console. log ('request error"', error);

三、路由的基本使用
1.明确好界面中的导航区、展示区
2.导航区的a标签为Link标签
‹Link to="/xxxxx"›Demo‹/Link>
3.展示区写Route标签进行路径的匹配
‹Route path='/xxxx' component={Demo} /›
4.<App>的最外侧包了一个<BrowserRouter>或<HashRouter>

#＃ 四、路由组件与一般组件
1. 写法不同：
一般组件：<Demo/>
WIllf: ‹Route path="/demo component={Demo}/>
2•存放位置不同：
一般组件：components
路由组件：pages
3.按收到的props不同：
一般组件：写组件标签时传递了什么，就优收到什么
路由组件：按收到三个固定的属性
    history:
        go: f go(n)
        goBack: f goBack)
        goForward: f goForward()
        push: f push (path, state)
        replace: f replace (path, state)
    location:
        pathname: "/about"
        search: ""
        state: undefined
        match:
        params: {}
        path: "/about"
        url: "/about"