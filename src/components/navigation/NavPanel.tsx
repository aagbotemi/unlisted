import { Logo, Menu } from "../../assets/icons";

const NavPanel = () => {

  return (
    <div className="border-b border-b-[#EAECF0]">
      <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="flex items-center px-2">
          <Logo />

          <div className="ml-2 font-meidum text-[18px] leading-6 text-[#101828]">
            Unlisted UI
          </div>
        </div>

        <div className="">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export { NavPanel as default };
