// import ToDoList from "./components/ToDoList";
// import MyTable from "./components/MyTable";
import React, {useState} from "react";
// import TreeView from "./components/TreeCheckBox/Tree";
// import ToDoList from "./components/MySelf/ToDoList";
// import Table from "./components/MySelf/Table";
import TreeCategory from "./components/MySelf/Tree/TreeCategory";
import Carousel from "./components/MySelf/ScrollImg";
// 使用示例
const treeData = [
    {
        id: 1,
        title: 'Node 1',
        children: [
            {
                id: 2,
                title: 'Node 1.1',
                children: [
                    {
                        id: 3,
                        title: 'Node 1.1.1'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Node 2'
    }
];

const images =[
    "static/故事2.png",
    "static/故事3.png",
    "static/故事4.png",
    "static/故事5.png",
    "static/故事6.png",
    "static/故事7.png",
    "static/故事8.png",
]

function App() {
    const [checkedNodes, setCheckedNodes] = useState([]);

    return (
    <div className="App">
      {/*<ToDoList/>*/}
      {/*<MyTable/>*/}
      {/*<TreeView data={treeData} ></TreeView>*/}
      {/*<ToDoList/>*/}
      {/*<Table/>*/}
      {/*<TreeCategory children={treeData}></TreeCategory>*/}
      <Carousel images={images}></Carousel>
    </div>
  );
}

export default App;
