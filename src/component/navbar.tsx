"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

// Define your navigation items with corresponding section IDs
const navItems = [
  { label: "Work Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact Me", id: "contact" },
];
interface Props {
  mobile?: boolean;
  onItemClick: (id: string) => void;
}
const NavItems = ({ mobile = false, onItemClick }: Props) => (
  <div className={`${mobile ? "flex flex-col space-y-4" : "flex space-x-8"}`}>
    {navItems.map((item) => (
      <Button
        key={item.id}
        variant="ghost"
        className="hover:bg-[#EEE7DD] justify-start cursor-pointer"
        onClick={() => onItemClick(item.id)}
      >
        {item.label}
      </Button>
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    // setIsOpen(false); // Close mobile menu after selection
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 bg-white dark:bg-slate-900 z-50">
      <div>Logo</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavItems onItemClick={handleScrollTo} />
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-6 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-semibold text-lg">Pav MunyPhalla</span>
            </div>
            <NavItems mobile={true} onItemClick={handleScrollTo} />
            <div className="pt-4 border-t">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => handleScrollTo("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
