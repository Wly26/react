import React, { Component } from 'react'
import '../Item/index.css'

export default class Item extends Component {
  state = {mouse:false}
  // 鼠标移入/移出的回调
  handleMouse = (flag) =>{
    // 这里需要一个回调函数，来接收这个flag值。
    return () =>{
      this.setState({mouse:flag})
    }
  }
  // 勾选/取消勾选某一个todo的回调
  handleCheck = (id)=>{
    return (event) =>{
      this.props.updataTodo(id,event.target.checked)
    }
  }

  // 删除，这样写不用高阶函数
  handleDelete = (id)=>{
    // window不能省
    if(window.confirm('确定删除吗？')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} =this.state
    return (
        <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
        </li>
    )
  }
}
