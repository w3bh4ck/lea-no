"use client";
import { Icon } from "@/components/common/Icon";
import { MapPin, Star } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    name: "Solutions",
    url: "#",
    isNested: true,
    subLinks: ["NoleaX extension", "AI Talent Search", "Recruiting CRM", "1-click Enrichment", "Messaging & Sequences"],
  },
  { name: "Pricing", url: "#", isNested: false },
  { name: "Resources", url: "#", isNested: false },
];

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
        <div className="w-full flex justify-between items-center">
          <Icon className="pt-8" width={220} height={70} svg="nolea-logo" />
          <div className="flex gap-6  text-lg pt-3">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name} className="hover:bg-transparent shadow-none mt-1">
                    {link.isNested ? (
                      <NavigationMenuTrigger className="hover:text-primary font-semibold text-[16px]  focus:bg-transparent hover:bg-white data-[active]:bg-white data-[state=open]:bg-white">
                        {link.name}
                      </NavigationMenuTrigger>
                    ) : (
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} hover:text-primary font-semibold text-[16px] focus:bg-transparent hover:bg-white data-[active]:bg-white data-[state=open]:bg-white cursor-pointer`}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    )}
                    {link.isNested && (
                      <NavigationMenuContent className="rounded-md shadow-none font-medium py-2">
                        <ul className="px-5 text-sm">
                          {link.subLinks &&
                            link.subLinks.map((subLink, i) => (
                              <li key={`subLink-${i}`} className="text-black text-nowrap cursor-pointer py-2">
                                {subLink}
                              </li>
                            ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-4 items-center pt-4">
            <div className="text-lg text-primary font-medium cursor-pointer">Get a demo Login</div>
            <div>
              <Button className="bg-primary rounded-3xl font-bold h-12 px-6">Try it for free</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
