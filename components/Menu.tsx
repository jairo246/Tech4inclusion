import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
    cantidad: number;
}

const Menu: React.FC<interfaceMenu> = ({
    cantidad,

    }: interfaceMenu) => {

 return(
    <Grid>
        <Grid  
            container 
            spacing={2}
            direction="column">

            {menuData.map((menu) => (

                <Grid
                    ml={2}
                    my={1}
                    key={menu.name}
                    container
                    direction="row"
                    >
                        {menu.icon}
                        <Typography>
                            {menu.name}
                        </Typography>
                </Grid>
            ))}
        </Grid>
        <Grid sx={{height: "300px"}}>
            <Typography>
                Popular Tags
            </Typography>
            {listHashTags.map((tag) => (
                <Grid
                    ml={2}
                    my={1}
                    key={tag.name}
                    container
                    direction="row"
                    >
                        <Typography>
                            {tag.name}
                        </Typography>
                </Grid>
            ))}
        </Grid>
    </Grid>
 ); 
}

export default Menu;

