import Image from "next/image";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <Jumbotron />
      </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
          <div>
            <Works />
          </div>
          <div>
            <Blogs />
          </div>
    </div>
  );
}
