"use client";
import ProfileInitials from "@/components/common/profile-initials";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HealthProfessional, healthProfessionals } from "@/mocks/mocks";
import { Briefcase, Hospital, Mail, MapPin, PhoneCall } from "lucide-react";
import { useState } from "react";
import SideDrawerWrapper from "./side-drawer-wrapper";
import { Button } from "@/components/ui/button";

const tableHeaders = ["Contact Name", "Contact Info", "Job Title", "Company Name", "Location"];

const ResultTable = () => {
  const [activeProfile, setActiveProfile] = useState<HealthProfessional | null>(null);
  return (
    <div className="w-full border  rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="font-semibold text-slate-900 hover:bg-red-500">
            {tableHeaders.map((header, i) => (
              <TableHead key={`key_${i}`} className="w-[100px] font-bold text-slate-950 text-md">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {healthProfessionals.map((professional) => (
            <TableRow onClick={() => setActiveProfile(professional)} key={`key_${professional.id}`} className="cursor-pointer">
              <TableCell className="font-medium flex gap-4 ">
                <ProfileInitials name={`${professional?.firstName} ${professional?.lastName}`} />{" "}
                <span className="flex items-center text-nowrap">
                  {professional?.firstName} {professional?.lastName}
                </span>
              </TableCell>
              <TableCell>
                <span className="flex gap-2  mb-3 ">
                  <Mail size={16} className="text-primary mt-1" /> {professional?.email}
                </span>
                <span className="flex py-1 gap-2 text-[10px]">
                  <PhoneCall size={16} className="text-primary text-xs" /> {professional?.phone}
                </span>
              </TableCell>
              <TableCell className="text-sm">
                <span className="flex gap-2 items-center">
                  {" "}
                  <Briefcase className="text-primary" />
                  {professional?.jobTitle}
                </span>
              </TableCell>
              <TableCell className="flex gap-2 items-center">
                <Hospital className="text-primary" />
                <span className="text-sm">{professional?.hospital}</span>
              </TableCell>
              <TableCell>{professional?.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SideDrawerWrapper isOpen={!!activeProfile} onToggle={() => setActiveProfile(null)} header="Profile Details">
        <div className="h-full">
          <div>
            <div className="flex justify-center">
              {" "}
              <ProfileInitials isLarge className="h-16 w-16" name={`${activeProfile?.firstName} ${activeProfile?.lastName}`} />
            </div>
            <div className="text-regular text-xl font-bold text-center mt-1 pb-4">
              {activeProfile?.firstName} {activeProfile?.lastName}
            </div>
          </div>
          <div className="mt-6 space-y-4 ">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>{activeProfile?.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-primary" />
              <span>{activeProfile?.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-primary" />
              <span>{activeProfile?.jobTitle}</span>
            </div>

            <div className="flex items-center gap-2">
              <Hospital size={16} className="text-primary" />
              <span>{activeProfile?.hospital}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>{activeProfile?.location}</span>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Education</h3>
              <div className="text-sm space-y-1">
                <p>{activeProfile?.education.degree}</p>
                <p>{activeProfile?.education.university}</p>
                <p>Graduated {activeProfile?.education.graduationYear}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Professional Details</h3>
              <div className="text-sm space-y-1">
                <p>License Number: {activeProfile?.licenseNumber}</p>
                <p>Years of Experience: {activeProfile?.yearsOfExperience}</p>
                <p>Start Date: {activeProfile?.startDate}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {activeProfile?.certifications.map((cert, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:pt-8 pt-3 bottom-0 w-full">
          <Button className="w-full" type="button">
            {"Send an Email"}
          </Button>
        </div>
      </SideDrawerWrapper>
    </div>
  );
};

export default ResultTable;
