import React, { useState } from 'react';
import { Layout, List, Card, Col, Row, Avatar, DatePicker, InputNumber, Button, Select, Form } from 'antd';
import { HomeOutlined, CarOutlined, PayCircleOutlined, CommentOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const ExpenseForm = ({ addExpense }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        addExpense({
            ...values,
            id: Math.random(), // 示例中生成唯一 ID 的简易方法
            category: values.category, // 确保类别数据被包括
            startDate: values.startDate.format('YYYY-MM-DD'),
            endDate: values.endDate ? values.endDate.format('YYYY-MM-DD') : null,
        });
        form.resetFields(); // 提交后重置表单
    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical" initialValues={{ frequency: 'once' }}>
            <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select placeholder="Select a category">
                    <Option value="food">Food</Option>
                    <Option value="transport">Transport</Option>
                    <Option value="housing">Housing</Option>
                    <Option value="entertainment">Entertainment</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please input the amount!' }]}>
                <InputNumber placeholder="Amount spent" min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="startDate" label="Start Date" rules={[{ required: true, message: 'Please select the start date!' }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="endDate" label="End Date" rules={[{ required: true, message: 'Please select the end date!' }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="frequency" label="Frequency" rules={[{ required: true, message: 'Please select the frequency!' }]}>
                <Select>
                    <Option value="once">Once</Option>
                    <Option value="daily">Daily</Option>
                    <Option value="weekly">Weekly</Option>
                    <Option value="monthly">Monthly</Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Expense
                </Button>
            </Form.Item>
        </Form>
    );
};

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, { ...expense, key: expense.id }]);
    };

    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <Header style={{ background: '#ffec3d', padding: '0 50px' }}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <DatePicker onChange={() => {}} picker="year" />
                        <DatePicker onChange={() => {}} picker="month" />
                    </Col>
                    <Col>
                        <Avatar size="large" icon={<HomeOutlined />} />
                        <Avatar size="large" icon={<CarOutlined />} />
                        <Avatar size="large" icon={<PayCircleOutlined />} />
                        <Avatar size="large" icon={<CommentOutlined />} />
                    </Col>
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <ExpenseForm addExpense={addExpense} />
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={expenses}
                    renderItem={item => (
                        <List.Item>
                            <Card title={`Expense on ${item.startDate} - ${item.endDate}`}>
                                <p>Amount: ¥{item.amount.toFixed(2)}</p>
                                <p>Category: {item.category}</p>
                            </Card>
                        </List.Item>
                    )}
                />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Expense Tracker ©2024 Created by You</Footer>
        </Layout>
    );
};

export default App;
