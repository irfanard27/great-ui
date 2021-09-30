import "./great-ui.less";
import { Button, Card } from "./great-ui";
import { useRef } from "react";
import { List } from "./components/list/List";

const data = [
  {
    name: "Irfan",
    age: 25,
  },
  {
    name: "Anindya",
    age: 24,
  },
  {
    name: "Budi Suharsono",
    age: 22,
  },
];

function App() {
  const buttonRef = useRef();

  return (
    <div style={{ padding: 20 }}>
      <div>
        <h1>Single Button</h1>
        <Button
          type="primary"
          ref={buttonRef}
          id="haha"
          className="good"
          key="1"
        >
          Primary
        </Button>{" "}
        <Button type="secondary">Secondary</Button> <Button>Default</Button>{" "}
        <Button type="outlined">Outlined</Button>{" "}
      </div>
      <br />
      <div style={{ width: 340 }}>
        <h1>Button Block</h1>
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
        <h1>List</h1>
        <List
          data={data}
          renderItem={(person, index) => (
            <List.Item key={index} onClick={() => console.log(person.name)}>
              {person.name}
            </List.Item>
          )}
        />
      </div>

      <div>
        <h1>Card</h1>
        <div style={{ width: 340 }}>
          <Card title="Default Card" bordered={true}>
            Hallo ini card
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
