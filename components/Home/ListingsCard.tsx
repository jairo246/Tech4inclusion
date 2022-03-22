import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const listenData=[
    {name:"Free Website Speed Monitoring with Websu",
    type:"product"},

    {name:"Short URL for Stack Overflow profiles | stk.so",
    type:"product"},

    {name:"Need a lady speaker for an online session for Womens Day '22",
    type:"collabs"},

    {name:"A JS newsletter that 72k developers love",
    type:"education"}
];

export default function ListingsCard() {

 return(
   <Box
      sx={{
          bgcolor: 'white',
          border: "1px solid grey",
          boxShadow: 3,
          borderRadius: 3,
          p: 2,
    }}>
     <Grid
        my = {1}
        mx = {1}  
        container 
        spacing={2}
        direction="column">

            {listenData.map((listen) => (

            <Grid
                key={listen.name}
                container
                direction="column"
                >
                    <Typography>
                        {listen.name}
                    </Typography>
                    <Typography>
                        {listen.type}
                    </Typography>
            </Grid>
        ))} 
     </Grid>
   </Box>
 ); 
}
