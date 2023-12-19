import { Box, FormControl, InputLabel,TextField, Button, Select, MenuItem} from '@mui/material';
import { useDispatch } from'react-redux';
import { useState } from "react";

export default function Input(){
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [option, setOption] = useState('')
    function submitTodoKeyDown(e){
        if(e.key === 'Enter' && text.length > 0){
            dispatch({type: 'todos/todoAdded', payload: [text, option]});
            setText('');
            setOption('');
        } else{
            return
        }
    }
    function submitTodo(){
        if(text.length > 0){
            dispatch({type: 'todos/todoAdded', payload: [text, option]});
            setText('');
            setOption('');
        } else {
            return;
        }
    }
    
    function handleChange(e){
        setText(e.target.value);
    }

    function handleOption(e){
        setOption(e.target.value)
    }
    return(
        <Box sx={{maxWidth: 600, width: '100%', display: 'flex', alignItems: 'center'}}>
            <TextField 
            value={text}
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={submitTodoKeyDown}
            label="Your Task" 
            sx={{width: {
                xs: '130%',
                sm: '800px'
              }}}/>
              <FormControl sx={{width: '80%' ,marginLeft: '15px'}}>
                <InputLabel id='selection'>Importance</InputLabel>
                <Select
                labelId='selection'
                id='selection'
                label='Importance'
                value={option}
                onChange={handleOption}
                displayEmpty
                color='primary'
                sx={{ width:'100%'}}
                >
                    <MenuItem value='important'>Important</MenuItem>
                    <MenuItem value='normal'>Normal</MenuItem>
                    <MenuItem value='irrelevant'>Irrelevant</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" 
            size='large'
            sx={{marginLeft: '15px', height: '55px'}} 
            onClick={submitTodo}>Add</Button>  
        </Box>
    )
}