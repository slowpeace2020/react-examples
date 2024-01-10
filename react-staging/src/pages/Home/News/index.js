import React, {Component} from 'react';

class News extends Component {
    componentDidMount() {
        setTimeout(()=>{
            this.props.history.push('/home/message')
        },2000)
    }

    render() {
        return (
            <ul>
                <li><a href="/news1">news1</a>&nbsp;&nbsp;</li>
                <li><a href="/news2">news2</a>&nbsp;&nbsp;</li>
                <li><a href="/news3">news3</a>&nbsp;&nbsp;</li>
            </ul>
        );
    }
}

export default News;