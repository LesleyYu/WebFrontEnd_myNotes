# React

## Basics

### setState

#### setState更新状态的2种写法

  (1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用

  (2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
    1.对象式的setState是函数式的setState的简写方式(语法糖)
    2.使用原则：
      (1).如果新状态不依赖于原状态 ===> 使用对象方式
      (2).如果新状态依赖于原状态 ===> 使
      (3).如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取


------

## Hooks

### 1. React Hook/Hooks是什么?

(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性

### 2. 三个常用的Hook

(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()

### State Hook

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

#### Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明:
        useEffect(() => {
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行

(4). 可以把 useEffect Hook 看做如下三个函数的组合
      componentDidMount()
      componentDidUpdate()
      componentWillUnmount()
```

#### Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```

 *待补全*

------

## Staging

### 01 脚手架

### 02 [hello react](02_staging/02_src_hello_react/README.md)

**知识点：样式的模块化**
看/component/Hello下的两个文件：
[index.jsx](02_staging/02_src_hello_react/components/Hello/index.jsx)
[index.module.css](02_staging/02_src_hello_react/components/Hello/index.module.css)

index.css变成了index.module.css
这叫做**样式的模块化**

可以避免components间样式的冲突

这样改名之后在 Hello/index.js里面的import语句也有变化
 `import hello from "./index.module.css"`
在calssName里的样式名之前也要加上类名
className = {hello.title}

当然如果用less之后就同样可以避免这个问题，并且不用改名

### 03 todoList 案例

1. 拆分组件、实现静态组件，注意：className、style的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
      ——某个组件使用：放在其自身的state中
      ——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
3. 关于父子之间通信：
    1.【父组件】给【子组件】传递数据：通过props传递
    2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
4. 注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
5. 状态在哪里，操作状态的方法就在哪里

### 04 配置代理

[代码](02_staging/04_src_配置代理/App.jsx) 中，我们使用了方法二

##### 我的问题：
我没听懂在github那个案例里面要怎么配置CORS跨域的代理。会报错诶
b站视频第68p

#### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

#### 方法二

1. 第一步：创建代理配置文件
    在src下创建配置文件： `src/setupProxy.js`
    [setupProxy.js文件链接](02_staging/04_src_配置代理/setupProxy.js)

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

注意：

1. 测试时需要一个 `http://localhost:5000` 的server(s)，放在 [02_staging/04_src_配置代理/servers](02_staging/04_src_配置代理/servers/server1.js) 下了
2. 打开文件夹后运行：`npm start`

### 05 - 07 GitHub案例

案例题目：将 [GitHub案例静态页面](02_staging/05_GitHub案例静态页面/index.html) 内的 html css 文件改写成 React

这个案例我们进行了配置代理的应用，使用了三种方法：

1. axios
2. PubSub
3. fetch

考点：

1. CORS
2. fetch的特殊性：不使用 xhr 也能进行request

#### 方法一 axios

**React组件间通讯的思路:**

本案例实现兄弟间通讯的方式需要通过父组件 `app.jsx`。所以 state 储存在 app.jsx 中。

1. [`SearchBar`](02_staging/05_src_有笔记版/components/SearchBar/index.jsx) 中：
    点击 `<button>` 来search，所以写一个 search 方法。search 方法内获取用户的输入是通过 `ref` 箭头函数的方法，从 `<input>` 元素中获取，储存在 `keyWordElement` 中。其中使用了**连续解构赋值**的方法：

    ```js
    const { keywordElement: { value } } = this;
    ```

    这样写可以同时直接获得 keywordElement 和 value。

    通过调用父组件通过 props 传入的 updateAppState 方法，将数据传给父组件 `app.jsx`：

    ```js
        // send request
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
          response => { 
            this.props.updateAppState({ users: response.data.items, isLoading: false});
          },
          error => { 
            this.props.updateAppState({ err: error.message, isLoading: false });
            // IMPORTANT 要保存error中的message而不是error本身。因为error本身是一个object，在报错时整个网页都会出错
          }
        )
    ```

    **我的问题：**
    视频[第68p](https://www.bilibili.com/video/BV1wy4y1D7JT?p=68&vd_source=1df467a5303aad1fcd0839b54c44ab4e) 17分钟左右 讲了跨域的处理方法 CORS。他写了一个NodeJS文件来给出解决方案。在[这里](/02_staging/05_src_有笔记版/server/server.js)。是我看不懂也不会用的。一用就报错，可能需要维护了。
    他[源代码](/02_staging/05_src_github搜索案例_axios/components/Search/index.jsx) 里不是用的 `https://api.github.com/search/users?q=${value}`，用的是 CORS 处理过的第二种配置代理的方法

2. 父组件 [`app.jsx`](02_staging/05_src_有笔记版/App.jsx)中：
收到 `SearchBar` 通过 `updateAppState` 传来的数据，在本方法中更新 state。

3. [`List`](02_staging/05_src_有笔记版/components/List/index.jsx)中：
直接使用更新过后的 state，进行渲染。

Tips
由于使用了 axios，这个方法无法进行兄弟间通讯，所以要统一传递给`app.jsx`。下面这个 PubSub 方法可以避免这样的麻烦，state能直接存在要使用的组件 `List`中。

#### 方法二 PubSub

工具库：PubSubJS

安装： `npm install pubsub-js --save`

使用：

1) 引入 `import PubSub from 'pubsub-js'`
2) 订阅 `PubSub.subscribe('delete', function(data){ });`
3) 发布消息 `PubSub.publish('delete', data)`

案例中：

1. [`App.jsx`](02_staging/06_src_我的笔记版/App.jsx)中：
    啥也没有。

2. [`SearchBar`](02_staging/06_src_我的笔记版/components/SearchBar/index.jsx)中：
    1) 还是通过 `ref` 箭头函数的方法获取用户输入, 也还是使用 axios来 send request

    ```js
    const { keywordElement: {value: keyWord } } = this

    // this.props.updateAppState({ isFirst: false, isLoading: true })

    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => { 
        // this.props.updateAppState({ users: response.data.items, isLoading: false});
       },
      error => { 
        // this.props.updateAppState({ err: error.message, isLoading: false });
       }
    )
    ```

    但是我们不再使用兄弟间通讯的方式了。已经被注注释掉了。下面写成 PubSub的方法：

    ```js
     const { keywordElement: {value: keyWord } } = this
    
    //发送请求前通知 List 更新状态
    PubSub.publish('hi', { isFirst: false, isLoading: true })

    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => { 
        PubSub.publish('hi', { users: response.data.items, isLoading: false })
       },
      error => { 
        PubSub.publish('hi', { err: error.message, isLoading: false });
       }
    )
    ```

3. [`List`](02_staging/06_src_我的笔记版/components/List/index.jsx)中：
    state存在这里啦！好方便！
    我们需要订阅 发布的消息 才能使用：

    ```js
    // 因为消息订阅发生在，刚刚渲染好的时候。所以我们用生命周期的钩子来订阅
      componentDidMount() {
        this.token = PubSub.subscribe('hi', (msg, stateObj) => {
          this.setState(stateObj)
        })
      }

    // 需要在结束的时候取消订阅
    componentWillUnmount() {
      PubSub.unsubscribe(this.token)
    }
    ```

#### 方法三 fetch （YFI）

我们知道，jQuery 和 axios 本质上都是封装了 XmlHttpRequest 来发送 ajax 请求。除此之外还有一个 js 自带的工具 fetch：

1. 是原生函数。不使用 XmlHttpRequest 也能发送 ajax 请求。
2. 缺点：老版本浏览器可能不支持。所以使用率并不高。

考点：没有xhr就不能发送请求了吗？不是的，还可以用 fetch

[源代码](/02_staging/07_src_我的笔记版/components/SearchBar/index.jsx)

参考文章：
<https://segmentfault.com/a/1190000003810652>

1. 未优化版本：
    使用 `.then(response => {...}, error => {...})` 

    ```js
    fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log('联系服务器成功了');
        return response.json()
      },
      error => {
        console.log('联系服务器失败了',error);
        return new Promise(()=>{})  // 这句话用于停止后续的 then 继续执行
      }
    ).then(
      response => {console.log('获取数据成功了',response);},
      error => {console.log('获取数据失败了',error);}
    )
    ```

    这里要写两个then，第一个尝试联系服务器，第二个尝试获取数据
    这就是 关注分离 (Separation of Concerns)
    我们在第一个then内写了返回值（而且是promise实例），第二个then内会收到第一个then内的返回值。

    上面的语句 `return new Promise(()=>{})` 的解析：
    因为联系服务器失败时会返回 undefined，这不是一个Promise对象。（Promise知识点：当一个 then 返回一个非Promise对象时，我们会默认这个返回值是成功的。）所以这个 undefined 返回值会导致后面执行‘获取数据成功了’，不是我们期望的。所以我们强行返回一个Promise对象，在这里停下来。

2. 优化版本A
    给关注分离后的代码 统一处理 error。使用 `.catch(error => {})`

    ```js
    fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log('联系服务器成功了');
        return response.json()
      }
    ).then(
      response => {console.log('获取数据成功了',response);}
    ).catch(
      error => { console.log('Somthing went wrong'); }
    )
    ```

3. 优化版本B
    思路：
      1) `fetch` 没必要非得用 `.then` 方法，可以用 `async` `await`
      2) 在用`try {...} catch (error {...})` 处理错误

    ```js
    search = async() => {
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
        console.log(response)
        const data = await response.json()
        console.log(data)
        PubSub.publish('hi', {isLoading: false, users: data.items})
      } catch (error) {
        console.log('reuqest failed', error)
        PubSub.publish('hi', {isLoading: false, err: error.message})
      }
    }
    ```

    **注意！**
    之前我们的 search 方法没有 `async` 关键字，这里我们使用 `await` 就必须要在 `await` 外面的函数体加上 `async`.

#### GitHub案例 总结

1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。

2. ES6小知识点：解构赋值+重命名

3. Promise 知识点：返回值的特性

4. 消息订阅与发布机制
      1.先订阅，再发布（理解：有一种隔空对话的感觉）
      2.适用于任意组件间通信
      3.要在组件的componentWillUnmount中取消订阅

5. fetch发送请求（关注分离的设计思想）
      try {
        const response= await fetch(`/api1/search/users2?q=${keyWord}`)
        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.log('请求出错',error);
      }

6. async await 知识点

### 08


















<!-- 
## 三、路由的基本使用
			1.明确好界面中的导航区、展示区
			2.导航区的a标签改为Link标签
						<Link to="/xxxxx">Demo</Link>
			3.展示区写Route标签进行路径的匹配
						<Route path='/xxxx' component={Demo}/>
			4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件
			1.写法不同：
						一般组件：<Demo/>
						路由组件：<Route path="/demo" component={Demo}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.接收到的props不同：
						一般组件：写组件标签时传递了什么，就能收到什么
						路由组件：接收到三个固定的属性
											history:
														go: ƒ go(n)
														goBack: ƒ goBack()
														goForward: ƒ goForward()
														push: ƒ push(path, state)
														replace: ƒ replace(path, state)
											location:
														pathname: "/about"
														search: ""
														state: undefined
											match:
														params: {}
														path: "/about"
														url: "/about"

## 五、NavLink与封装NavLink
				1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名

## 六、Switch的使用
				1.通常情况下，path和component是一一对应的关系。
				2.Switch可以提高路由匹配效率(单一匹配)。

## 七、解决多级路径刷新页面样式丢失的问题
				1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
				2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
				3.使用HashRouter

## 八、路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
				2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
				3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 九、Redirect的使用	
				1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
				2.具体编码：
						<Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>

## 十、嵌套路由
				1.注册子路由时要写上父路由的path值
				2.路由的匹配是按照注册路由的顺序进行的

## 十一、向路由组件传递参数
				1.params参数
							路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
							接收参数：this.props.match.params
				2.search参数
							路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.search
							备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
				3.state参数
							路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.state
							备注：刷新也可以保留住参数
				


## 十二、编程式路由导航
					借助this.prosp.history对象上的API对操作路由跳转、前进、后退
							-this.prosp.history.push()
							-this.prosp.history.replace()
							-this.prosp.history.goBack()
							-this.prosp.history.goForward()
							-this.prosp.history.go()

## 十三、BrowserRouter与HashRouter的区别
			1.底层原理不一样：
						BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
						HashRouter使用的是URL的哈希值。
			2.path表现形式不一样
						BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
						HashRouter的路径包含#,例如：localhost:3000/#/demo/test
			3.刷新后对路由state参数的影响
						(1).BrowserRouter没有任何影响，因为state保存在history对象中。
						(2).HashRouter刷新后会导致路由state参数的丢失！！！
			4.备注：HashRouter可以用于解决一些路径错误相关的问题。

## 十四、antd的按需引入+自定主题
			1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
			2.修改package.json
					....
						"scripts": {
							"start": "react-app-rewired start",
							"build": "react-app-rewired build",
							"test": "react-app-rewired test",
							"eject": "react-scripts eject"
						},
					....
			3.根目录下创建config-overrides.js
					//配置具体的修改规则
					const { override, fixBabelImports,addLessLoader} = require('customize-cra');
					module.exports = override(
						fixBabelImports('import', {
							libraryName: 'antd',
							libraryDirectory: 'es',
							style: true,
						}),
						addLessLoader({
							lessOptions:{
								javascriptEnabled: true,
								modifyVars: { '@primary-color': 'green' },
							}
						}),
					);
				4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉 -->