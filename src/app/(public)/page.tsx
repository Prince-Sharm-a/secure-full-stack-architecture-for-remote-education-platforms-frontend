import HomeSearhBar from "@/components/homePageSearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LoginModal from "./LoginModal";

export default function Home() {
  return (
    <div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-12">
        <div className="lg:mb-12 md:mb-6 mb-2">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-xl">Learn, Whatever You Want To!</h1>
        </div>
        <div className="lg:mb-6 md:mb-4 mb-3">
          <HomeSearhBar />
        </div>
        <div className="space-x-2">
          <Button variant={"outline"}>Neet</Button>
          <Button variant={"outline"}>Jee</Button>
          <Button variant={"outline"}>Skill Development</Button>
        </div>
      </div>
      <div>
        <input  />
      </div>
    </div>
    
  );
}
