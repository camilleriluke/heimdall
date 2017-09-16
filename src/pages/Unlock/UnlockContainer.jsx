import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { unlockStore, push } from '../../actions';
import { decryptStore } from '../../utils';
import Unlock from './Unlock.jsx';
import './Unlock.scss';

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

            decryptStore({ file: this.props.storeFile, password: this.state.password })
                .then(store => {
                    this.props.unlockStore(store.items, this.state.password);
                    this.props.redirect('/items');
                })
                .catch(e => {
                    console.error(e);
                    this.setState({ errorMessage: 'Oups, wrong password...'  });
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

const Connected = connect(
    state => ({
        storeFile: state.status.storeFile
    }),
    dispatch => ({
        redirect: (path) => dispatch(push(path)),
        unlockStore: (items, password) => dispatch(unlockStore(items, password))
    })
)(UnlockContainer);

export default Connected;
