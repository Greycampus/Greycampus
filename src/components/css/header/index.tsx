"use client"; // If you're using Next.js app directory

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, MenuItem, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import { LOGO_URl } from "src/utilities/resources";

const MenuLink = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <MenuItem component="a">
        <ListItemText primary={text} sx={{ color: '#fff'}}/>
      </MenuItem>
    </Link>
  );
};


const Header = () => {
  // State to manage drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Menu items
  const navItems = [
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Box sx={{ bgcolor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {/* Top Header */}
        <AppBar position="static" sx={{ backgroundColor: "black", maxWidth: '1280px' }}>
          <Toolbar>
            {/* Logo */}
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/" passHref>
                <Image src={LOGO_URl} alt="GreyCampus Logo" width={150} height={40} priority />
              </Link>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: '24px' }}>
              {!drawerOpen && navItems.map((item) => (
                <Link key={item.name} href={item.link} passHref>
                  <Typography
                    variant="body1"
                    sx={{ marginRight: 3, color: "white", textDecoration: "none", cursor: "pointer" }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { sm: "none" }, bgcolor: '#0C868D', height: '40px', width: '40px', borderRadius: '2px' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Side Drawer for Mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} PaperProps={{
          sx: { backgroundColor: "#000", color: "#fff" }, // Black background, white text
        }}>
          <Box sx={{ width: 250, }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              {navItems.map((item) => (
                <MenuLink key={item.name} href={item.link} text={item.name} />
              ))}
            </List>
          </Box>
        </Drawer>

      </Box>
      <Divider sx={{ bgcolor: '#0C868D'}}/>
    </>
  );
};

export default Header;