// 创建“外壳”组件app
import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

// 创建并暴露app组件
export default class App extends Component {
	render() {
		return (
			<div>
				<Count />
				<br/>
				<Person/>
			</div>
		)
	}
}
