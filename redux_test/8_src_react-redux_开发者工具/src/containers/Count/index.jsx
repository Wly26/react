import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//Count的UI组件
class Count extends Component {

    myRef = React.createRef()

    selectNumber = () => {
        return this.myRef.current.value
    }
    increment = () =>{
        const value = this.selectNumber();
        this.props.jia(value*1)
    }
    decrement = () =>{
        const value = this.selectNumber();
        this.props.jian(value*1)
    }
    incrementIfOdd = () =>{
        const value = this.selectNumber();
        if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
    }
    incrementAsync = () =>{
        const value = this.selectNumber();
		this.props.jiaAsync(value*1,500)
    }
    render() {
        //console.log('UI组件接收到的props是',this.props);
        return (
            <div>
                <p>下方组件，总人数：{this.props.sum}</p>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={this.myRef} onChange = {this.selectNumber}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	state =>({count:state.he,sum:state.rens.length}),
	//mapDispatchToProps的一般写法
	/* dispatch => ({
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}) */

	//mapDispatchToProps的简写
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)

