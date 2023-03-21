import Header from "@/components/Header/Header";
import TripForm from "@/components/TripForm/TripForm";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <TripForm />
    </div>
  );
}
