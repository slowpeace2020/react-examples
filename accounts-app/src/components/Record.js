import {Component} from "react";
import * as RecordsAPI from "../utils/RecordsAPI";

export default class Record extends Component {
    constructor() {
        super();
        this.state = {
            edit: false
        };

    }

    handleToggle() {
        this.setState({
            edit: !this.state.edit,
        })
    }

    handleEdit(event) {
        event.preventDefault();
        const record = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: Number.parseFloat(this.refs.amount.value),
        }
        RecordsAPI.update(this.props.record.id, record).then(
            response => {
                this.setState({edit: false})
                this.props.handleEditRecord(this.props.record, response.data)
            }
        ).catch(
            error => console.log(error)
        )
    }

    handleDelete(event) {
        event.preventDefault();
        RecordsAPI.remove(this.props.record.id).then(
            response => {
                console.log(response.data)
                // this.setState({edit: false})
                this.props.handleDeleteRecord(this.props.record)
            }
        ).catch(
            error => console.log(error)
        )
    }

    recordRow() {
        return (
            <tr>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
                </td>
            </tr>
        )
    }

    recordForm() {
        return (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.record.date} ref="date"/></td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.title} ref="title"/>
                </td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.amount} ref="amount"/>
                </td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.handleEdit.bind(this)}>Update</button>
                    <button className="btn btn-danger" onClick={this.handleToggle.bind(this)}>Cancel</button>
                </td>
            </tr>
        )
    }

    render() {
        if (this.state.edit) {
            return this.recordForm();
        } else {
            return this.recordRow();
        }
    }
}