import React from 'react'
import ReactDOM from 'react-dom/client';

//类式组件
/* class Fn extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

// 函数式组件
function Fn(props){
	// ref
	const myRef = React.useRef();

	// React.useState() 返回一个数组【状态，自定义一个更新状态的方法名】
	// React.useState(0) 是指：传入了一个状态
	// React.useState会把原始值存起来，更新状态的时候，不会被覆盖
	const [count,setCount] = React.useState(0)
	//加的回调
	function add(){
		//setCount(count+1) //第一种写法
		setCount(count => count+1 )
	}
	// 使用生命周期钩子
	// useEffect（()=>{自定义函数}，[检测到某个数据的改变，而跟着调用]）
	// []意味着谁都不检测
	React.useEffect(()=>{
		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		return ()=>{
			clearInterval(timer)
		}
	},[])
	//卸载组件的回调
	function unmount(){
		// 会有个报错，但是这里只是一个案例，不用在意
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.unmount();
	}
	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}


	return (
		<div>
			<p>这是一个函数式组件</p>
			{/* 拿到props */}
			<p>{props.a}</p>
			<input type="text" ref={myRef}/>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Fn
