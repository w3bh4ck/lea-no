import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { FC } from "react";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  header?: string;
  subText?: string;
}
const SideDrawerWrapper: FC<IProps> = ({ children, isOpen, onToggle, header, subText }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{header}</SheetTitle>
          <SheetDescription>{subText}</SheetDescription>
        </SheetHeader>
        <div className="relative min-h-[90vh]">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawerWrapper;
