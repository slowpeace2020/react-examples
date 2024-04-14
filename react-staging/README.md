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
        
>react-router-dom的v6版本最近刚出，和视频里的v5版本变化比较大，npm的时候注意控制下版本. npm install react-router-dom@版本号就行了
##五、NavLink与封装NavLink
1.NavLink可以实现路由链接的高亮。通过activeClassName指定样式名
2•标签体内容是一个特殊的标签属性
3.通过this.props.children可以获取标签体内容

##六、Switch的使用
1.通常情况下，path和component是一一对应的关系。
2.Switch可以提高路由匹配效举（单一匹配)。

##七、解决多级路径刷新页面样式丢尖的问題
1.public/index.htm1 中引入样式时不写 •/写/（常用)
2.public/index.hml 中引入样式时不写 •/写%PUBLIC_URL%（常用）只适用于react
3.使用HashRouter

## 八、路由的严格匹配与模糊匹配
1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致
2.开启严格匹配：<Route exact={true} path="/about" component =fAbout}/>
3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法然续匹配二级路由

##九、Redirect的使用
1.一般写在所有路由注册的旅下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2•具体编码：
<Switch>
‹Route path="/about" component={About} /›
‹Route path=" /home" component={Home} /›
‹Redirect to="/about"/›
</Switch>

## 十一、向路由组件传递參数
1. params 参数
路由链接(携带参数)：<Link to=' /demo/test/tom/18"}>详情</Link>
注册路由(声明接收)：sRoute path="/demo/test/:name/:age" component=(Test)/>
接收参数：const {id,title} = this.props.match.params

2.search參数
路由链接(携带参数)：<Link to=' /demo/test?name=tomBage=18，3>详指</Links
注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component=(Test}/>
接收參数：this.props .location. search
备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

3.state參数
路由链接(携背参数)：<Link to={{path:' /demo/test', state: (name:"tom ' ,age:1813}}}>详情‹/Link>
注册路由(无需声明，正常注册即可)：: <Route path="/demo/test" component=(Test}/›
接收參数：this.props.location.state
备注：刷新也可以保留参数

## 十二、编程式路由导航
借助this.props.history：的路由跳转、前进、后退
-this.prosp.history push
-this.prosp.history replace
-this.prosp.history goBack
-this.prosp.history goForward
-this.prosp.history go

## 十三. BrowserRouter 和 HashRouter 的区别
1. 底层原理不一样：
BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
2.path表现形式不一样
BrowserRouter的路径中没有＃，例处：localhost：3800/ demo/test
HashRouter的路径包含＃，例处： localhost：3080/#/ demo/test
3.刷新后对路由state參数的影劘
(1).BrowserRouter没有任何说南，因为state保存在history对象中。
(2）.HashRouter刷新后会导致路1state参数的丢失！！！
4. 备注：HashRouter用于解决一些路径错误相关的问题。


## 十四、antd的按需引入+自定主题
1. 安装依赖: yarn add react-app-rewired customize-cra babel-plugin-import less le
2. 修改package.json
"scripts": {
"start"; "react-app-rewired start",
"build": "react-app-rewired build"
"test": "react-app-rewired test"
"eject": "react-scripts eject"
},
...
3.根目录下创建config-overrides.js
1能置具体的修改規则
const { override, fixBabelImports,addLessLoader) = require ('customize-cra').
module.exports = override
fixBabelImports ('import', {
libraryName: 'antd'
libraryDirectory: 'es
style: true,

## redux
(2). src 下建立:
-redux
-store.is
-count_reducer.js
(3).store.is:
1）. 引入redux中的createstore的数，创建一-个store
2).createstore调用时要传入一个为其服务的reducer
3)•记得暴站store对象
(4).count_reducer.js:
1).reducer的本质是一-个的数，按收：prestate,action，返回加工后的状念
2).reducer有两个作用：初始化状念，加工状态
3).reducer被第一次调用时，是store自动触发的，
4) preState 是undefined,
WiliactionA:(type:'@@REDUX/INIT_a.2.b.4}
（5)在index•js中监测store中状念的改变，一旦发生改变重新渲染<App/>
备注：redux只负责管理状态：至于状念的改变驱动页面的展示，要靠我们自己写。

## 3•求和案例_redux异步action版
(1)）•明确：延迟的动作不想交给组件自身，想交纷action
（2）•何时需要异业action：想要对状念进行操作，但是具体的数据货异步任务返回。
（3） •具体编码：
1).yarn add redux-thunk。并配置有store中
2）•创建action的的数不再返回一般对象，而是一个的数。该两数中写异步任务。
3）.异步任务有结果后，分发一个同步的action去真正操作数据。
（4).各注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

## 4• 求和案例_react-redux基本使用
（1）•明确两个概念：
1)•UI组件：不能使用任何redux的api，只负责页面的星现、交互等。
2).容器组件：负责和redux通信，将结果交给UI组作。
（2）•如何创建一•个容器组件——靠react-redux 的 connect两数
connect (mapStateToProps‚mapDispatchToProps)(UI411%:)
-mapstateToprops：映射状念，返回值是一个对象
-mapDispatchToProps：映射探作状态的方法，返回值是一个对象
(3）•各注：容器组件中的store是作props传进去的，而不是在容器组件中直按引入

## 5。求和案例_react-redux优化
（1）•容器组件和U工组件整合一个文件
(2）•无需自己给容器组什传道store，给<App/>包赛一个‹Provider store={store}>即可。
(3)。使用了react-redux后也不用再自己检测redux中状态的改变了，容器组什可以自动完成这个工保。
（4）.mapDispatchToprops也可以简单的写成一个对象
（5）•一个组件要科redux“打交道”要经过哪儿步？
（1）•定义好U工组件---不暴露
(2).引 connect生成一个容器组件，并暴露，写法奶下：
connect
state => ({key:value!)
{key:xxxxxAction)
)(UI4144)
(4)•在UI组件中通过this.props.xxxxxxx读取和操作状态