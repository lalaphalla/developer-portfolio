"use client";
// Example using shadcn components for navigation
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavItems = ({ mobile = false }) => (
  <div className={`${mobile ? "flex flex-col space-y-4" : "flex space-x-8"}`}>
    <Button variant="ghost" className="hover:text-blue-600 justify-start">
      Work Experience
    </Button>
    <Button variant="ghost" className="hover:text-blue-600 justify-start">
      Skill
    </Button>
    <Button variant="ghost" className="hover:text-blue-600 justify-start">
      Contact Me
    </Button>
  </div>
);
// Build your own navbar using these primitives
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4">
      {/* <div className="absolute inset-1 bg-[url('../assets/image/outline-square-grid.png')]"></div> */}
      <div>Logo</div>


      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavItems />
      </div>

      {/* Mobile menu using Sheet */}
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
            <NavItems mobile={true} />
            <div className="pt-4 border-t">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
