import { DataGrid } from '@mui/x-data-grid';
import { Box, Checkbox, List, ListItemButton, Typography } from '@mui/material';
import { useSelector } from'react-redux';
import { useState } from 'react';
import { CheckBox, Label, TapAndPlay } from '@mui/icons-material';
export default function TodoList(){
    const todosObject = useSelector((state) => state.todos)
    const todos = todosObject.todos || [];

    const [checkboxStates, setCheckboxStates] = useState({});
    console.log(checkboxStates)

    const handleCheckboxChange = (todoId) => {
        setCheckboxStates((prevStates) => ({
            ...prevStates,
            [todoId]: !prevStates[todoId],
        }))
    }
    return(
        <Box sx={{ height: 400, width: '100%', border: 'solid', borderWidth: '2px', borderColor: 'rgb(0, 144, 229)', borderRadius: '6px', marginTop: '15px' }}>
           {todos.map((todo) => (
                <List key={todo.id}>
                    <ListItemButton sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='h6'>
                            {todo.text}
                        </Typography>
                        <Checkbox checked={checkboxStates[todo.id] || false} onChange={() => handleCheckboxChange(todo.id)}/>
                    </ListItemButton>
                </List>
           ))}
           
        </Box>
    )
}