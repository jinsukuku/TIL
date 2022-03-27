import './App.css'; // css파일 연결
import { Component } from 'react';  // Component을 사용하기위헤 import
import Customer from './components/Customer'; // 만들어둔 Customer 컴포넌트 사용을 위한 import 

const customer = {
    'name': '한유리',
    'age': 5,
    'address': '떡잎마을',
    'class': '해바라기반',
}

class App extends Component {
  render(){
    return (
      <Customer
        name = {customer.name}
        age = {customer.age}
        address = {customer.address}
        class = {customer.class}
      />
    );
  }
}
export default App; // App export