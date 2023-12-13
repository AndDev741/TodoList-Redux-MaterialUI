const initialState = {
    status: 'All',
    importance: []
} 

export default function filtersReducer(state = initialState, action){
    switch(action.type){
        case 'filters/statusFilterChanged': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }
        default:
            return state;
	}
}
