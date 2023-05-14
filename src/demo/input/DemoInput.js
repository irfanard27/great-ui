import React from "react";
import { Card, Col, Row, Spacing } from "../../great-ui";
import { Input } from "../../components/input/Input";

export default function DemoInput() {
  return (
    <Card title="Great UI Input">
      <h4>Input from</h4>

      <Row>
        <Col span={6}>
          <Spacing gap={10}>
            <Input placeholder="Input text" type="password" />
            <Input placeholder="Input text" type="email" />
          </Spacing>
        </Col>
      </Row>
    </Card>
  );
}
