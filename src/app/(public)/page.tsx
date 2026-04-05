import HomeSearhBar from "@/components/homePageSearchBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LoginModal from "../../components/LoginModal";

export default function Home() {
  return (
    <div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="lg:mb-12 md:mb-6 mb-2">
          <h2 className="font-bold lg:text-5xl md:text-3xl text-xl">Learn, Whatever You Want To!</h2>
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
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="bg-transparent w-280 not-sm:w-70 rounded-md shadow shadow-zinc-700 px-4 py-3 md:px-7 md:py-6 md:text-xl">
          <div className=" grid grid-cols-1 md:grid-cols-2 ">
            <div className="space-y-4 not-lg:space-y-2 not-md:space-x-1">
              <div className="space-y-4 not-lg:space-y-2 not-md:space-x-1">
                <h2 className="lg:text-4xl md:text-3xl text-xl font-bold">Need help with</h2>
                <h2 className="lg:text-4xl md:text-3xl text-xl font-bold">Skill Development</h2>
              </div>
              <div className="">
                <span>
                  Connect with trusted experts, anytime. Get real answers, real guidance, in real time.
                </span>
              </div>
              <div className="my-8">
                <Button variant={"outline"} className="w-50 h-11 font-bold cursor-pointer">Explore Now</Button>
              </div>
            </div>
            <div>
              
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <Button variant={"outline"} className="w-60 h-13">1:1 Expert Sessions</Button>
            <Button variant={"outline"} className="w-60 h-13">Personalized Feed</Button>
            <Button variant={"outline"} className="w-60 h-13">Flexible & Affordable</Button>
            <Button variant={"outline"} className="w-60 h-13">Build Your Network</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center items-center flex-col my-15">
        <div className="bg-transparent w-280 not-sm:w-70 rounded-md md:text-xl flex flex-row">
          <h4>Courses</h4>
          <div className="ml-auto">
            <Button variant={"outline"} className="rounded-3xl">View All</Button>
          </div>
        </div>
        <div className="px-4 py-3 md:px-7 md:py-6">

        </div>
      </div>
    </div>
    
  );
}
