"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Siderbar/Sidebar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback/ErrorFallback";

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <Sidebar />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
          </ErrorBoundary>
        </Box>
      </Box>
    </>
  );
};
export default DashboardLayout;
