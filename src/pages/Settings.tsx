import React from 'react'
import { DashboardLayout } from '../layouts'
import { BillingHistory, SettingsHeader, SettingsPaymentMethod } from '../section'

const Settings = () => {
    return (
        <DashboardLayout>
            <div className='p-8 bg-[#F9FAFB]'>
                <SettingsHeader />
                <SettingsPaymentMethod />
                <BillingHistory />
            </div>
        </DashboardLayout>
    )
}

export default Settings