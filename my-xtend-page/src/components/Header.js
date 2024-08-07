// src/components/Header.js
import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">Option 1</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">Option 2</a>
        </Menu.Item>
    </Menu>
);

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src="logo.png" alt="Xtend" />
                </div>
                <div className="menu">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button>
                            Our Products <DownOutlined />
                        </Button>
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button>
                            Resources <DownOutlined />
                        </Button>
                    </Dropdown>
                    <a href="#">Technology</a>
                    <a href="#">About Us</a>
                    <a href="#">Get in touch</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
