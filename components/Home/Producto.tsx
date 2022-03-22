import * as React from 'react';
import interfaceProducto from './interfaceProducto';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Button } from '@mui/material';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';



const Producto: React.FC<interfaceProducto> = ({
    nombre,
    fecha,
    titulo,
    reaccion,
    comentario,
    escrito
    }: interfaceProducto) => {

 return(
   <Box
      sx={{
          bgcolor: 'grey',
          border: "1px solid grey",
          boxShadow: 3,
          borderRadius: 3,
          p: 2,
    }}>
     <Grid  
        container spacing={2}>
        <Grid
          my={2}
          mx={2}>
          <Avatar alt="" src="" />
        </Grid>
        <Grid
            my={2}
            mx={2}>
            <Typography>
                {nombre}
            </Typography>
            <Typography>
                {fecha}
            </Typography>
        </Grid>
     </Grid>
     <Grid 
        container
        direction="column"
        justifyItems="center"
        alignItems="center">  
          <Typography>
              {titulo}
          </Typography>
     </Grid>
     <Grid
        container spacing={2}>
          <Grid item xs={1}>
              <FavoriteBorderIcon/>
          </Grid>
          <Grid item xs={2}>
            <Typography>
                {reaccion+" "} reacines
            </Typography>
          </Grid>
          <Grid item xs={1}>
              <ChatBubbleOutlineOutlinedIcon/>
          </Grid>
          <Grid item xs={4}>
                <Typography>
                    {comentario+" "}Comentarios
                </Typography>
          </Grid>
          <Grid item xs={2}>
              <Typography>
                  {escrito+" "} min red
              </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button color= "secondary">
              Save
            </Button>
          </Grid>
     </Grid>
   </Box>
 ); 
}

export default Producto;


