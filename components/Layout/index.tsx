import * as React from 'react';
import LayoutProps from './interfaceLayout';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';

import MyLocationIcon from '@mui/icons-material/MyLocation';
import InteractionModal from '../Modal/InteractionModal';

const menuWidth = 240;

const alarms = {Name: "Jairo",   Rut: 185625583, Timestamp: '24-02-2022', Machine: "Yaer", Lat: -33.035602, Lon: -71.595247};

const Index: React.FC<LayoutProps> = ({
    children,

    }: LayoutProps) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

        return(
            <Box>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                    <Grid
                        container
                        flexDirection="row-reverse">
                            <Button color='info' onClick={handleClickOpen} endIcon={<MyLocationIcon />} />        
                            <InteractionModal
                                data={alarms}
                                open ={open}
                                onClick = {setOpen}
                            />
                    </Grid>
                    </Toolbar>
                </AppBar>
                <Menu menuWidth={menuWidth}/>
                <main>{children}</main>
            </Box>
        );

}
export default Index;