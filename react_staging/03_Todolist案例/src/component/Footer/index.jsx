import React, { Component } from 'react'
import '../Footer/index.css'

export default class Footer extends Component {
  handleCheckAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone = () =>{
    this.props.handleClearAllTodo()
  }
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,current) =>{
      return pre + (current.done ? 1:0)
    },0)

    const total = todos.length
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked ={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部 {total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
  }
}
