import { Box, Grid} from '@mui/material'
import Input from './Input'
import TodoList from './TodoList'

export default function Page(){
   
    return(
        <Grid sm={12} sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <Box>
               <Input/>
            </Box> 
            <TodoList/>
        </Grid>
    )
}