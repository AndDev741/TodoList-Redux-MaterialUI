import { Box,Typography } from "@mui/material";
import { Checklist } from '@mui/icons-material';
export default function Header() {
  
    return(
        <Box>
            <Typography variant='h3' align='center' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Checklist sx={{fontSize: 50, mr: 1}}/>
                    Your todo List
            </Typography>
            <Typography variant='h6' align='center'  sx= {{mb: 4}}>
                    Here you can organize all the tasks that you have in a simple way
            </Typography>
        </Box>
    )
}