function loadState(){
    try {
        const serializedState = localStorage.getItem('reduxState');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined;
    }
}

function saveState(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    }catch(err){
        console.log(err)
    }
}

const initialState = loadState() || {
    todos: [
        {id: 0, text: 'Learn React', completed: true, importance: 'important'},
        {id: 1, text: 'Learn Redux', completed: false, importance: 'important'},
        {id: 2, text: 'Learn GO', completed: false, importance: 'irrelevant'}
    ]
}

function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

export default function appReducer(state = initialState, action) {
    switch(action.type){
        case 'todos/todoAdded': {
			const newState = {
				...state,
				todos: [
					...state.todos,
					{
						id: nextTodoId(state.todos),
                        text: action.payload[0],
                        importance: action.payload[1],
                        completed: false
					},
				],
			};
            saveState(newState);
            return newState;
		}
        case 'todos/todoToggled': {
            return{
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id !== action.payload){
                        return todo;
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        }
        case 'todos/deletedTodos': {
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            }
        }
        default:
            return state;
    }
}

