import { Box, Checkbox, List, ListItemButton, Typography} from '@mui/material';
import { useSelector, useDispatch} from'react-redux';
import { useEffect, useState} from 'react';
import Footer from './Footer';
export default function TodoList(){
    const dispatch = useDispatch();
    const todosObject = useSelector((state) => state.todos);
    const todos = todosObject.todos || [];
    const filter = useSelector((state) => state.filters.filter);
    const [checkboxStates, setCheckboxStates] = useState({});
    //logic to change the checkbox state
    const handleCheckboxChange = (todoId) => {
        setCheckboxStates((prevStates) => ({
            ...prevStates,
            [todoId]: !prevStates[todoId],
        }))
        dispatch({type: 'todos/todoToggled', payload: todoId});
    }
    //logic of filters
    let todosFilter;
    switch(filter){
        case 'all':
            todosFilter = todos;
            break;
        case 'important':
            todosFilter = todos.filter(todo => todo.importance === 'important');
            break;
        case 'normal':
            todosFilter = todos.filter(todo => todo.importance === 'normal');
            break;
        case 'irrelevant':
            todosFilter = todos.filter(todo => todo.importance === 'irrelevant');
            break;
        case 'completed':
            todosFilter = todos.filter(todo => todo.completed === true);
            break;
        case 'remaining':
            todosFilter = todos.filter(todo => todo.completed === false);
            break;
        default:
            todosFilter = todos;
    }
    //logic to delete todos
    const oneMinute = 60000
    useEffect(() => {
        const deleteTimeout = setTimeout(() => {
            const completedTodos = todos.filter(todo => todo.completed);
            if(completedTodos.length > 0){
                const deleteID = completedTodos[0].id;
                dispatch({type: 'todos/deletedTodos', payload: deleteID});
            }
        }, oneMinute)
        return () => clearTimeout(deleteTimeout);
    }, [todos, dispatch]);
    return(
        <Box sx={{ minHeight: 400, width: '100%', border: 'solid', borderWidth: '2px', borderColor: 'rgb(0, 144, 229)', borderRadius: '6px', marginTop: '15px', marginBottom: '15px' }}>
            <Typography variant='h6' color='error' sx={{ margin: '6px'}}>
                {todosFilter.length === 0 ? 'None tasks with this filter' : null}
            </Typography>
           {todosFilter.map((todo) => (
                <List key={todo.id} sx={{margin: {
                    xs: '-6px',
                    sm: '0px'
                }}}>
                    <ListItemButton sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='h5' sx={{textDecoration: todo.completed === true ? 'line-through' : ''}}>
                            {todo.text}
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                           <Box sx={{textDecoration: todo.completed === true ? 'line-through' : ''}}>
                                <Typography variant='h6'>{todo.importance}</Typography>
                           </Box>
                            <Box>
                                <Checkbox 
                                checked={todo.completed === true ? true : false} 
                                onChange={() => handleCheckboxChange(todo.id)}
                                
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}
                                />
                            </Box>
                        </Box>
                    </ListItemButton>
                </List>
           ))}
           <Footer/>
        </Box>
    )
}