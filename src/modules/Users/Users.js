import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllUsers } from './UsersActions';

const mapStateToProps = (state) => ({
  usersList: state.users.data
});

const mapDispatchToProps = {
  fetchUsers: () => fetchAllUsers(),
};

class Users extends Component {
  static defaultProps = {
    usersList: [],
    fetchUsers() {},
  };

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { usersList } = this.props;
    console.log('usersList', usersList);
    return (
      <div>
        hello users!!!
        {
          usersList.map((user, index) => (
            <p key={user.id}>{user.name}</p>
          ))
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
