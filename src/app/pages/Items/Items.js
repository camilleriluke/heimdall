import React from 'react';
import _ from 'lodash';
import styles from './Items';
import { Link } from 'react-router-dom';

export default function Items ({ items }) {
    console.log('-- ITEMS --', items);
    return (
        <div>
            <div className='items-header'>
                <Link to='/create-item'>Create Item</Link>
            </div>
            <div>
                { loopItems(items) }
            </div>
        </div>
    );
}

function loopItems (items) {
    if (_.isEmpty(items)) {
        return (<span>No items.</span>);
    }

    return (
        <div>
        { _.map(items, (item, index) => (
              <div key={ index } >
                    Name: { item.name } <br />
                    Password: { item.password }
              </div>
          ))
        }
        </div>
    );
}
