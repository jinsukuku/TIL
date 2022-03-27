import React from 'react';

class Customer extends React.Component{
    render() {
        return(
            // component를 실제 화면에 그릴 때 반드시 필요하다
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.age}살</p>
                <p>{this.props.address}</p>
                <p>{this.props.class}</p>
            </div>
        );
    }
}

export default Customer;