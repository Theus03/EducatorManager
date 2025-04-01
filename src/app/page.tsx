import Navbar from "@/components/Navbar";
import BorderPage from "@/components/BorderPage";
import Slogan from "@/components/Slogan";
import Numbers from "@/components/Numbers";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div>
      <BorderPage/>
      <Socials />
      <Navbar />
      <Slogan/>
      <br/><br/><br/><br/><br/>
      <Numbers/>
      <About />
      <Contact />
    </div>
  );
}
