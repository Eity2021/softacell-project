import { Routes, Route } from "react-router-dom";

import { Toolbar, Box } from "@mui/material";
import SideBar from "./SideBar";
import Header from "./Header";
import routes from "../../routes";
import CustomContainer from "../../components/customContainer/CustomContainer";

export default function Navbar() {
  const renderRoutes = (routes) =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  return (
    <CustomContainer>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <SideBar routes={routes}></SideBar>
        {/* Main Content */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
          }}
        >
          <Header></Header>

          <Routes>{renderRoutes(routes)}</Routes>
        </Box>
      </Box>
    </CustomContainer>
  );
}
