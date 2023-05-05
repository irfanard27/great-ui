import React from "react";
import { Button, ButtonGroup, Card } from "../../great-ui";

export default function DemoButton() {
  return (
    <div>
      <Card bordered={true} title="Great UI Button">
        <div>
          <h3>Single Button</h3>
          <Button type="primary">Primary</Button>{" "}
          <Button type="secondary">Secondary</Button> <Button>Default</Button>{" "}
          <Button type="outlined">Outlined</Button>{" "}
          <Button shadow>Shadow Button</Button>{" "}
          <Button type="primary" shadow>
            Primary Shadow Button
          </Button>
        </div>
        <br />
        <div>
          <h3>Button Size</h3>
          <Button type="outlined" size="super-large">
            Outlined
          </Button>{" "}
          <Button type="primary" size="large">
            Primary
          </Button>{" "}
          <Button type="secondary">Secondary</Button>{" "}
          <Button shadow={true} size="small">
            Shadow Button
          </Button>{" "}
          <Button type="primary" shadow={true} size="super-small">
            Primary Shadow Button
          </Button>
        </div>
        <div style={{ width: 340 }}>
          <h3>Button Block</h3>
          <Button
            type="primary"
            block
            onClick={() => console.log("hallo")}
            id="halo"
          >
            Button Block
          </Button>
        </div>

        <div>
          <h3>Button Group</h3>
          <ButtonGroup>
            <ButtonGroup.Item>Left</ButtonGroup.Item>
            <ButtonGroup.Item>Middle</ButtonGroup.Item>
            <ButtonGroup.Item>Right</ButtonGroup.Item>
          </ButtonGroup>
        </div>
      </Card>
    </div>
  );
}
