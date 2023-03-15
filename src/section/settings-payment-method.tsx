import React from 'react'
import { Email, Mastercard, Plus, Visa } from '../assets/icons'
import { ContactEmailCardDetails } from '../components/settings'

const SettingsPaymentMethod = () => {
    return (
        <div className='mt-8'>
            <h2 className="text-[#101828] font-medium text-[18px] leading-[20px]">Payment method</h2>
            <p className="text-[#667085] text-[14px] leading-[20px]">Update your billing details and address.</p>

            <div className="h-[1px] bg-[#EAECF0] my-[23px]"></div>

            <div className="md:grid grid-cols-7 gap-24">
                <ContactEmailCardDetails title='Contact email' text='Where should invoices be sent?' />

                <div className="col-span-5 ml-[30px] mt-5 md:ml-0 md:mt-0">
                    <div className="flex">
                        <div className="mt-3">
                            <input type="radio" id="account" name="gender" />
                            <label htmlFor="account"></label>
                        </div>

                        <div className="ml-2">
                            <div className="text-[#344054] text-sm font-medium">Send to my account email</div>
                            <div className="text-[#667085] text-sm">olivia@untitledui.com</div>
                        </div>
                    </div>

                    <div className="flex mt-4">
                        <div className="mt-3">
                            <input type="radio" id="alternative" name="gender" />
                            <label htmlFor="alternative"></label>
                        </div>

                        <div className="ml-2">
                            <div className="text-[#344054] text-sm font-medium">Send to an alternative email</div>
                            <div className="flex items-center py-[10px] px-[14px] mt-3 text-[#667085] text-sm bg-[#FFFFFF] border border-[#D0D5DD] rounded-lg md:w-[120%] lg:w-[180%]"><Email /> <span className="text-[#101828] text-base ml-2">billing@untitledui.com</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-[#EAECF0] w-full my-[20px]"></div>

            <div className="md:grid grid-cols-7 gap-24">
                <ContactEmailCardDetails title='Card details' text='Select default payment method.' />

                <div className="col-span-5">


                    <div className="p-4 flex bg-[#F9F5FF] border border-[#D6BBFB] rounded-lg mt-5 md:mt-0">
                        <Visa />

                        <div className="ml-3 font-medium text-sm">
                            <div className="text-[#53389E]">Visa ending in 1234</div>
                            <div className="text-[#7F56D9]">Expiry 06/2024</div>
                            <div className="mt-2">
                                <span className="text-[#9E77ED]">Set as default</span>
                                <span className="ml-3 text-[#6941C6]">Edit</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex mt-3 bg-[#FFFFFF] border border-[#EAECF0] rounded-lg">
                        <Mastercard />

                        <div className="ml-3 font-medium text-sm">
                            <div className="text-[#344054]">Visa ending in 1234</div>
                            <div className="text-[#667085]">Expiry 06/2024</div>
                            <div className="mt-2">
                                <span className="text-[#667085]">Set as default</span>
                                <span className="ml-3 text-[#6941C6]">Edit</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-4 text-[#667085]">
                        <Plus />
                        <div className="ml-3 text-sm font-medium">Add new payment method</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPaymentMethod
