import { Check } from "../../assets/icons"

const StatusBadge = () => {
    return (
        <div className="max-w-[4rem] flex items-center px-[8px] py-[4px] bg-[#ECFDF3] rounded-2xl">
            <Check />
            <span className="text-[#027A48] text-[12px] leading-[18px] font-medium ml-1">Paid</span>
        </div>
    )
}

export { StatusBadge as default }