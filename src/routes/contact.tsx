import { createFileRoute } from "@tanstack/react-router";
import Contact from "../components/contact/contact";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Contact />
    </>
  );
}
