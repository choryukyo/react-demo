import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import HeaderWithAppBar from './HeaderWithAppBar';

export default function Navigation() {

  const [showNavigation, setShowNavigation] = useState(false);
  
  const toggleNavigation = (toggle, currentViewName) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowNavigation(toggle);
  };

  const NavigationItems = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <Link href="/" onClick={toggleNavigation(false)}>
            <ListItem>
                <ListItemText primary="Pfer" />
            </ListItem>
        </Link>
        <Link href="/uketuke" onClick={toggleNavigation(false)}>
            <ListItem>
                <ListItemText primary="返済・約定変更・延滞" />
            </ListItem>
        </Link>
        <Link href="/torihiki" onClick={toggleNavigation(false)}>
            <ListItem>
                <ListItemText primary="為替取引" />
            </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
            <HeaderWithAppBar toggleNavigation={toggleNavigation} />
            <Drawer
                open={showNavigation}
                onClose={toggleNavigation(false)}>
                <NavigationItems />
            </Drawer>
        </React.Fragment>
    </div>
  );
}
