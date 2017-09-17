import _ from 'lodash';
import { types } from '../actions';
import { uuid } from '../utils';

const defaultState = {
    raw: [],
    filtered: []
};

export default function statusReducer (state = defaultState, action) {
    let items = [];

    switch (action.type) {
        case types.CREATE_ITEM:
            action.item.id = uuid();
            items = [...state.raw, action.item];

            return {
                raw: items,
                filtered: items
            };

        case types.UPDATE_ITEM:
            items = state.raw.map(item => {
                if (item.id === action.item.id) {
                    return _.extend({}, item, action.item);
                }

                return item;
            });

            return {
                raw: items,
                filtered: items
            };

        case types.DELETE_ITEM:
            items = state.raw.filter(item => item.id !== action.item.id);

            return {
                raw: items,
                filtered: items
            };

        case types.UNLOCK:
            return {
                raw: action.items,
                filtered: action.items
            };

        case types.SEARCH:
            return {
                ...state,
                filtered: state.raw.filter(item => {
                    const regex = new RegExp(action.keyword, 'igm');
                    const { name } = item;

                    if (_.isString(name)) {
                        return name.match(regex);
                    }

                    return false;
                })
            };

        case types.CLEAR_SEARCH:
            return {
                ...state,
                filtered: state.raw
            };

        default:
            return state;
    }
}
