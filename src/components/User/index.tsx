import * as React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { userSelector } from 'src/redux/selectors/userDataSelector';

import { UserModel } from 'src/models/UserModel';
import { getUserDataAction } from 'src/redux/actions/userAction';

interface OwnProps {
  theme
}

interface StateProps {
  user: UserModel,
}

const selector = createStructuredSelector({
  user: userSelector,
});

interface DispatchProps {
  getUser(): void
}

const dispatcher = dispatch => ({
  getUser: () => dispatch(getUserDataAction()),
});

const connector = connect<StateProps, DispatchProps, OwnProps>(selector, dispatcher);

type Props = StateProps & DispatchProps & OwnProps

class User extends Component<Props> {

  componentDidMount() {
    const {
      getUser,
    } = this.props;
    getUser();
  }

  render() {
    const {
      user,
    } = this.props;

    return (
        <div>{ user.username }</div>
    )
  }
}

export default connector(User);
