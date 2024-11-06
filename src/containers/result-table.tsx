import ProfileInitials from "@/components/common/profile-initials";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { healthProfessionals } from "@/mocks/mocks";
import { Briefcase, Hospital, Mail, PhoneCall } from "lucide-react";

const tableHeaders = ["Contact Name", "Contact Info", "Job Title", "Company Name", "Location"];

const ResultTable = () => {
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
            <TableRow key={`key_${professional.id}`} className="cursor-pointer">
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
    </div>
  );
};

export default ResultTable;
