import React from 'react';
import _ from 'lodash';
import './LinkInput.scss';

const DEFAULT_PLACEHOLDER = 'Link';

export default class LinkInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: this.props.value || ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange ({ target: { value }}) {
        const { name } = this.props;

        this.setState({ value });

        if (this.props.onChange) {
            this.props.onChange({ name, value });
        }
    }

    render () {
        const { name, placeholder, className } = this.props;
        const { value } = this.state;

        return (
            <div className={ `input-container ${ className }` }>
                <input
                    name={ name }
                    className={ `input link-input` }
                    placeholder={ placeholder || DEFAULT_PLACEHOLDER }
                    onChange={ this.onChange }
                    value={ value }
                    type='text'
                />
                <a  href={ value }
                    target='_blank'
                    className='input-icon link-input-icon ion-link'
                ></a>
            </div>
        );
    }
}
