import React, { useState } from "react";
import { Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";

export const phone_items = [
  { label: "All Phones", key: "allPhones" },
  { label: "Apple", key: "apple" },
  { label: "Samsung", key: "samsungPhone" },
  { label: "Huawei", key: "huaweiPhone" },
];

export const laptop_items = [
  { label: "All Laptops", key: "allLaptops" },
  { label: "Mac", key: "mac" },
  { label: "Samsung", key: "samsungLaptop" },
  { label: "Huawei", key: "huaweiLaptop" },
];

export default function MegaMenu(props) {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState([]);

  const onMenuClick = (item) => {
    setSelectedKey([item.key]);
    props.onClick();

    if (item.key === "allProducts") {
      navigate("/allProducts");
      return;
    }
    navigate(`/${item.key}`);
  };

  return (
    <div>
      <Space direction="horizontal" size={12} style={{ margin: "1rem" }}>
        <Menu
          onClick={onMenuClick}
          title="All Products"
          selectedKeys={selectedKey}
        >
          <Menu.Item key="allProducts">Show All</Menu.Item>
        </Menu>
        <Menu onClick={onMenuClick} selectedKeys={selectedKey}>
          <Menu.ItemGroup title="Phones">
            {phone_items.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu>
        <Menu onClick={onMenuClick} selectedKeys={selectedKey}>
          <Menu.ItemGroup title="Laptops">
            {laptop_items.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu>
      </Space>
    </div>
  );
}
