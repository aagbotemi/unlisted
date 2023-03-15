import { SettingsHeaderButton } from "../components/settings"

const SettingsHeader = () => {
  return (
    <div className="md:px-8">
      <div className="px-4 md:px-0">
        <h1 className="text-[#101828] font-medium text-[30px] leading-[38px]">Settings</h1>
        <p className="text-[#667085] text-base">Manage your team and preferences here.</p>
      </div>

      <div className="flex overflow-x-scroll whitespace-nowrap shadow-[(0px,1px,2px,rgba(16,24,40,0.05))] mt-6">
        <div className="flex bg-white border border-[#D0D5DD] rounded-lg">
          <SettingsHeaderButton text="My details" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Profile" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Password" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Team" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Plan" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Billing" className="text-[#1D2939] bg-[#F9FAFB] border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Notifications" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="Integration" className="border-r border-[#D0D5DD]" />
          <SettingsHeaderButton text="API" />
        </div>
      </div>
    </div>
  )
}

export { SettingsHeader as default }
