import React from 'react';
import { Table } from 'antd';

const ExpenseList = ({ expenses }) => {
    const columns = [
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: text => `¥${text}`,
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
        },
        {
            title: 'Frequency',
            dataIndex: 'frequency',
            key: 'frequency',
        }
    ];

    return (
        <Table
            columns={columns}
            dataSource={expenses}
            rowKey="id"
            pagination={false} />
    );
};

export default ExpenseList;
