import { useSelector } from "react-redux";
import { Box, Divider, Typography, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Footer(){
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('all')
    const todosObject = useSelector((state) => state.todos);
    const todos = todosObject.todos || [];
    const REMAININGTODOS = () => {
        const uncompletedTodos = todos.filter(todo => !todo.completed);
        return uncompletedTodos.length;
    }
    let todosRemaining = REMAININGTODOS()

    const handleOption = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        dispatch({type: 'filters/statusFilterChanged', payload: newFilter})
    }
    return(
        <Box>
            <Divider/>
            <Box sx={{margin : 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant='p'>Todos remaining: {todosRemaining}</Typography>
                <FormControl variant="standard">
                    <InputLabel id='filter'>Filter</InputLabel>
                    <Select
                    labelId="filter"
                    id='filter'
                    sx={{width: '145px'}}
                    value={filter}
                    onChange={handleOption}
                    >
                        <MenuItem value = 'all'>All</MenuItem>
                        <MenuItem value = 'important'>Important</MenuItem>
                        <MenuItem value = 'normal'>Normal</MenuItem>
                        <MenuItem value = 'irrelevant'>Irrelevant</MenuItem>
                        <MenuItem value = 'completed'>Completed</MenuItem>
                        <MenuItem value = 'remaining'>Remaining</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            
        </Box>
        
    )
    
} 