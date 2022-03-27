import './App.css'; // css파일 연결
import { Component } from 'react';  // Component을 사용하기위헤 import
import Customer from './components/Customer'; // 만들어둔 Customer 컴포넌트 사용을 위한 import 

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '짱구',
  'age': 5,
  'address': '떡잎마을',
  'class': '해바라기반',
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '유리',
  'age': 5,
  'address': '떡잎마을',
  'class': '해바라기반',
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '치타',
  'age': 7,
  'address': '새싹마을',
  'class': '장미반',
},
]
class App extends Component {
  render(){
    return (
      <div>
        {customers.map( c => {
            return (
              <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                age = {c.age}
                address = {c.address}
                class = {c.class}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App; // App export