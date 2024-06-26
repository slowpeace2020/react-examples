import React, {Component} from "react";
import * as RecordsAPI from "../utils/RecordsAPI";

export default class RecordForm extends Component {
    constructor(props) {
        super();
        this.state = {
            date: "",
            title: "",
            amount: "",
        }
    }

    handleChange(event) {
        let name, obj;
        name = event.target.name;
        this.setState((
            obj = {},
                obj["" + name] = event.target.value,
                obj
        ))
    }

    valid() {
        return this.state.date && this.state.amount && this.state.title
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {date: this.state.date, title: this.state.title, amount: Number.parseInt(this.state.amount)}
        RecordsAPI.create(data).then(
            // response => console.log(response.data)
            response=> this.props.handleNewRecord(response.data)
        ).catch(
            error => console.log(error.message)
        )
    }


    render() {
        return (
            <form className="form-inline mb-4" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)}
                           placeholder="Date" name="date" value={this.state.date}/>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)}
                           placeholder="Title" name="title"
                           value={this.state.title}/>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" onChange={this.handleChange.bind(this)}
                           placeholder="Amount" name="amount"
                           value={this.state.amount}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}> Create Record</button>
            </form>
        )
    }
}