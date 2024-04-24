"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import MuiThemeProviders from "./MuiThemeProviders";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import DashboardLayoutWrapper from "../LayoutWrapper/Dashboard/DashboardLayoutWrapper";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <DashboardLayoutWrapper>
            <MuiThemeProviders>
              <main>{children}</main>
            </MuiThemeProviders>
          </DashboardLayoutWrapper>
        </ReduxProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
