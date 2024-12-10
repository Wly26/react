// 创建“外壳”组件app
import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'


// 创建并暴露app组件
export default class App extends Component {
	state = {
		users:[], // 初始化数据
		isFirst:true, //是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'',//存储请求相关的错误信息

	}
	//更新App的state
	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}
	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}
