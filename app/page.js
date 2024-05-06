import Image from "next/image";
import Profile from "./profile/page";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main >
      <Hero/>
      <Profile/>
   </main>
  );
}
