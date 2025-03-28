import Navbar from "@/components/Navbar";
import BorderPage from "@/components/BorderPage";
import Slogan from "@/components/Slogan";

export default function Home() {
  return (
    <div className="w-screen">
      <BorderPage/>
      <Navbar />
      <Slogan/>
    </div>
  );
}
