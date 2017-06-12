import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { unlockStore, push } from '../../actions';
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
                    this.props.redirect('/items')
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
                onPasswordChange={ ({ value }) => this.setState({ password: value }) }
            />
        );
    }
}

const ConnectedUnlock = connect(
    () => ({}),
    dispatch => ({
        redirect: (path) => dispatch(push(path)),
        unlockStore: (items, password) => dispatch(unlockStore(items, password))
    })
)(UnlockContainer);

export default ConnectedUnlock;
