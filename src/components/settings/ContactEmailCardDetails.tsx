interface IContactEmailCardDetails {
    title: string,
    text: string
}

const ContactEmailCardDetails = ({ title, text }: IContactEmailCardDetails) => {
    return (
        <div className="col-span-2 text-[14px] leading-[20px]">
            <div className="text-[#344054] font-medium">{title}</div>
            <div className="text-[#667085] font-normal">{text}</div>
        </div>
    )
}

export { ContactEmailCardDetails as default }