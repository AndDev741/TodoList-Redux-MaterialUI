import { Box, Grid} from '@mui/material'
import Header from './Header'
import Input from './Input'
import TodoList from './TodoList'

export default function Page(){
   
    return(
        <Grid sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <Header/>
            <Input/>
            <TodoList/>
        </Grid>
    )
}