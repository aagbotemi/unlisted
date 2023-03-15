import React from 'react'
import { DashboardLayout } from '../layouts'
import { BillingHistory, SettingsHeader, SettingsPaymentMethod } from '../section'

const Settings = () => {
    return (
        <DashboardLayout>
            <div className="py-8 bg-[#F9FAFB]">
                <SettingsHeader />
            <div className='px-4 md:px-8'>
                <SettingsPaymentMethod />
                <BillingHistory />
            </div>
            </div>
        </DashboardLayout>
    )
}

export default Settings