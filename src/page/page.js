import { Box, Grid, TextField, Typography, Button} from '@mui/material'
import TodoList from './TodoList'



export default function Page(){
    return(
        <Grid sm={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <Box sx={{width: 600, display: 'flex', alignItems: 'center'}}>
                <TextField label="Your Task" fullWidth/>
                <Button variant="outlined" sx={{marginLeft: '15px'}}>Add task</Button>
            </Box> 
            <TodoList/>
        </Grid>
    )
}