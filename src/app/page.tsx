"use client";
import { MapPin, MousePointerClick, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/containers/wrapper/page-wrapper";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icon } from "@/components/common/Icon";
import { navLinks } from "@/mocks/nav-links";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchParams, setSearchParams] = useState<string>("");
  const router = useRouter();
  return (
    <PageWrapper>
      <div className="w-full h-10 md:text-sm text-[8px] bg-[#f6f7f4] flex justify-center items-center text-regular font-medium">
        <span>
          <MapPin color="#9d9da0" size={20} className="mx-1" />
        </span>{" "}
        Founded in London, UK. We respect your privacy.
        <span className="flex md:pl-12 pl-1 pr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={`star-${i}`} fill="#9d9da0" stroke="#9d9da0" size={20} className="mx-0.5 h-3 w-3 md:h-5 md:w-5" />
          ))}
        </span>
        Used by 1,000+ recruiters
      </div>
      <div className="w-full flex justify-between items-center md:px-8 px-2">
        <Link href="/">
          <Icon className="md:pt-8 pt-5" width={220} height={70} svg="nolea-logo" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="md:gap-6 gap-1 md:pt-5 -pt-2 ">
            {navLinks.map((link, i) => {
              if (link.isNested) {
                return (
                  <NavigationMenuItem key={`key_${i}`} className="hover:bg-transparent shadow-none mt-1 md:gap-4">
                    <NavigationMenuTrigger className="hover:text-primary font-medium md:text-[16px] text-[10px]  focus:bg-transparent hover:bg-white data-[active]:bg-white data-[state=open]:bg-white">
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="rounded-md shadow-none font-medium py-2 px-3 ">
                      <ul className="px-2 md:text-sm text-[10px]">
                        {link.subLinks &&
                          link.subLinks.map((subLink, i) => (
                            <li
                              key={`subLink-${i}`}
                              className="text-black hover:text-primary hover:font-bold text-nowrap cursor-pointer py-2"
                            >
                              {subLink}
                            </li>
                          ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuLink
                    key={`key_${i}`}
                    className={`${navigationMenuTriggerStyle()}  hover:text-primary cursor-pointer font-medium md:text-[16px] text-[10px] focus:bg-transparent hover:bg-white data-[active]:bg-white data-[state=open]:bg-white`}
                  >
                    {link.name}
                  </NavigationMenuLink>
                );
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="md:flex hidden gap-4 items-center pt-4">
          <div className="text-lg text-primary font-medium cursor-pointer">
            <Link href={"https://web.noleahealth.com/company-sign-in"}> Get a demo Login</Link>
          </div>
          <div>
            <Link href={"https://web.noleahealth.com/company-quick-sign-up"}>
              <Button type="button" className="bg-primary rounded-3xl font-bold h-12 px-8">
                Try it for free
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="md:pt-36 pt-16">
          <h1 className="md:text-5xl text-3xl font-bold text-center">People Search Tool:</h1>
          <h1 className="md:text-4xl text-2xl font-bold text-center">
            Find your dream candidates with <span className="text-primary">Nolea</span> Search
          </h1>
        </div>
        <div className=" flex justify-center w-full">
          <div className="relative mt-8 md:w-[600px] w-full">
            <Input
              value={searchParams}
              onChange={(e) => setSearchParams(e.target.value)}
              className="md:h-16 h-12 md:text-lg text-md"
              placeholder="Enter a keyword or job title"
            />
            <Button
              disabled={searchParams?.length === 0}
              onClick={() => {
                router.push(`/search-result?search=${searchParams}`);
              }}
              className="absolute right-0 top-0 md:h-16 h-12 md:w-36 md:text-xl text-md"
            >
              <Search size={36} /> Search{" "}
            </Button>
          </div>
        </div>
        <div className="text-center flex justify-center pt-20">
          <h3 className="md:text-xl text-md md:w-[600px]">
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
