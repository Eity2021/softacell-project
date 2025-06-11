import { useState } from "react";
import {
  List,
  Box,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Logout from "../../image/icons/Logout.png";
import headerLogo from "../../image/logo/headerLogo.png";

export default function SideBar({ routes }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <Box>
      {/* Sidebar Drawer */}

      <Box
        sx={{
          width: 320,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          height: "100%",
        }}
      >


        {/* Navigation Items */}
        <Box sx={{ width: 250, height: "100%", p: 2 }}>
      <Box>
        <img src={headerLogo} alt="logo" />
      </Box>

          <List component="nav" sx={{fontSize:'18px',fontWeight:'400px'}}>
            {routes.map((link, index) => (
              <Box key={index} >
                <ListItemButton 
                       sx={{
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#EDF3F7',
  },
}}
                  onClick={() => (link.children ? toggleMenu(link.name) : null)}
                  component={!link.children ? Link : "div"}
                  to={!link.children ? link.path : undefined}
                >
                  {link.icon && (
                    <ListItemIcon sx={{ color: "#12a9b2",minWidth: 32 }}>
                      {link.icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={link.name} />
                  {link.children &&
                    (openMenus[link.name] ? <ChevronUp /> : <ChevronDown />)}
                </ListItemButton>

                {link.children && (
                  <Collapse
                    in={openMenus[link.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {link.children.map((child, childIndex) => (
                        <ListItemButton
                          key={childIndex}
                          component={Link}
                          to={`/${child.path}`}
                          sx={{
                            pl: 4,
                            color: "#333",
                            fontSize:'12px',fontWeight:'400px',
                            backgroundColor: 'transparent',
                           '&:hover': {
                           backgroundColor: '#EDF3F7',
                           }
                          }}
                        >
                          {child.icon && (
                            <ListItemIcon
                              sx={{ color: "#0095FF", minWidth: 32 }}
                            >
                              {child.icon}
                            </ListItemIcon>
                          )}
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
            <Box sx={{mt:'37px'}}>
              <ListItemButton sx={{fontFamily:'poppins' ,fontSize:'18px',fontWeight:'400px'}}>
                <img
                  src={Logout}
                  alt="dashboard icon"
                  style={{width:18, height:18, paddingRight: "10px" }}
                />{" "}
                Logout
              </ListItemButton>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
