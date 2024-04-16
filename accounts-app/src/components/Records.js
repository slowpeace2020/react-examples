import {Component} from "react";
import Record from "./Record";
// import $ from 'jquery';
import {getJSON} from 'jquery';
import axios from 'axios';
import PropTypes from "prop-types";
import * as RecordsAPI from "../utils/RecordsAPI";
import RecordForm from "./RecordForm";

class Records extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        }
    }

    componentDidMount() {
        // $.getJSON("https://661b353e65444945d04f27a0.mockapi.io/api/v1/records").then(
//         getJSON("https://661b353e65444945d04f27a0.mockapi.io/api/v1/records").then(
//             // response=>console.log(response),
// ]            response => this.setState({
//                 records: response,
//                 isLoaded: true,
//             }),
//             error => this.setState({
//                 isLoaded: true,
//                 error
//             }),
//         )
//
        RecordsAPI.getAll().then(
            response => this.setState({
                records: response.data,
                isLoaded: true,
            }),
        ).catch(
            error => this.setState({
                isLoaded: true,
                error
            })
        )
    }

    render() {
        const {error,isLoaded, records} = this.state;

        let recordsComponent;


        if (error){
            recordsComponent = <div>Error:{error.responseText}</div>
        }else if(!isLoaded){
            recordsComponent = <div>Loading....</div>
        }else{
            recordsComponent =                 <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Account</th>
                </tr>
                </thead>
                <tbody>
                {records.map((record) => <Record key={record.id} {...record}/>)}
                </tbody>
            </table>

        }
        return (
            <div>
                <h2>Records</h2>
                <RecordForm />
                {recordsComponent}
            </div>
        )
    }
}

export default Records;

Records.propTypes = {
    id:PropTypes.string,
    date:PropTypes.string,
    title:PropTypes.string,
    amount:PropTypes.number
}
