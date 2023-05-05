import React from "react";
import { Layout, Menu } from "../great-ui";
import DemoButton from "./button/DemoButton";
import DemoGrid from "./button/DemoGrid";
import DemoNotification from "./notification/DemoNotification";

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

  return (
    <div>
      <Layout>
        <Layout.Siderbar>Ini Sider</Layout.Siderbar>
        <Layout.Main>
          <Layout.Header
            left={<div>Hallo</div>}
            center={<div>Center</div>}
            right={<Menu items={menus} />}
          />

          <Layout.Content>
            <h1>Great UI</h1>
            <p>Next gen react UI framework</p>
            <br />
            <DemoButton />
            <br />

            <DemoGrid />
            <br />
            <DemoNotification />
          </Layout.Content>

          <Layout.Footer>Ini Footer</Layout.Footer>
        </Layout.Main>
      </Layout>
    </div>
  );
}
