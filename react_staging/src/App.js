// 创建“外壳”组件app
import React, { Component } from 'react'
import Hello from './component/Hello'
import Welcome from './component/Welcome'

// 创建并暴露app组件
export default class App extends Component {
	render() {
		return (
			<div>
				<Hello/>
				<Welcome/>
			</div>
		)
	}
}
