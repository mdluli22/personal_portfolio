import Interests from "../app/interests/interests";
import LandingPage from "../app/landingpage/landingpage";
import Projects from "./projects/projects";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <Interests />
      <Projects />
    </main>
  );
}