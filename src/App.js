import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admindash from './pages/Admindash/Admindash';
import AdminNavbar from './pages/Admindash/AdminNavbar/AdminNavbar';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Userdash from './pages/Userdash/Userdash';

function App() {
  return (
    <Grid>                              {/**   container>*/}
    <Userdash />
    <Outlet />
    </Grid>
  );
}

export default App;
