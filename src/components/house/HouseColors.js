import React, { useState, useEffect, }from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';

import Typography from '@mui/material/Typography';



const HouseColors = () => {
    const [ roofData, setRoofData ] = useState([]);
    const [ verhanda, setVerhanda ] = useState([]);
    const [ wallsPrimary, setWallsPrimary ] = useState([]);
    const [ brickStone, setBrickStone ] = useState([]);
    const [ wallsSecondary, setWallsSecondary ] = useState([]);
    const [ trim, setTrim ] = useState([]);
    const [ crezon, setCrezon ] = useState([]);
    const [ soffitFascia, setSoffitFascia ] = useState([]);
    const [ corners, setCorners ] = useState([]);
    const [ frontDoor, setFrontDoor ] = useState([]);
    const [ post, setPost ] = useState([]);
    const [ garageDoor, setGarageDoor ] = useState([]);
    const [ railing, setRailing ] = useState([]);
    const [ laminate, setLaminate ] = useState([]);
    const [ tile, setTile ] = useState([]);
    const [ vinyl, setVinyl ] = useState([]);
    const [ carpet, setCarpet ] = useState([]);
    const [ backsplash, setBacksplash ] = useState([]);
    const [ cabinets, setCabinets ] = useState([]);
    const [ counters, setCounters ] = useState([]);


useEffect(()=> {
        loadLaminateData();
        loadTileData();
        loadVinylData();
        loadCarpetData();
        loadBacksplashData();
        loadCabinetsData();
        loadCountersData();
        loadRoofData();
        loadVerhanda();
        loadWallsPrimary();
        loadBrickStone();
        loadWallsSecondary();
        loadTrim();
        loadCrezon();
        loadSoffitFascia();
        loadCorners();
        loadFrontDoor();
        loadPost();
        loadGarageDoor();
        loadRailing();
      }, []);
        const loadRoofData = async () => {
          return await axios
          .get('/ext_roof')
          .then((response) => setRoofData(response.data));
        };
        const loadVerhanda = async () => {
            return await axios
            .get('/ext_verhanda')
            .then((response) => setVerhanda(response.data));
          };
          const loadWallsPrimary = async () => {
            return await axios
            .get('/ext_wallPrimary')
            .then((response) => setWallsPrimary(response.data));
          };
          const loadBrickStone = async () => {
            return await axios
            .get('/ext_brickStone')
            .then((response) => setBrickStone(response.data));
          };
          const loadWallsSecondary = async () => {
            return await axios
            .get('/ext_wallSecondary')
            .then((response) => setWallsSecondary(response.data));
          };
          const loadTrim = async () => {
            return await axios
            .get('/ext_trim')
            .then((response) => setTrim(response.data));
          };
          const loadCrezon = async () => {
            return await axios
            .get('/ext_crezon')
            .then((response) => setCrezon(response.data));
          };
          const loadSoffitFascia = async () => {
            return await axios
            .get('/ext_soffitFascia')
            .then((response) => setSoffitFascia(response.data));
          };
          const loadCorners = async () => {
            return await axios
            .get('/ext_corners')
            .then((response) => setCorners(response.data));
          };
          const loadFrontDoor = async () => {
            return await axios
            .get('/ext_frontDoor')
            .then((response) => setFrontDoor(response.data));
          };
          const loadPost = async () => {
            return await axios
            .get('/ext_post')
            .then((response) => setPost(response.data));
          };
          const loadGarageDoor = async () => {
            return await axios
            .get('/ext_garageDoor')
            .then((response) => setGarageDoor(response.data));
          };
          const loadRailing = async () => {
            return await axios
            .get('/ext_railing')
            .then((response) => setRailing(response.data));
          };
          const loadLaminateData = async () => {
            return await axios
            .get('/int_laminate')
            .then((response) => setLaminate(response.data));
          };
          const loadTileData = async () => {
            return await axios
            .get('/int_tile')
            .then((response) => setTile(response.data));
          };
          const loadVinylData = async () => {
            return await axios
            .get('/int_vinyl')
            .then((response) => setVinyl(response.data));
          };
          const loadCarpetData = async () => {
            return await axios
            .get('/int_carpet')
            .then((response) => setCarpet(response.data));
          };
          const loadBacksplashData = async () => {
            return await axios
            .get('/int_backsplash')
            .then((response) => setBacksplash(response.data));
          };
          const loadCabinetsData = async () => {
            return await axios
            .get('/int_cabinets')
            .then((response) => setCabinets(response.data));
          };
          const loadCountersData = async () => {
            return await axios
            .get('/int_counters')
            .then((response) => setCounters(response.data));
          };

    return(
        <Box           
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
//        width: '30%'
      }} >
        <form  >
        <Grid container  sx={{ }} >
            <Grid item xs={12} lg={12} sx={{width: '100%',  }} >
            <Typography id="modal-modal-title" variant="h6" component="h6">
                    Interior
                    </Typography>
                    <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Laminate"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='laminate'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {laminate.length > 0 && laminate.map(laminate => {
           return <option  key={laminate.int_laminate_No} 
          value={laminate.int_laminate_No}>  
          {laminate.int_laminate_color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Verhanda Skirt"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='customerNo'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {tile.length > 0 && tile.map(tile => {
           return <option  key={tile.int_tile_No} 
          value={tile.int_tile_No}>  
          {tile.int_tile_color}         
           </option>;  
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Vinyl"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='vinyl'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {vinyl.length > 0 && vinyl.map(vinyl => {
           return <option  key={vinyl.int_vinyl_No} 
          value={vinyl.int_vinyl_No}>  
          {vinyl.int_vinyl_color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Carpet"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='carpet'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {carpet.length > 0 && carpet.map(carpet => {
           return <option  key={carpet.int_carpet_No} 
          value={carpet.int_carpet_No}>  
          {carpet.int_carpet_color}         
           </option>;  
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Backsplash"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='backsplash'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {backsplash.length > 0 && backsplash.map(backsplash => {
           return <option  key={backsplash.int_backsplash_No} 
          value={backsplash.int_backsplash_No}>  
          {backsplash.int_backsplash_color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Cabinets"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='cabinets'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {cabinets.length > 0 && cabinets.map(cabinets => {
           return <option  key={cabinets.int_cabinets_No} 
          value={cabinets.int_cabinets_No}>  
          {cabinets.int_cabinets_color}         
           </option>;  
        })} 
          </Select>
                </Stack>
                <TextField
                id="outlined-read-only-input"
                defaultValue="Counters"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='counters'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {counters.length > 0 && counters.map(counters => {
           return <option  key={counters.int_counters_No} 
          value={counters.int_counters_No}>  
          {counters.int_counters_color}         
           </option>;  
        })} 
          </Select>
            <Typography id="modal-modal-title" variant="h6" component="h6">
                    Exterior
                    </Typography> 
        <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Roof"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='customerNo'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {roofData.length > 0 && roofData.map(roofData => {
           return <option  key={roofData.ext_roof_No} 
          value={roofData.ext_roof_No}>  
          {roofData.ext_roof_Color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Verhanda Skirt"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='customerNo'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {verhanda.length > 0 && verhanda.map(verhanda => {
           return <option  key={verhanda.ext_verhanda} 
          value={verhanda.ext_verhanda}>  
          {verhanda.ext_verhanda_Color}         
           </option>; 
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Walls-Primary"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='wallsPrimary'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {wallsPrimary.length > 0 && wallsPrimary.map(wallsPrimary => {
           return <option  key={wallsPrimary.ext_wall_primary_No} 
          value={wallsPrimary.ext_wall_primary_No}>  
          {wallsPrimary.ext_wall_primary_Color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Brick/Stone"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='brickStone'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {brickStone.length > 0 && brickStone.map(brickStone => {
           return <option  key={brickStone.ext_brickStone_No} 
          value={brickStone.ext_brickStone_No}>  
          {brickStone.ext_brickStone_Color}         
           </option>; 
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Walls-Secondary"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='wallsSecondary'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {wallsSecondary.length > 0 && wallsSecondary.map(wallsSecondary => {
           return <option  key={wallsSecondary.ext_wall_secondary_No} 
          value={wallsSecondary.ext_wall_secondary_No}>  
          {wallsSecondary.ext_wall_secondary_Color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Trim"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='trim'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {trim.length > 0 && trim.map(trim => {
           return <option  key={trim.ext_trim_No} 
          value={trim.ext_trim_No}>  
          {trim.ext_trim_Col}         
           </option>; 
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Crezon"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='crezon'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {crezon.length > 0 && crezon.map(crezon => {
           return <option  key={crezon.ext_crezon_No} 
          value={crezon.ext_crezon_No}>  
          {crezon.ext_crezon_Color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Soffit/Fascia"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='soffitFascia'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {soffitFascia.length > 0 && soffitFascia.map(soffitFascia => {
           return <option  key={soffitFascia.ext_soffitFascia_No} 
          value={soffitFascia.ext_soffitFascia_No}>  
          {soffitFascia.ext_soffitFascia_Col}         
           </option>; 
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Corners"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='corners'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {corners.length > 0 && corners.map(corners => {
           return <option  key={corners.ext_corners_No} 
          value={corners.ext_corners_No}>  
          {corners.ext_corners_Color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Front Door"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='frontDoor'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {frontDoor.length > 0 && frontDoor.map(frontDoor => {
           return <option  key={frontDoor.ext_frontDoor_No} 
          value={frontDoor.ext_frontDoor_No}>  
          {frontDoor.ext_frontDoor_Col}         
           </option>; 
        })} 
          </Select>
                </Stack>
                <Stack direction='row'>
         <TextField
                id="standard-basic"
                defaultValue="Post"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
            <Select
            name='post'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {post.length > 0 && post.map(post => {
           return <option  key={post.ext_post_No} 
          value={post.ext_post_No}>  
          {post.ext_post_Color}         
           </option>; 
        })} 
          </Select>
            <TextField
                id="outlined-read-only-input"
                defaultValue="Garage Door"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
                <Select
            name='garageDoor'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {garageDoor.length > 0 && garageDoor.map(garageDoor => {
           return <option  key={garageDoor.ext_garageDoor_No} 
          value={garageDoor.ext_garageDoor_No}>  
          {garageDoor.ext_garageDoor_Color}         
           </option>; 
        })} 
          </Select>
                </Stack>
          <Stack direction='row' >
          <TextField
                id="outlined-read-only-input"
                defaultValue="Railing"
                sx={{width:'20%'}}
                InputProps={{
                readOnly: true,
                 }}
    />
          <Select
            name='railing'
            id='customerNo'
            sx={{width:'30%'}}
            size="small"
            native

          ><option>Select</option> 
          {railing.length > 0 && railing.map(railing => {
           return <option  key={railing.ext_railing_No} 
          value={railing.ext_railing_No}>  
          {railing.ext_railing_Color}         
           </option>; 
        })} 
          </Select>
            <Button type="submit"
            sx={{
                width: '20%',
                 height: 55,
            }} variant="contained">Update</Button>

           </Stack>  
            </Grid>
            </Grid>
            </form>
{/**            {!!snackbar && (       
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}    */}
        </Box>
    )

}

export default HouseColors;