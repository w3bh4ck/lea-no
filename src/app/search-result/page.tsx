"use client";
import { Search } from "lucide-react";
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
import ResultTable from "@/containers/result-table";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full flex justify-between items-center md:px-8 px-2">
        <Icon className="md:pt-8 pt-5" width={220} height={70} svg="nolea-logo" />
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
                    className={`${navigationMenuTriggerStyle()}  hover:text-primary cursor-pointer font-medium  focus:bg-transparent hover:bg-white data-[active]:bg-white data-[state=open]:bg-white`}
                  >
                    <span className="md:text-[16px] text-[10px]"> {link.name}</span>
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

      <div className="md:px-8 px-2">
        <div className=" flex justify-center w-full">
          <div className="relative mt-8 md:w-[600px] w-full">
            <Input className="md:h-16 h-12 md:text-lg text-md" placeholder="Enter a keyword or job title" />
            <Button className="absolute right-0 top-0 md:h-16 h-12 md:w-36 md:text-xl text-md">
              <Search size={36} /> Search{" "}
            </Button>
          </div>
        </div>
        <div className="md:px-20  md:pt-16 pt-3">
          <ResultTable />
        </div>
      </div>
    </PageWrapper>
  );
}
