import './App.css'; // css파일 연결
import { Component } from 'react';  // Component을 사용하기위헤 import
import Customer from './components/Customer'; // 만들어둔 Customer 컴포넌트 사용을 위한 import 

// @material-ui/core
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// css 
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  }
})

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers'); // api 연결
    const body = await response.json(); // api 로부터 받아온 데이터를 json형태로 
    return body; // return 
  }

  render(){
    const { classes } = this.props
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>주소</TableCell>
              <TableCell>반</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map( c => {
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
              }) : ""
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App); // App export