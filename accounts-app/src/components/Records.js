import {Component} from "react";
import Record from "./Record";

class Records extends Component {
    constructor() {
        super();
        this.state ={
            records:[
                {"id":1,"date":"2018-09-01","title":"收入","amount":20},
                {"id":2,"date":"2018-10-01","title":"录视频收入","amount":20},
                {"id":3,"date":"2018-11-01","title":"广告","amount":20},
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Records</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Account</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.records.map((record)=><Record key={record.id} record={record}/>)}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Records;
