import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/portfolio/portfolio";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
