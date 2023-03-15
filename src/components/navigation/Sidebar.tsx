import { Dashboard, Home, Logo, Logout, Project, Reporting, SearchIcon, Settings, Support, Task, Users } from "../../assets/icons";

const Sidebar = () => {

  return (
    <div className="hidden lg:block bg-[#FFFFFF] w-[25%] xl:w-[18%] border-r border-[#EAECF0] py-[32px]">
      <div className="">
        <div className="px-[16px]">
          <div className="flex items-center px-2">
            <Logo />

            <div className="ml-2 font-meidum text-base leading-6 text-[#101828]">
              Unlisted UI
            </div>
          </div>


          <div className="mt-[24px] pl-2 pr-5 relative">
            <input type="text" placeholder="Search" className="text-[#667085] max-w-[12rem] pl-10 py-2 border border-gray-300 rounded-lg outline-none" />
            <div className="absolute top-[10px] left-5">
              <SearchIcon />
            </div>
          </div>

          <div className="mt-[34px]">
            <div
              className={`flex items-center text-[#27353F] px-2`}
            >
              <Home className="w-[24px]" />
              <p className="ml-3 text-base text-[#344054] font-medium">
                Home
              </p>
            </div>
            <div
              className={`flex items-center justify-between mt-3 text-[#27353F] pt-1 px-2 px-2`}
            >
              <div className="flex"><Dashboard className="w-[24px]" />
                <p className="ml-3 text-base text-[#344054] font-medium">
                  Dashboard
                </p>
              </div>

              <div className="bg-[#F5F5F5] text-[#344054] text-base font-medium px-3 py-1 rounded-[24px]">10</div>
            </div>
            <div
              className={`flex items-center mt-3 text-[#27353F] pt-1 px-2`}
            >
              <Project className="w-[24px]" />
              <p className="ml-3 text-base text-[#344054] font-medium">
                Projects
              </p>
            </div>
            <div
              className={`flex items-center mt-3 text-[#27353F] pt-1 px-2`}
            >
              <Task className="w-[24px]" />
              <p className="ml-3 text-base text-[#344054] font-medium">
                Tasks
              </p>
            </div>
            <div
              className={`flex items-center mt-3 text-[#27353F] pt-1 px-2`}
            >
              <Reporting className="w-[24px]" />
              <p className="ml-3 text-base text-[#344054] font-medium">
                Reporting
              </p>
            </div>
            <div
              className={`flex items-center mt-3 text-[#27353F] pt-1 px-2`}
            >
              <Users className="w-[24px]" />
              <p className="ml-3 text-base text-[#344054] font-medium">
                Users
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 flex-0 mt-8">
        <div className="">
          <div
            className={`flex items-center text-[#27353F] px-2`}
          >
            <Support className="w-[24px]" />
            <p className="ml-3 text-base text-[#344054] font-medium">
              Support
            </p>
          </div>
          <div
            className={`flex items-center mt-3 text-[#101828] px-2 bg-[#F9FAFB] rounded-[6px] font-semibold py-2`}
          >
            <Settings className="w-[24px]" />
            <p className="ml-3 text-base text-[#101828] font-medium">
              Settings
            </p>
          </div>


          <div className="mt-5 p-3 rounded-lg bg-[#F5F5F5]">

            <div className="text-[#101828] text-base"> New features available!</div>

            <div className="mt-1 text-[#667085] text-sm">Check out the new dashboard view. Pages now load faster.</div>

            <div className="my-4">
              <img src="/user_image.png" alt="user" />
            </div>

            <div className="text-sm">
              <span className="text-[#667085]">Dismiss</span>
              <span className="text-[#6941C6] ml-3">What's new?</span>
            </div>
          </div>

          <div className="h-[1px] bg-#EAECF0 my-5"></div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/olivia.png" alt="user" />
              <div className="ml-3">
                <div className="text-[#101828] text-sm">Olivia Rhye</div>
                <div className="text-[#667085] text-xs">olivia@untitledui.com</div>
              </div>
            </div>

            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar as default };

