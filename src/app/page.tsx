import Navbar from "@/components/Navbar";
import BorderPage from "@/components/BorderPage";
import Slogan from "@/components/Slogan";
import Numbers from "@/components/Numbers";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <BorderPage/>
      <Navbar />
      <Slogan/>
      <br/><br/><br/><br/><br/>
      <Numbers/>
      <About />
    </div>
  );
}
