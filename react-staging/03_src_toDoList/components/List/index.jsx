import React, {Component} from 'react';
import PropTypes from "prop-types";
import Item from "../Item";
import './index.css'

class List extends Component {
    //对接收的props进行类型和必要性限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired,
    }

    render() {
        const {todos, updateToDo,deleteToDo} = this.props
        // console.log(updateToDo)
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo) => {
                            //批量传todo属性
                            return <Item key={todo.id} {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;