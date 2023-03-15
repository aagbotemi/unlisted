import React from 'react'
import { Download } from '../assets/icons'
import { BillingTable } from '../components/settings'

const BillingHistory = () => {
    return (
        <div className='mt-8'>
            <div className="flex items-center justify-between">
                <h2 className="text-[#101828] text-lg font-medium">Billing history</h2>

                <div className="bg-white flex items-center border border-[#D0D5DD] px-4 py-[10px] rounded-lg">
                    <Download />
                    <span className="ml-2 text-[344054] text-sm font-medium">Download</span>
                </div>
            </div>

            <div className="mt-[24px]">
                <BillingTable />
            </div>
        </div>
    )
}

export default BillingHistory