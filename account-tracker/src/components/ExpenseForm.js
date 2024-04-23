import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment';

const ExpenseForm = ({ addExpense }) => {
    const [form] = Form.useForm();
    const { Option } = Select;

    // 初始化日期
    const initialDate = moment();

    // 使用 Form 的 onFinish 方法提交表单数据
    const onFinish = (values) => {
        // 添加额外的逻辑或转换（如果需要）
        const transformedValues = {
            ...values,
            startDate: values.startDate.format('YYYY-MM-DD'),
            endDate: values.endDate.format('YYYY-MM-DD')
        };
        console.log('Received values of form:', transformedValues);
        addExpense(transformedValues);
        form.resetFields();  // 重置表单项
    };

    return (
        <Form
            form={form}
            name="expense_form"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
                amount: '',
                startDate: initialDate,
                endDate: initialDate,
                frequency: 'once'
            }}
        >
            <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select placeholder="Select a category">
                    <Option value="food">Food</Option>
                    <Option value="transport">Transport</Option>
                    <Option value="housing">Housing</Option>
                    <Option value="entertainment">Entertainment</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="amount"
                label="Amount"
                rules={[{ required: true, message: 'Please input the amount!' }]}
            >
                <Input prefix="¥" type="number" placeholder="Amount spent" />
            </Form.Item>

            <Form.Item
                name="startDate"
                label="Start Date of Expense"
                rules={[{ required: true, message: 'Please select the start date!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="endDate"
                label="End Date of Expense"
                rules={[{ required: true, message: 'Please select the end date!' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="frequency"
                label="Frequency"
                rules={[{ required: true, message: 'Please select the frequency!' }]}
            >
                <Select>
                    <Option value="once">Once</Option>
                    <Option value="daily">Daily</Option>
                    <Option value="weekly">Weekly</Option>
                    <Option value="monthly">Monthly</Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit Expense
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ExpenseForm;
