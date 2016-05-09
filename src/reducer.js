import {setEntries, next, vote, INITIAL_STATE} from './core.js';

export default function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
            break;
        case 'VOTE':
            return state.update(
                'vote',
                voteState => vote(voteState, action.entry)
            );
            break;
        case 'NEXT':
            return next(state);
            break;
        default:
            return state;
    }
}
