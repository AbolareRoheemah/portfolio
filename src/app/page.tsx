import Image from "next/image";
import Jumbotron from "./components/Jumbotron";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <Jumbotron />
      </div>
    </div>
  );
}
