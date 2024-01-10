import React, {Component} from 'react';

const DetailData = [
    {id: "01", "content": "hello"},
    {id: "02", "content": "my girl"},
    {id: "03", "content": "stay together"},
]

class Detail extends Component {

    render() {
        const {id, title} = this.props.match.params
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <div>
                <p>message detail</p>
                <ul>
                    <li>ID: {id} </li>
                    <li>Message: {title}</li>
                    <li>Content: {findResult.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;