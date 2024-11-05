"use client";
import Navbar from "@/containers/navigation/navbar";
import { MapPin, MousePointerClick, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/containers/wrapper/page-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-fill h-10 bg-[#f6f7f4] flex justify-center items-center text-regular font-medium">
        <span>
          <MapPin color="#9d9da0" size={20} className="mx-1" />
        </span>{" "}
        Founded in London, UK. We respect your privacy.
        <span className="flex pl-12 pr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={`star-${i}`} fill="#9d9da0" stroke="#9d9da0" size={20} className="mx-0.5" />
          ))}
        </span>
        Used by 1,000+ recruiters
      </div>
      <div className="px-8">
        <Navbar />
        <div className="pt-36">
          <h1 className="text-5xl font-bold text-center">People Search Tool:</h1>
          <h1 className="text-4xl font-bold text-center">
            Find your dream candidates with <span className="text-primary">Nolea</span> Search
          </h1>
        </div>
        <div className=" flex justify-center w-full">
          <div className="relative mt-8 md:w-[600px] w-full">
            <Input className="h-16 text-lg" placeholder="Enter a keyword or job title" />
            <Button className="absolute right-0 top-0 h-16 md:w-36 text-xl">
              <Search size={36} /> Search{" "}
            </Button>
          </div>
        </div>
        <div className="text-center flex justify-center pt-20">
          <h3 className="text-xl md:w-[600px]">
            {" "}
            Automate outreach and streamline recruiting with our AI-powered CRM for faster connections and responses.
          </h3>
        </div>
        <div className="pt-8 flex justify-center">
          <Link href={"https://web.noleahealth.com/company-quick-sign-up"}>
            <Button className="bg-primary rounded-3xl font-semibold h-12 px-8 text-lg">
              Get Started <MousePointerClick className="animate-pulse animate-duration-500 scale-125" />{" "}
            </Button>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
