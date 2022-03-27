import React from 'react';

class Customer extends React.Component{
    render() {
        return(
            // component를 실제 화면에 그릴 때 반드시 필요하다
            <div>
                <CustomerProfile name = {this.props.name} image = {this.props.image} id = {this.props.id} />
                <CustomerInfo age = {this.props.age} class = {this.props.class} address = {this.props.address} />
            </div>
        );
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.age}살</p>
                <p>{this.props.address}</p>
                <p>{this.props.class}</p>
            </div>
        )
    }
}

export default Customer;