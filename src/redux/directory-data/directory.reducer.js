import { sections } from '../../assets';
// sections is specific parts of the whole chunk of shop data we have
const INITIAL_STATE = {
    sections: sections
}

function directoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
export default directoryReducer;