import React,{Component} from 'react'
import hello from './index.module.css'	// 因为css文件名被加上了module，所以可以写 import hello from。这样能避免样式的冲突

export default class Hello extends Component{
	render(){
		return <h2 className={hello.title}>Hello,React!</h2>
			// 这里要写类名 hello
	}
}