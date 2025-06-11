// import { useState } from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import { ChevronDown, ChevronUp } from "lucide-react";
import {
  // Drawer,
  // AppBar,
  // Toolbar,
  // Typography,
  // IconButton,
  // List,
  // ListItemButton,
  // ListItemText,
  // Collapse,
  Box,
  // CssBaseline,
  // Divider,
} from "@mui/material";


// import routes from "../../routes";

// const drawerWidth = 280;

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [openMenus, setOpenMenus] = useState({});

  // const toggleMenu = (name) => {
  //   setOpenMenus((prev) => ({
  //     ...prev,
  //     [name]: !prev[name],
  //   }));
  // };

  // const renderRoutes = (routes) =>
  //   routes.map((route, index) => (
  //     <Route key={index} path={route.path} element={route.element}>
  //       {route.children && renderRoutes(route.children)}
  //     </Route>
  //   ));

  // const drawerContent = (
  //   <Box sx={{ width: drawerWidth, p: 2 }}>
  //     <Typography variant="h5" align="center" gutterBottom>
  //       E-Commerce
  //     </Typography>
  //     <Divider sx={{ mb: 2 }} />
  //     <List>
  //       {routes.map((link, index) => (
  //         <Box key={index}>
  //           <ListItemButton
  //             component={Link}
  //             to={link.path}
  //             onClick={() => link.children && toggleMenu(link.name)}
  //           >
  //             <ListItemText primary={link.name} />
  //             {link.children &&
  //               (openMenus[link.name] ?    <ChevronUp className="w-4 h-4" /> :  <ChevronDown className="w-4 h-4" />)}
  //           </ListItemButton>

  //           {link.children && (
  //             <Collapse in={openMenus[link.name]} timeout="auto" unmountOnExit>
  //               <List component="div" disablePadding sx={{ pl: 4 }}>
  //                 {link.children.map((child, childIndex) => (
  //                   <ListItemButton
  //                     key={childIndex}
  //                     component={Link}
  //                     to={`/${child.path}`}
  //                     sx={{ pl: 2 }}
  //                   >
  //                     <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
  //                       {child.icon && <span>{child.icon}</span>}
  //                       <ListItemText primary={child.name} />
  //                     </Box>
  //                   </ListItemButton>
  //                 ))}
  //               </List>
  //             </Collapse>
  //           )}
  //         </Box>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      dfsdfsfsdf
      {/* <CssBaseline />

      {/* AppBar */}
      {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setIsOpen(!isOpen)}
            sx={{ mr: 2, display: { md: "none" } }}
          > */}
            {/* <MenuIcon /> */}
          {/* </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar> */}

      {/* Desktop Drawer */}
      {/* <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
        open
      >
        {drawerContent}
      </Drawer> */}

      {/* Mobile Drawer */}
      {/* <Drawer
        variant="temporary"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        {drawerContent}
      </Drawer> */}

      {/* Main Content */}
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>{renderRoutes(routes)}</Routes>
      </Box>  */}
      dsfsdfsdfsd
    </Box>
  );
}
