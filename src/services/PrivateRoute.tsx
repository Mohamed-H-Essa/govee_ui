import React from "react";
import { RouteProps, Route, Navigate } from "react-router-dom";

// Define the Props interface
interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  roles?: string[];
}
