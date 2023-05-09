import React from "react";
import { Avatar, Card, Table } from "../../great-ui";

const data = [
  {
    id: 1,
    name: "John",
    age: 20,
    address: "New York",
    lastname: "Doe",
    departmen: "IT",
    role: "Admin",
    employee_id: "EMP-001",
    phone: "08123456789",
  },
  {
    id: 2,
    name: "Jane",
    age: 21,
    address: "London",
    lastname: "Doe",
    departmen: "IT",
    role: "System Admin",
    employee_id: "EMP-002",
    phone: "08123456789",
  },
  {
    id: 3,
    name: "Joe",
    age: 22,
    address: "Sydney",
    lastname: "Doe",
    departmen: "Accounting",
    role: "Developer",
    employee_id: "EMP-003",
    phone: "08123456789",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 10,
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
    render: (value, record) => {
      return (
        <div style={{ display: "flex", gap: 5 }}>
          <Avatar size="small" shape="circle">
            U
          </Avatar>
          <div>
            {value} {record.lastname}
            <br />
            <small className="text-color-secondary">{record.role}</small>
          </div>
        </div>
      );
    },
  },
  {
    title: "Employee ID",
    dataIndex: "employee_id",
    key: "employee_id",
    width: 80,
    render: (value) => {
      return <span style={{ fontWeight: 500 }}>{value}</span>;
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Lastname",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Departmen",
    dataIndex: "departmen",
    key: "departmen",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];

export default function DemoTable() {
  return (
    <Card title="Employee List" bordered>
      <Table data={data} columns={columns} />
    </Card>
  );
}
