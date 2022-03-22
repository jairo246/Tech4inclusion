import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';

import InboxIcon from '@mui/icons-material/Inbox';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import KeyboardVoiceTwoToneIcon from '@mui/icons-material/KeyboardVoiceTwoTone';


const menuData=[
    {icon: <HomeTwoToneIcon/>,name:"Home"},
    {icon: <TextSnippetTwoToneIcon/>,name:"Listings"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"Postcasts"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"Videos"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"Tags"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"FAQ"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"DEV Shop"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"Sponsors"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"About"},
    {icon: <KeyboardVoiceTwoToneIcon/>,name:"Contact"}
];

const listHashTags=[{name:"#skip",link: "link"},{name:"#sport",link: "link"},{name:"#flow",link: "link"},
                    {name:"#next",link: "link"},{name:"#max",link: "link"},{name:"#home",link: "link"},
                    {name:"#sick",link: "link"},{name:"#min",link: "link"},{name:"#ball",link: "link"},
                    {name:"#water",link: "link"},{name:"#tag",link: "link"},{name:"#one",link: "link"},
                    {name:"#sits",link: "link"},{name:"#table",link: "link"},{name:"#top",link: "link"}
];

interface interfaceMenu{
    menuWidth: number;
}

const Menu: React.FC<interfaceMenu> = ({
    menuWidth,
    }: interfaceMenu) => {

 return(
    <Drawer
        sx={{
          width: menuWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: menuWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuData.map((menu, index) => (
            <ListItem button key={menu.name}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
 ); 
}

export default Menu;

