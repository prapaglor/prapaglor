import DescriptionCard from "@/components/DescriptionCard";
import LocationCard from "@/components/LocationCard";
import NavBar from "@/components/NavBar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <NavBar />
      <DescriptionCard />
      <LocationCard />
    </div>
  );
}
