import React, {Component} from 'react';

class Table extends Component {
    state ={
        tableList:[
            {id:1,name:'Anna',location:'MA'},
            {id:2,name:'Baby',location:'CA'},
            {id:3,name:'Diane',location:'FL'},
        ],
        newLine:{id:'',name:'',location:''},
    }

    handleChange = (event)=>{
        this.setState( {
            newLine: {...this.state.newLine,[event.target.name]:event.target.value}
        })
    }

    addRow = ()=>{
        this.setState(prevState=>({
            tableList:[...prevState.tableList,prevState.newLine],
            newLine:{id:'',name:'',location:''},
        }))
    }



    render() {
        return (
            <div>
                <input name='id' onChange={this.handleChange} value={this.state.newLine.id} placeholder='ID'/>
                <input name='name' onChange={this.handleChange} value={this.state.newLine.name} placeholder='Name'/>
                <input name='location' onChange={this.handleChange} value={this.state.newLine.location} placeholder='Location'/>
                <button onClick={this.addRow}>add to table</button>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>location</th>
                    </tr>
                </thead>
                {
                    this.state.tableList.map((row,index)=>{
                        return (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.location}</td>
                            </tr>
                        )
                    })
                }

            </div>
        );
    }
}

export default Table;