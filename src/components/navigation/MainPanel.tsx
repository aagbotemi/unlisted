import NavPanel from "./NavPanel";

const MainPanel = ({ children }: any) => {
  return (
    <div className="flex-1 !min-h-screen overflow-y-scroll">
      <div className="lg:hidden"><NavPanel /></div>
      {children}
    </div>
  );
};

export { MainPanel as default };
