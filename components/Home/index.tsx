import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Producto from './Producto';
import interfaceProducto from './interfaceProducto';
import ListingsCard from './ListingsCard';


const ListProducto: interfaceProducto ={
    nombre: "Jairo",
    fecha:  "22-09-2022",
    titulo: "quiero tener sexo",
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
          direction="row-reverse">
            <Grid 
                my = {2}
                mx = {1}
                item xs={5.5}>
              <Producto
                nombre= {ListProducto.nombre}
                fecha= {ListProducto.fecha}
                titulo= {ListProducto.titulo}
                reaccion= {ListProducto.reaccion}
                comentario= {ListProducto.comentario}
                escrito= {ListProducto.escrito}
                /> 
                <Producto
                nombre= {ListProducto.nombre}
                fecha= {ListProducto.fecha}
                titulo= {ListProducto.titulo}
                reaccion= {ListProducto.reaccion}
                comentario= {ListProducto.comentario}
                escrito= {ListProducto.escrito}
                /> 
            </Grid>
      </Grid>
 );
}