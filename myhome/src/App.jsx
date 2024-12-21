// 创建“外壳”组件app
import React from 'react'

// 路由
import {NavLink,Routes, Route} from 'react-router-dom'
import routes from './routes'

// 函数式组件
import Fn from './component/fn'


// 创建并暴露app组件
export default function App() {
	return (
		<div>
			<Fn a={1}/> 
			<hr/><hr/><hr/>
			<br/><br/><br/>


			<p>路由</p>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由链接 */}
						<NavLink className="list-group-item" to="/about">About</NavLink>
						<NavLink className="list-group-item" to="/home">Home</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/* 注册路由 */}
							<Routes>
								{routes.map((route, index) => (
								<Route key={index} path={route.path} element={route.element} />
								))}
							</Routes>
						</div>
					</div>
				</div>
			</div>
			<hr/><hr/><hr/>
			<br/><br/><br/>
		</div>
	)
}
