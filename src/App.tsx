import "./great-ui.less";
import LayoutDemo from "./demo/Layout";

function App() {
  return (
    <div>
      <LayoutDemo />
    </div>

    // <div className="main-container">
    //   <div>
    //     <div style={{ padding: 20 }}>
    //       <div>
    //
    //       </div>

    //       <div>
    //         <h1>List</h1>
    //         <List
    //           data={data}
    //           renderItem={(person, index) => (
    //             <List.Item key={index} onClick={() => console.log(person.name)}>
    //               <Title
    //                 title={person.name}
    //                 subTitle={`Username`}
    //                 avatar={<Avatar shape="circle">IA</Avatar>}
    //               />
    //             </List.Item>
    //           )}
    //         />
    //       </div>

    //       <div>
    //         <h1>Card</h1>
    //         <div style={{ width: 340 }}>
    //           <Card title="Default Card" bordered={true}>
    //             Hallo ini card
    //           </Card>
    //         </div>

    //         <div
    //           style={{
    //             width: 340,
    //             marginTop: 10,
    //             padding: 20,
    //             background: "#f8f8f8",
    //           }}
    //         >
    //           <Card>
    //             <Title
    //               title={"Hallo this is title"}
    //               subTitle="This is my subtitle"
    //               bold
    //             />
    //             <p>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the industry's
    //               standard dummy text ever since the 1500s,
    //             </p>
    //             <Button>Read more</Button>
    //           </Card>
    //         </div>
    //       </div>

    //       <div>
    //         <h1>Modal</h1>
    //         <div style={{ width: 340 }}>
    //           <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

    //           <Button onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
    //         </div>
    //       </div>
    //       <br />
    //     </div>
    //   </div>

    //   <div>
    //     <div>
    //       <h1>Avatar</h1>
    //       <Avatar color="blue" ref={avatarRef}>
    //         U
    //       </Avatar>{" "}
    //       <Avatar shape="circle" color="blue">
    //         IA
    //       </Avatar>
    //       <Avatar shape="box">U</Avatar>
    //       <Avatar size="small" color="blue" shape="circle">
    //         U
    //       </Avatar>
    //       <Avatar size="small">U</Avatar>
    //     </div>
    //     <br />
    //   </div>
    //   <br />

    //   <Modal
    //     open={openModal}
    //     title="This is Modal"
    //     close={() => setOpenModal(false)}
    //     width={600}
    //     bordered={false}
    //   >
    //     Lorem Ipsum is simply dummy text of the printing and typesetting
    //     industry. Lorem Ipsum has been the industry's standard dummy text ever
    //     since the 1500s, when an unknown printer took a galley of type and
    //     scrambled it to make a type specimen book. It has survived not only five
    //     centuries, but also the leap into electronic typesetting, remaining
    //     essentially unchanged. It was popularised in the 1960s with the release
    //     of Letraset sheets containing Lorem Ipsum passages, and more recently
    //     with desktop publishing software like Aldus PageMaker including versions
    //     of Lorem Ipsum.
    //   </Modal>

    //   <Drawer
    //     title="This is Drawer"
    //     open={opDrawer}
    //     onClose={() => setOpenDrawer(false)}
    //   >
    //     <h3>Hallo</h3>
    //     <p className="text-secondary">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text ever
    //       since the 1500s, when an unknown printer took a galley of type and
    //       scrambled it to make a type specimen book. It has survived not only
    //       five centuries, but also the leap into electronic typesetting,
    //       remaining essentially unchanged. It was popularised in the 1960s with
    //       the release of Letraset sheets containing Lorem Ipsum passages, and
    //       more recently with desktop publishing software like Aldus PageMaker
    //       including versions of Lorem Ipsum.
    //     </p>
    //   </Drawer>
    // </div>
  );
}

export default App;
