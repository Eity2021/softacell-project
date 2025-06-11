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
        <p>Logo</p>
        {/* Close Button */}

        {/* Navigation Items */}
        <Box sx={{ width: 250, height: "100%", p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Dashboard
          </Typography>

          <List component="">
            {routes.map((link, index) => (
              <Box key={index}>
                <ListItemButton sx={{fontSize:'18px',fontWeight:'400px'}}
                  onClick={() => (link.children ? toggleMenu(link.name) : null)}
                  component={!link.children ? Link : "div"}
                  to={!link.children ? link.path : undefined}
                >
                  {link.icon && (
                    <ListItemIcon sx={{ color: "#cfcfcf", minWidth: 32 }}>
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
                            fontSize:'14px',fontWeight:'400px'
                            // '&:hover': { backgroundColor: '#444' },
                          }}
                        >
                          {child.icon && (
                            <ListItemIcon
                              sx={{ color: "#cfcfcf", minWidth: 32 }}
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
                  style={{paddingRight: "10px" }}
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
