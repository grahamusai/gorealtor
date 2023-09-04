"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avator from "../Avator";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex flex-row items-center gap-3"
      >
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-nuetral-100 transition cursor-pointer">
          Gorealtor you home
        </div>
        <div className="p-4 md:px-2 md:py-1 border-[1px] border-nuetral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avator />
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          className="
                absolute 
                rounded-xl 
                shadow-md 
                w-[40vw] 
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;