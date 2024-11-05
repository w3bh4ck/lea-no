"use client";
import React from "react";
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
import { Icon } from "@/components/common/Icon";
import Link from "next/link";

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

const Navbar = () => {
  return (
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
                          <li key={`subLink-${i}`} className="text-black hover:text-primary hover:font-bold text-nowrap cursor-pointer py-2">
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
        <div className="text-lg text-primary font-medium cursor-pointer">
          <Link href={"https://web.noleahealth.com/company-sign-in"}> Get a demo Login</Link>
        </div>
        <div>
          <Link href={"https://web.noleahealth.com/company-quick-sign-up"}>
            <Button type="button" className="bg-primary rounded-3xl font-bold h-12 px-6">
              Try it for free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
