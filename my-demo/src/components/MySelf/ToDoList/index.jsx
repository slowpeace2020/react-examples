import React, {Component} from 'react';


class ToDoList extends Component {
    state = {
        todolist: [
            {id: 1, name: "go to forest"},
            {id: 2, name: "go to restuarant"},
            {id: 3, name: "go to park"},
        ],
        newTask: ''
    }

    add = () => {
        const newTask = {
            id: this.state.todolist.length + 1,
            name: this.state.newTask
        };
        this.setState(prevState => ({
            todolist: [...prevState.todolist, newTask],
            newTask: '',
        }));
    }

    handleInputChange = (event) => {
        this.setState({newTask: event.target.value})
    }

    delete = (taskId)=>{
        this.setState(prevState => ({
            todolist: prevState.todolist.filter(task => task.id !== taskId)
        }));
    }

    render() {
        return (
            <div>
                <input placeholder='add task' value={this.state.newTask} onChange={this.handleInputChange}/>
                <button onClick={this.add}>add Task</button>
                <ul>
                    {this.state.todolist.map(task => {
                        return <li key={task.id}>
                            {task.name}
                            <button onClick={()=>this.delete(task.id)}>delete</button>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default ToDoList;