"use client";

import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const Header = () => {
  return (
    <nav className="w-screen bg-background">
      <div className="max-w-[1300px] mx-auto px-2 flex items-center">
        <div className="flex-1">
          <Logo className="size-16 md:size-20" />
        </div>
        <div className="flex-1 hidden md:flex justify-end">
          <Button variant={"link"} className="text-md" asChild>
            <Link href={"#"}>Crypto Taxes</Link>
          </Button>
          <Button variant={"link"} className="text-md" asChild>
            <Link href={"#"}>Free Tools</Link>
          </Button>
          <Button variant={"link"} className="text-md" asChild>
            <Link href={"#"}>Resource Center</Link>
          </Button>
          <Button
            className="text-md ml-4 bg-gradient-to-r from-[#2871EB] to-[#1A4BEF] hover:opacity-90"
            asChild
          >
            <Link href={"#"}>Get Started</Link>
          </Button>
        </div>

        <div className="flex md:hidden flex-1 justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <IoMenu className="size-7" />
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <div className="flex-1 flex flex-col gap-4">
                <Button variant={"link"} className="text-md" asChild>
                  <Link href={"#"}>Crypto Taxes</Link>
                </Button>
                <Button variant={"link"} className="text-md" asChild>
                  <Link href={"#"}>Free Tools</Link>
                </Button>
                <Button variant={"link"} className="text-md" asChild>
                  <Link href={"#"}>Resource Center</Link>
                </Button>
                <Button
                  className="text-md bg-gradient-to-r from-[#2871EB] to-[#1A4BEF] hover:opacity-90"
                  asChild
                >
                  <Link href={"#"}>Get Started</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Header;
