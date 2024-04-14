import {Component} from "react";

class Records extends Component {
    render() {
        return (
            <div>
                <h2>Records</h2>
                <table className="table table-bordered">
                    <thead>
                    <th>
                        <td>Date</td>
                        <td>Title</td>
                        <td>Account</td>
                    </th>
                    </thead>
                </table>

            </div>
        )
    }
}

export default Records;
