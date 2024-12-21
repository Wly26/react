// 创建“外壳”组件app
import React, { Component } from 'react'
import Fn from './component/fn'

// 创建并暴露app组件
export default class App extends Component {
	render() {
		return (
			<div>
				app
				<Fn a={1}/>
			</div>
		)
	}
}
