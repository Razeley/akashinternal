import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StorageIcon from '@mui/icons-material/Storage';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PublicIcon from '@mui/icons-material/Public';
import AttractionsIcon from '@mui/icons-material/Attractions';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BadgeIcon from '@mui/icons-material/Badge';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FoundationIcon from '@mui/icons-material/Foundation';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';




export const mainListItems2 = (
  [
    {
        id: 0,
        icon: <CollectionsBookmarkIcon />, 
        label: 'Houses Index',
        route: 'HouseIndex',
    },
    {
        id: 1,
        icon: <AssignmentIcon />,
        label: 'Warranty',
        route: 'WarrantyTable',
    },
    {
        id: 2,
        icon: <HomeWorkIcon  />,
        label: 'House Info',
        route: 'House',
    },
    {
        id: 3,
        icon: <HomeSharpIcon />,
        label: 'Inspections',
        route: 'InspectionTable',
    },
    {
      id: 4,
      icon: <FoundationIcon   />,
      label: 'Basement Insp',
      route: 'InspectionTable',
  },
    {
        id: 5,
        icon: <MonetizationOnIcon />,
        label: 'Sales ',
        route: 'HouseSales',
    },
    {
        id: 6,
        icon: <PublicIcon/>,
        label: 'Customers Realtors',
        route: 'CrudTables',
    },
    {
      id: 7,
      icon: <ContactPageIcon />, 
      label: 'Contacts',
      route: 'Contacts',
  },
  {
      id: 8,
      icon: <BadgeIcon />,
      label: 'Akash Staff',
      route: 'StaffTable',
  },

  {
      id: 9,
      icon: <PeopleIcon />,
      label: 'Account',
      route: 'ChangePassword',
  },
]);

export const secondaryListItems2 = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);