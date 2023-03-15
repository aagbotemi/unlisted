
interface ISettingsHeaderButton {
  text: string;
  className?: string
}

const SettingsHeaderButton = ({ text, className }: ISettingsHeaderButton) => {
  return (
    <button className={`text-[#344054] py-[9px] px-4 text-sm font-medium ${className}`}>{text}</button>
  )
}

export { SettingsHeaderButton as default }