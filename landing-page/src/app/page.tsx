import Navbar from "@/components/navbar/Navbar";
import Hero from "@/pages/home/Hero";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2021/12/14/09/54/mountains-6870216_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure full height
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
