import React from 'react';
import './Search.scss';

export default class Search extends React.Component {
    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.clear = this.clear.bind(this);
        this.state = {
            keyword: ''
        };
    }

    onChange (e) {
        const { target: { value } } = e;

        this.setState({ keyword: value });
        this.props.search(value);
    }

    clear () {
        this.setState({ keyword: '' });
        this.props.clearSearch();
    }

    render () {
        const { className } = this.props;
        const { keyword } = this.state;

        return (
            <div className={ `search ${ className }` }>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search...'
                    value={ keyword }
                    onChange={ this.onChange }
                />
            </div>
        );
    }
}
