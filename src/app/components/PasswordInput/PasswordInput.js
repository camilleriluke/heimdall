import React from 'react';
import generalStyles from '../../styles/general.css';
import styles from './PasswordInput.css';

export default class PasswordInput extends React.Component {
    constructor (props) {
        super();
        this.props = props;
        this.state = {
            type: 'password'
        };
    }

    toggleType () {
        const type = this.getNextType();

        this.setState({ type });
    }

    getNextType () {
        if (this.state.type === 'password') {
            return 'text';
        }

        return 'password';
    }

    render () {
        const placeholder = 'Password...';

        return (
            <div className={ styles.passwordInput }>
                <input
                    className={ generalStyles.input }
                    placeholder={ placeholder }
                    type={ this.state.type }
                />
                <span className={ styles.passwordInputToggle } onClick={ this.toggleType.bind(this) } >+</span>
            </div>
        );
    }
}
