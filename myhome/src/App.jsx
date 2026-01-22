// 创建“外壳”组件app
import React from 'react'

// 路由
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import routes from './routes'

// 函数式组件
import Fn from './component/fn'

// scss
import './App.scss'

// store
import useAppStore from './store'

// antd UI插件
import {
	HomeOutlined,
	LoadingOutlined,
	SettingFilled,
	SmileOutlined,
	SyncOutlined,
  } from '@ant-design/icons';
  import { Space } from 'antd';
import 'antd/dist/reset.css';
 
// 创建并暴露app组件
export default function App() {
  const count = useAppStore((state) => state.count);
  const increase = useAppStore((state) => state.increasement);
  const decrease = useAppStore((state) => state.decreasement);
  const reset = useAppStore((state) => state.reset);
  const fetch = useAppStore((state) => state.getData);
  const dbcount = useAppStore((state) => state.dbcount);

  // 模拟用户数据
  const messageArr = [
    { id: "01", title: "消息1", content: "content1" },
    { id: "02", title: "消息2", content: "content2" },
    { id: "03", title: "消息3", content: "content3"},
  ];
  console.log(messageArr, "messageArr");
  const navigate = useNavigate();
  const goToDetail = () => {
    // 传递基本类型数据
    navigate("/detailhome", {
      state: {
        message: "Hello",
        timestamp: Date.now(),
      },
    });
  };
  return (
    <div className="container">
      <Fn a={1} />
      <hr />

      <p>路由</p>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>

            {messageArr.map((messageObj) => {
              return (
                <li key={messageObj.id}>
                  {/* 向路由组件传递params参数 */}
                  <NavLink
                    to={`/detail/${messageObj.id}/${messageObj.title}/${messageObj.content}`}
                  >
                    {messageObj.title}
                  </NavLink>
                </li>
              );
            })}
            <button onClick={goToDetail}>Go to Detail</button>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <p>共享状态 zustand</p>
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>重置</button>
      <button onClick={fetch}>异步</button>
      <button onClick={dbcount}>X2 get使用</button>
      <hr />

      <p>ant-design UI</p>
      <Space>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </Space>
    </div>
  );
}
