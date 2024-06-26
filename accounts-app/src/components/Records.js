import {Component} from "react";
import Record from "./Record";
// import $ from 'jquery';
import {getJSON} from 'jquery';
import axios from 'axios';
import PropTypes from "prop-types";
import * as RecordsAPI from "../utils/RecordsAPI";
import RecordForm from "./RecordForm";
import AmountBox from "./AmountBox";

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

    addRecord(record) {
        console.log(record)
        this.setState({
            error: null,
            isLoaded: true,
            records: [
                ...this.state.records, record
            ]
        })
    }

    updateRecord(record, data) {
        const recordIndex = this.state.records.indexOf(record)
        const newRecords = this.state.records.map((item, index) => {
            if (index !== recordIndex) {
                return item;
            }

            // 合并值
            return {
                ...item,
                ...data,
            };
        });
        this.setState({
            records: newRecords,
        })

    }

    deleteRecord(record) {
        //过滤record
        //找出在当前array的index然后过滤掉
        const recordIndex = this.state.records.indexOf(record)
        const newRecords = this.state.records.filter((item, index) => index != recordIndex)
        this.setState({
            records: newRecords
        })
    }

    credits() {
        let credits = this.state.records.filter((record) => {
            return record.amount >= 0;
        })

        return credits.reduce((prev, cur) => {
            return prev + Number.parseFloat(cur.amount, 0)
        }, 0)
    }

    debits() {
        let credits = this.state.records.filter((record) => {
            return record.amount < 0;
        })

        return credits.reduce((prev, cur) => {
            return prev + Number.parseFloat(cur.amount, 0)
        }, 0)
    }

    balance() {
        return this.credits() + this.debits();
    }

    render() {
        const {error, isLoaded, records} = this.state;

        let recordsComponent;


        if (error) {
            recordsComponent = <div>Error:{error.responseText}</div>
        } else if (!isLoaded) {
            recordsComponent = <div>Loading....</div>
        } else {
            recordsComponent = <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Account</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {records.map((record) => <Record key={record.id} {...record} record={record}
                                                 handleEditRecord={this.updateRecord.bind(this)}
                                                 handleDeleteRecord={this.deleteRecord.bind(this)}
                />)}
                </tbody>
            </table>

        }
        return (
            <div>
                <h2>Records</h2>
                <div className="row mb-3">
                    <AmountBox text="Credit" type="success" amount={this.credits()}></AmountBox>
                    <AmountBox text="Debit" type="danger" amount={this.debits()}></AmountBox>
                    <AmountBox text="Balance" type="info" amount={this.balance()}></AmountBox>
                </div>
                <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
                {recordsComponent}
            </div>
        )
    }
}

export default Records;

Records.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number
}
