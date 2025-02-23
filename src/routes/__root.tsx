import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <div className=" min-h-screen glass-bg m-5 p-2 rounded-2xl">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
