import * as React from 'react';
import interfacePerfil from './interfacePerfil';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Button } from '@mui/material';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';



const Perfil: React.FC<interfacePerfil> = ({
    nombre,
    fecha,
    titulo,
    listHashTags,
    reaccion,
    comentario,
    escrito
    }: interfacePerfil) => {

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
        container spacing={2}>
        <Grid
          my={2}
          mx={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
          <Grid container
                direction="row"
                justifyItems="center"
                alignItems="center"> 
          {listHashTags.map((hashTags) => (

              <Typography key={hashTags.name}>
                  {hashTags.name}
              </Typography>

            ))}  
          </Grid>
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
            <Button>
              Save
            </Button>
          </Grid>
     </Grid>
   </Box>
 ); 
}

export default Perfil;


