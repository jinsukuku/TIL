import Hello from './Hello';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  return (
    <div>
      <UserList />
      <br/>
      <InputSample />
      <br/>
      <Counter></Counter>
      <br/>
      <Hello name="우영우" check={false}>
        <p>*거꾸로 말해도 우영우, 기러기 토마토 스위스 별똥별 역삼역</p>
      </Hello>
    </div>
  );
}

export default App;
