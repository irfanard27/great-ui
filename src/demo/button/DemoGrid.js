import React from "react";
import { Card, Col, Row, Spacing, Button } from "../../great-ui";

export default function DemoGrid() {
  return (
    <div>
      <Card
        title="Great UI Grid System"
        bordered
        extra={
          <Spacing>
            <Button shadow>Load More</Button>
            <Button shadow>Add Employee</Button>
          </Spacing>
        }
      >
        <h4>Grid System</h4>
        <Row gutter={10}>
          <Col span={4}>
            <div className="col-items">Span 2</div>
          </Col>

          <Col span={4}>
            <div className="col-items">Span 4</div>
          </Col>

          <Col span={4}>
            <div className="col-items">Span 4</div>
          </Col>

          <Col span={4}>
            <div className="col-items"> 4</div>
          </Col>

          <Col span={2}>
            <div className="col-items">Span 2</div>
          </Col>

          <Col span={2}>
            <div className="col-items">Span 2</div>
          </Col>

          <Col span={4}>
            <div className="col-items">Span 2</div>
          </Col>

          <Col span={12}>
            <div className="col-items">Span 12</div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
