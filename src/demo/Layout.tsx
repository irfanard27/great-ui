import React from "react";
import { Layout, Menu } from "../great-ui";
import DemoButton from "./button/DemoButton";
import DemoGrid from "./button/DemoGrid";
import DemoNotification from "./notification/DemoNotification";
import DemoTable from "./table/DemoTable";

export default function LayoutDemo() {
  const menus = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "About",
      key: "about",
    },
    {
      label: "User",
      key: "user",
    },
  ];

  const vmenus = [
    {
      label: "Dashboard",
      key: "dashboard",
    },
    {
      label: "Product",
      key: "product",
    },
    {
      label: "User",
      key: "user",
    },
  ];

  return (
    <div>
      <Layout>
        <Layout.Siderbar>
          <div style={{ padding: 10, fontSize: 16, height: 50 }}>Great Ui</div>
          <Menu items={vmenus} layout="vertical" />
        </Layout.Siderbar>
        <Layout.Main>
          <Layout.Header
            left={<div>Hallo</div>}
            center={<div>Center</div>}
            right={<Menu items={menus} />}
          />
          <Layout.Content>
            <DemoButton />
            <br />

            <DemoGrid />
            <br />
            <DemoNotification />
            <br />
            <DemoTable />
          </Layout.Content>

          <Layout.Footer>Ini Footer</Layout.Footer>
        </Layout.Main>
      </Layout>
    </div>
  );
}
