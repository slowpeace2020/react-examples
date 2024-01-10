import React, {Component} from 'react';
// import qs from 'querystring';

const DetailData = [
    {id: "01", "content": "hello"},
    {id: "02", "content": "my girl"},
    {id: "03", "content": "stay together"},
]

class Detail extends Component {

    render() {
        //接收params参数
        // const {id, title} = this.props.match.params

        //接收search参数
        const {search} = this.props
        const {id,title} = qs.parse(search)


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