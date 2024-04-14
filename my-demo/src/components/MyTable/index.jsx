import React, {useState} from "react";

function MyTable() {
    const [table, setTable] = useState([
        {id: 1, name: 'Alice', age: 30},
        {id: 2, name: 'Babi', age: 30},
        {id: 3, name: 'Cindy', age: 30},
    ]);

    const [newEntry, setNewEntry] = useState({id: '', name: '', age: ''})

    const handleInputChange = (e) => {
        setNewEntry({...newEntry, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTable([...table, newEntry]);
        setNewEntry({id: '', name: '', age: ''})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='number' name='id' value={newEntry.id} onChange={handleInputChange} placeholder='ID'/>
                <input type='text' name='name' value={newEntry.name} onChange={handleInputChange} placeholder='NAME'/>
                <input type='number' name='age' value={newEntry.age} onChange={handleInputChange} placeholder='AGE'/>
                <button type="submit">Add Entry</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                {
                    table.map((line, index) => {
                        return <tr key={index}>
                            <td>{line.id}</td>
                            <td>{line.name}</td>
                            <td>{line.age}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )

}

export default MyTable;