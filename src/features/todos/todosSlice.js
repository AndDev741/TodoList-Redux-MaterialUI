const initialState = {
    todos: [
        {id: 0, text: 'Learn React', completed: true},
        {id: 1, text: 'Learn Redux', completed: false, importance: 'important'},
        {id: 2, text: 'Finish the todo list', completed: false, importance: 'normal'}
    ]
}

function nextTodoId(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

export default function appReducer(state = initialState, action) {
    switch(action.type){
        case 'todos/todoAdded': {
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: nextTodoId(state.todos),
                        text: action.payload[0],
                        importance: action.payload[1],
                        completed: false
					}
				]
			}
		}
        case 'todos/todoToggled': {
            return{
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id !== action.payload){
                        return todo
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        }
        default:
            return state;
    }
}

