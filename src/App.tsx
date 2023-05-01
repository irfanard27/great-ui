import "./great-ui.less";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  Modal,
  Row,
  Title,
  Notification,
} from "./great-ui";
import { useRef, useState } from "react";
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
  const avatarRef = useRef();

  const openAlert = () => {
    setOpenModal(true);
  };

  const openNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "Success",
      type: "success",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const openErrNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "Error",
      type: "error",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const openWarningNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "Waning for you",
      type: "warning",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const openInfoNotification = () => {
    Notification({
      message: "This is Notification Testing for you",
      title: "New Announcement",
      type: "info",
      onOpen: () => console.log("Notification Opened"),
      onClose: () => console.log("Notification Closed"),
    });
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div>
        <div style={{ padding: 20 }}>
          <div>
            <h1>Single Button</h1>
            <Button type="primary" ref={buttonRef}>
              Primary
            </Button>{" "}
            <Button type="secondary">Secondary</Button> <Button>Default</Button>{" "}
            <Button type="outlined">Outlined</Button>{" "}
            <Button shadow>Shadow Button</Button>{" "}
            <Button type="primary" shadow>
              Primary Shadow Button
            </Button>
          </div>
          <br />
          <div>
            <h1>Button Size</h1>
            <Button type="outlined" size="super-large">
              Outlined
            </Button>{" "}
            <Button type="primary" ref={buttonRef} size="large">
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
            <h1>Button Group</h1>
            <ButtonGroup>
              <ButtonGroup.Item>Left</ButtonGroup.Item>
              <ButtonGroup.Item>Middle</ButtonGroup.Item>
              <ButtonGroup.Item>Right</ButtonGroup.Item>
            </ButtonGroup>
            <ButtonGroup>
              <div>Hallo</div>
            </ButtonGroup>
          </div>
          <div>
            <h1>List</h1>
            <List
              data={data}
              renderItem={(person, index) => (
                <List.Item key={index} onClick={() => console.log(person.name)}>
                  <Title
                    title={person.name}
                    subTitle={`Username`}
                    avatar={<Avatar shape="circle">IA</Avatar>}
                  />
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

            <div
              style={{
                width: 340,
                marginTop: 10,
                padding: 20,
                background: "#f8f8f8",
              }}
            >
              <Card>
                <Title
                  title={"Hallo this is title"}
                  subTitle="This is my subtitle"
                  bold
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <Button>Read more</Button>
              </Card>
            </div>
          </div>

          <div>
            <h1>Modal</h1>
            <div style={{ width: 340 }}>
              <Button onClick={openAlert}>Open Modal</Button>
            </div>
          </div>
          <br />
          <div>
            <h1>Notification</h1>

            <div>
              {" "}
              <Button onClick={openNotification}>Success Notification</Button>
              <Button onClick={openErrNotification}>Error Notification</Button>
              <Button onClick={openWarningNotification}>
                Warning Notification
              </Button>
              <Button onClick={openInfoNotification}>Info Notification</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>Avatar</h1>
          <Avatar color="blue" ref={avatarRef}>
            U
          </Avatar>{" "}
          <Avatar shape="circle" color="blue">
            IA
          </Avatar>
          <Avatar shape="box">U</Avatar>
          <Avatar size="small" color="blue" shape="circle">
            U
          </Avatar>
          <Avatar size="small">U</Avatar>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <Row>
          <div>HAllo</div>
        </Row>
      </div>
      <br />

      <Modal
        open={openModal}
        title="This is Modal"
        close={() => setOpenModal(false)}
        width={600}
        bordered={false}
      >
        hallo
      </Modal>
    </div>
  );
}

export default App;
