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

export const mainListItems = (
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
            label: 'House Information',
            route: 'House',
        },
        {
            id: 3,
            icon: <FoundationIcon />,
            label: 'Inspections',
            route: 'InspectionTable',
        },
        {
            id: 4,
            icon: <MonetizationOnIcon />,
            label: 'Sales ',
            route: 'HouseSales',
        },
        {
            id: 5,
            icon: <PeopleIcon />,
            label: 'Customers ',
            route: 'CustomerTable',
        },
        {
            id: 6,
            icon: <ContactPageIcon />, 
            label: 'Realtors',
            route: 'RealtorTable',
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
          route: 'AdminStaff',
      },
      {
          id: 9,
          icon: <HomeWorkIcon  />,
          label: 'Enter something',
          route: 'House',
      },
      {
          id: 10,
          icon: <PeopleIcon />,
          label: 'Account',
          route: 'ChangePassword',
      },
    ]);

