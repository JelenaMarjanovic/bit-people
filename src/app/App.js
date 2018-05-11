import React, { Component } from 'react';

import './App.css';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';
import { userService } from '../services/UserServices';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      usersData: [],
      viewType: JSON.parse(localStorage.getItem("state")),
      searchValue: "",
      loading: true
    }

    localStorage.setItem("state", this.state.viewType);
  }

  changeView = () => {
    this.setState({ viewType: !this.state.viewType });

    localStorage.setItem("state", !this.state.viewType);
  }

  componentDidMount() {
    userService.getUsers().then((result) => {
      this.setState({ usersData: result });
      this.setState({ loading: false });
    });

    this.setState({ viewType: JSON.parse(localStorage.getItem("state")) });
  }

  fetchNewUsers = () => {
    this.setState({ loading: true, searchValue:"" });
    
    userService.getUsers().then((result) => {
      this.setState({ usersData: result });
      this.setState({ loading: false });
    });
  }

  onSearchValueChange = (inputValue) => {
    this.setState({ searchValue: inputValue.toLowerCase() });
  }

  getUsers = () => {
    const { usersData } = this.state;

    return usersData.filter((user) => {
      return user.getFullName().toLowerCase().includes(this.state.searchValue);
    });
  }

  render() {
    return (
      <div>
        <Header changeView={this.changeView} fetchNewUsers={this.fetchNewUsers} cardType={this.state.viewType} showIcons={true}/>
        <Main data={this.getUsers()} cardType={this.state.viewType} changeValue={this.onSearchValueChange} loading={this.state.loading} />
        <Footer />
      </div>
    );
  }
}

export default App;