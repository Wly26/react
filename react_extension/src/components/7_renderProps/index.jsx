import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
	render() {
		return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* 把C组件当一个函数，给A进行渲染。 */}
        <A render={(name) => <C name={name} />} />
        <B render={(name) => <C name={name} />} />
      </div>
    );
	}
}

class A extends Component {
	state = {name:'tom'}
	render() {
		console.log(this.props);
		const {name} = this.state
		return (
			<div className="a">
				<h3>我是A组件</h3>
				{/* Vue中的具名插槽 */}
				{this.props.render(name)}
			</div>
		)
	}
}

class B extends Component {
	render() {
		console.log("B--render", this.props);
		return (
			<div className="b">
				<h3>我是B组件</h3>
			</div>
		)
	}
}
