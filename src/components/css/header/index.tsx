"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { LOGO_URl } from "src/utilities/resources";

type MenuLinkProps = {
  href: string;
  text: string;
};

const MenuLink: React.FC<MenuLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <MenuItem component="a">
        <ListItemText
          primary={text}
          sx={{
            color: "#fff",
            fontSize: "18px",
            fontFamily: "Poppins, sans-serif",
          }}
        />
      </MenuItem>
    </Link>
  );
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Box
        sx={{
          bgcolor: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "black", maxWidth: "1280px" }}
        >
          <Toolbar>
            {/* Logo Fix */}
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/" passHref>
                <a>
                  <Image
                    src={LOGO_URl}
                    alt="GreyCampus Logo"
                    width={150}
                    height={40}
                    priority
                  />
                </a>
              </Link>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "24px" }}>
              {!drawerOpen &&
                navItems.map((item) => (
                  <Link key={item.name} href={item.link} passHref>
                    <Typography
                      component="a"
                      sx={{
                        marginRight: 3,
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                      }}
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
              sx={{
                display: { sm: "none" },
                bgcolor: "#0C868D",
                height: "40px",
                width: "40px",
                borderRadius: "2px",
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Side Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: { backgroundColor: "#000", color: "#fff" },
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {navItems.map((item) => (
                <MenuLink key={item.name} href={item.link} text={item.name} />
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      <Divider sx={{ bgcolor: "#0C868D" }} />
    </>
  );
};

export default Header;
