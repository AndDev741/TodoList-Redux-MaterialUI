import { CssBaseline, AppBar , Grid, TextField, Typography, createTheme} from '@mui/material'
import { Checklist } from '@mui/icons-material'

const theme = createTheme({})

export default function Page(){
    return(
        <>
            <CssBaseline />
            <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{mt: 2}}
            >
                
                <Typography variant='h3' align='center' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Checklist sx={{fontSize: 50, mr: 1}}/>
                    Your todo List
                </Typography>
                <Typography variant='h6' align='center'  sx= {{mb: 4}}>
                    Here you can organize all the tasks that you have in a simple way
                </Typography>
            </AppBar>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField />
                </Grid>
            </Grid>
        </>
    )
}