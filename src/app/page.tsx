"use client";
import Navbar from "@/containers/navigation/navbar";
import { MapPin, Star } from "lucide-react";

export default function Home() {
  return (
    <main>
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
      </div>
    </main>
  );
}
