import React, { useContext, useEffect } from "react";
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import dynamic from "next/dynamic";

const DynamicMap = dynamic(
    () => {
      return import("../Mapa");
    },
    { ssr: false }
  );

//Transition Efect popUp
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  interface DataInterface {
    Name: string;
    Rut: number;
    Timestamp: string;
    Machine: string;
    Lat: number;
    Lon: number;
}

  interface interfaceGradiente{
    data: DataInterface;
    open: boolean;
    onClick: (state:boolean)=>void;
  }

  const InteractionModal: React.FC<interfaceGradiente> = ({
      data,
      open,
      onClick
      }: interfaceGradiente) => {

      const handleClose = () => {
         onClick(false);
      };
          
      return(
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Mapa de la Interacción
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                    <DynamicMap/>
            </Box>
        </Dialog>
      );
}
export default InteractionModal;