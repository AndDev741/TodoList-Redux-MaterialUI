import { Box, Checkbox, List, ListItemButton, Typography } from '@mui/material';
import { useSelector, useDispatch} from'react-redux';
import { useState, useEffect } from 'react';
import Footer from './Footer';
export default function TodoList(){
    const dispatch = useDispatch();
    const todosObject = useSelector((state) => state.todos);
    const todos = todosObject.todos || [];
    const filter = useSelector((state) => state.filters.filter)
    const [checkboxStates, setCheckboxStates] = useState({});

    const handleCheckboxChange = (todoId) => {
        setCheckboxStates((prevStates) => ({
            ...prevStates,
            [todoId]: !prevStates[todoId],
        }))
        dispatch({type: 'todos/todoToggled', payload: todoId})
    }
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
    return(
        <Box sx={{ minHeight: 200, width: '100%', border: 'solid', borderWidth: '2px', borderColor: 'rgb(0, 144, 229)', borderRadius: '6px', marginTop: '15px', marginBottom: '15px' }}>
            <Typography variant='h6' color='error' sx={{margin: '6px'}}>
                {todosFilter.length === 0 ? 'None tasks with this filter' : ''}
            </Typography>
           {todosFilter.map((todo) => (
                <List key={todo.id}>
                    <ListItemButton 
                    sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='h6' sx={{textDecoration: todo.completed === true ? 'line-through' : ''}}>
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