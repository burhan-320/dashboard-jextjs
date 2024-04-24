"use client";
import React, { useEffect, useState } from "react";
import { ComponentShield } from "next-shield";

const DashboardLayoutWrapper = ({ children }) => {
  // state
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    checkUserRole();
  }, []);

  const checkUserRole = async () => {
    // check role through api

    setTimeout(() => {
      setShowDashboard(true);
      // toast.success("Access granted", { id: toastID });
    }, 2000);
  };

  return <ComponentShield showIf={showDashboard}> {children}</ComponentShield>;
};

export default DashboardLayoutWrapper;
