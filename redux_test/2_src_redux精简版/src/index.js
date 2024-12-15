//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//引入App
import App from './App'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
// 更新状态
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})