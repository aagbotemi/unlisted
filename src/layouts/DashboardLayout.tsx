import { MainPanel, Sidebar } from "../components/navigation";

interface DashboardProps {
  children: JSX.Element;
}

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <div className="flex w-full min-h-screen layout__main">
      <Sidebar />
      <MainPanel>{children}</MainPanel>
    </div>
  );
};

export { DashboardLayout as default };
