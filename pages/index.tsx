import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Perfil from '../components/Perfil';
import interfacePerfil from '../components/interfacePerfil';
import Menu from '../components/Menu';
import ListingsCard from '../components/ListingsCard';

const ListPerfil: interfacePerfil ={
    nombre: "Jairo",
    fecha:  "22-09-2022",
    titulo: "quiero tener sexo",
    listHashTags: [{name:"#skip",link: "link"},
                   {name:"#sport",link: "link"}],
    reaccion: 7,
    comentario: 20,
    escrito: 3
};

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function index(){

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

 return(
   <Grid
      container
      direction="row">
        <Grid
            my = {2}
            mx = {1} 
            item xs={2.5}>
          <Menu cantidad={5}/>
        </Grid>
        <Grid 
            my = {2}
            mx = {1}
            item xs={5.5}>
              <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                  <LinkTab label="Page One" href="/drafts" />
                  <LinkTab label="Page Two" href="/trash" />
                  <LinkTab label="Page Three" href="/spam" />
                </Tabs>
              </Box>
          <Perfil
            nombre= {ListPerfil.nombre}
            fecha= {ListPerfil.fecha}
            titulo= {ListPerfil.titulo}
            listHashTags= {ListPerfil.listHashTags}
            reaccion= {ListPerfil.reaccion}
            comentario= {ListPerfil.comentario}
            escrito= {ListPerfil.escrito}
            /> 
        </Grid>
        <Grid 
            my = {2}
            mx = {1}
            item xs={3.5}>
          <ListingsCard/>
        </Grid>
   </Grid>
 );
}




