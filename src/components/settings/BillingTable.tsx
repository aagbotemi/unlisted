import React, { useState } from 'react'
import { ArrowDown, Check, Download } from '../../assets/icons'
import {
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

export const billingHistory = [
    {
        id: 1,
        title: "Basic Plan - Dec 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        usersOnPlan: "user_plan_1.svg"
    },
    {
        id: 2,
        title: "Basic Plan - Nov 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        paidStatus: true,
        usersOnPlan: "/user_plan_2.svg"
    },
    {
        id: 3,
        title: "Basic Plan - Oct 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        paidStatus: true,
        usersOnPlan: "/user_plan_3.svg"
    },
    {
        id: 4,
        title: "Basic Plan - Sep 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        paidStatus: true,
        usersOnPlan: "/user_plan_4.svg"
    },
    {
        id: 5,
        title: "Basic Plan - Aug 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        paidStatus: true,
        usersOnPlan: "/user_plan_5.svg"
    },
    {
        id: 6,
        title: "Basic Plan - Jul 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        paidStatus: true,
        usersOnPlan: "/user_plan_5.svg"
    },
    {
        id: 7,
        title: "Basic Plan - Jun 2022",
        amount: "USD $10.00",
        date: "Dec 1, 2022",
        paidStatus: true,
        usersOnPlan: "/user_plan_4.svg"
    }
];

const EnhancedTableHead = (props: any) => {
    return (
        <TableHead>
            <TableRow
                sx={{
                    "td, th": { borderColor: "#DFE4F4", background: "#F9FAFB" },
                }}
            >
                <TableCell
                    onClick={props.onClick}
                    sx={{
                        pl: "24px",
                        pr: "13px",
                        py: "13px",
                    }}
                    colSpan={5}
                >
                    <div className="flex items-center">
                        <Checkbox
                            indeterminate={props.indeterminate}
                            checked={props.checked}
                            onChange={props.onChange}
                            color="secondary"
                        />
                        <h1 className="capitalize font-medium text-sm leading-[18px] text-[#697278] whitespace-nowrap">
                            Invoice 
                        </h1>

                        <span className="ml-2">
                            {props.sort}
                        </span>
                    </div>
                </TableCell>
                <TableCell
                    sx={{
                        px: "13px",
                        py: "13px",
                    }}
                >
                    <h1 className="capitalize font-medium text-sm leading-[18px] text-[#697278] whitespace-nowrap">
                        Amount
                    </h1>
                </TableCell>
                <TableCell
                    sx={{
                        px: "13px",
                        py: "13px",
                    }}
                >
                    <h1 className="capitalize font-medium text-sm leading-[18px] text-[#697278] whitespace-nowrap">
                        Date
                    </h1>
                </TableCell>
                <TableCell
                    sx={{
                        px: "13px",
                        py: "13px",
                    }}
                >
                    <h1 className="capitalize font-medium text-sm leading-[18px] text-[#697278] whitespace-nowrap">
                        Status
                    </h1>
                </TableCell>
                <TableCell
                    sx={{
                        px: "13px",
                        py: "13px",
                    }}
                >
                    <h1 className="capitalize font-medium text-sm leading-[18px] text-[#697278] whitespace-nowrap">
                        Users on plan
                    </h1>
                </TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
    );
};

import NorthIcon from '@mui/icons-material/North';

const BillingTable = () => {
    // SELECTING
    const [selected, setSelected] = useState<Array<any>>([]);

    const handleSelectAll = (event: any) => {
        if (event.target.checked) {
            const newSelected = billingHistory?.map((item: any) => item.id);
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    };

    const handleSelect = (event: any, id: any) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selected, id];
        } else {
            selected.splice(selectedIndex, 1);
            newSelected = [...selected];
        }

        setSelected(newSelected);
    };

    // SORTING
    const [sortColumn, setSortColumn] = useState('title');
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = (columnName: any) => {
        if (sortColumn === columnName) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(columnName);
            setSortDirection('asc');
        }
    };

    const sortedData = billingHistory.sort((a: any, b: any) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        if (sortDirection === 'asc') {
            if (valueA < valueB) return -1;
            if (valueA > valueB) return 1;
            return 0;
        } else {
            if (valueA > valueB) return -1;
            if (valueA < valueB) return 1;
            return 0;
        }
    });

    return (

        <TableContainer
            component={Paper}
            sx={{
                width: "100%",
            }}
        >
            <Table sx={{ minWidth: 650 }}>

                <EnhancedTableHead
                    onClick={() => handleSort('title')}
                    indeterminate={selected?.length > 0 && selected?.length < billingHistory?.length}
                    checked={selected?.length === billingHistory?.length}
                    onChange={handleSelectAll}
                    sort={sortColumn === 'title' && (sortDirection === 'asc' ? <ArrowDown /> : <NorthIcon fontSize='small' />)}
                />

                <TableBody className="">
                    {Array.isArray(billingHistory) && billingHistory?.length > 0 ? (
                        billingHistory?.map((bill_: any, _i: number) => {
                            return (
                                <TableRow
                                    tabIndex={-1}
                                    key={_i}
                                    sx={{
                                        "&:last-child td, &:last-child th": { border: 0 },
                                        "td, th": { borderColor: "#EAECF0" },
                                    }}
                                >
                                    <TableCell
                                        sx={{
                                            py: "24px",
                                            px: "24px",
                                        }}
                                    >
                                        <div className="flex items-center text-[#27353F] text-[14px] leading-[21px] whitespace-nowrap">
                                            <Checkbox checked={selected.indexOf(bill_.id) !== -1}
                                                onChange={(event) => handleSelect(event, bill_.id)}
                                                color="secondary" />
                                            <div className="text-[#101828] text-sm font-medium">{bill_.title}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell
                                        component="th"
                                        sx={{
                                            py: "24px",
                                            px: "12px",
                                        }}
                                    >
                                        <div className="text-[#667085] text-sm whitespace-nowrap">
                                            {bill_.amount}
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            py: "24px",
                                            px: "12px",
                                        }}
                                    >
                                        <div className="text-[#667085] text-sm whitespace-nowrap">
                                            {bill_.date}
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            py: "24px",
                                            px: "12px",
                                        }}
                                    >
                                        <div className="flex items-center px-[8px] py-[4px] bg-[#ECFDF3] rounded-2xl">
                                            <Check /> <span className="text-[#027A48] text-[12px] leading-[18px] font-medium ml-1">Paid</span>

                                        </div>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            py: "24px",
                                            px: "12px",
                                        }}
                                    >
                                        <img src={bill_.usersOnPlan} />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            py: "24px",
                                            px: "24px",
                                        }}
                                    >
                                        <Download />
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableCell
                            colSpan={5}
                            sx={{
                                py: "20px",
                                px: "30px",
                            }}
                        >
                            <div className="text-center">No billing history found!</div>
                        </TableCell>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BillingTable