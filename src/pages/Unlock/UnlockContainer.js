import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { history } from 'react-router';
import { unlockStore } from '../../actions';
import { decryptStore } from '../../utils';
import Unlock from './Unlock';

class UnlockContainer extends React.Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            errorMessage: '',
            password: ''
        };
    }

    onSubmit (e) {
        e.preventDefault();

        if (_.isEmpty(this.state.password)) {
            this.setState({ errorMessage: 'Password cannot be empty.' });
        } else {
            this.setState({ errorMessage: null });

            decryptStore({ password: this.state.password })
                .then(store => {
                    this.props.unlockStore(store.items, this.state.password);
                    this.props.history.replace('/items')
                })
                .catch(e => {
                    console.error(e);
                    this.setState({ errorMessage: 'Wrong password' });
                });
        }
    }

    render () {
        return (
            <Unlock
                errorMessage={ this.state.errorMessage }
                onSubmit={ this.onSubmit }
                onPasswordChange={ password => this.setState({ password }) }
            />
        );
    }
}

const ConnectedUnlock = connect(
    () => ({}),
    dispatch => ({
        unlockStore: (items, password) => dispatch(unlockStore(items, password))
    })
)(UnlockContainer);

export default ConnectedUnlock;
