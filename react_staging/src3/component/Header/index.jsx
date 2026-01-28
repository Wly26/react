import React from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default function Header({addTodo}) {
  Header.propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  const handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    const data = { id: nanoid(), name: target.value, done: false };
    addTodo(data);
    target.value = "";
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        onKeyUp={handleKeyUp}
        placeholder="请输入你的任务名称，按回车键确认"
      />
    </div>
  );
}

// export default class Header extends Component {
//   // 对接收的props进行：类型/必要性的限制
//   static propTypes = {
//     addTodo:PropTypes.func.isRequired
//   }
//   handleKeyUp=(event)=>{
//     const {keyCode,target} = event
//     // 是否是回车键
//     if(keyCode !== 13) return
//     // 添加的名字不能为空
//     if(target.value.trim() === ''){
//       alert('输入不能为空')
//       return
//     }
//     const data = {id:nanoid(),name:target.value,done:false}
//     this.props.addTodo(data)
//     // 清空
//     target.value = ''
//   }
//   render() {
//     return (
//       <div className="todo-header">
//         <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
//       </div>
//     )
//   }
// }
