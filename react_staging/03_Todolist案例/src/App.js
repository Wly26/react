// 创建“外壳”组件app
import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'

// 创建并暴露app组件
export default class App extends Component {
  // 状态在哪，方法也写在哪
  // 初始化状态
  state = {
    todos: [
      {
        id: "001",
        name: "吃饭",
        done: true,
      },
      {
        id: "002",
        name: "睡觉",
        done: true,
      },
      {
        id: "003",
        name: "敲代码",
        done: false,
      },
      {
        id: "004",
        name: "逛街",
        done: true,
      },
    ],
  };
  // 给子组件一个回调函数,用于接收数据
  // 要么用 return ，要么用 this.setState
  // 添加一个元素
  addTodo = (data) => {
    // 获取原始数据列表
    const { todos } = this.state;
    // 加入一个值
    const newTodos = [data, ...todos];
    // 更新状态
    this.setState({ todos: newTodos });
  };
  // 修改状态
  updataTodo = (id, done) => {
    console.log(id, done); // 003 true
    // 获取原始数据列表
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      // 如果id值是一样的，则修改done的值
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };
  // 删除
  deleteTodo = (id) => {
    // 获取原始数据列表
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      // 如果id值是一样的，则删除
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  // 全选
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done };
    });
    this.setState({ todos: newTodos });
  };
  handleClearAllTodo = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.done === false;
    });
    this.setState({ todos: newTodos });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updataTodo={this.updataTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            handleClearAllTodo={this.handleClearAllTodo}
          />
        </div>
      </div>
    );
  }
}
