import type { Route } from "./+types/home";
import { LandingPage } from "../landingpage/LandingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thing Hives DAM" },
    { name: "description", content: "Blazingly fast Digital Asset Management" },
  ];
}

export default function Home() {
  return <LandingPage />;
}
