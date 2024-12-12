// 创建“外壳”组件app
import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

// 创建并暴露app组件
export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Search/>
				<List/>
			</div>
		)
	}
}
