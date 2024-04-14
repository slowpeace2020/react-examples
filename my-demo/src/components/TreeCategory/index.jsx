import React from "react";
import TreeNode from "../TreeNode";

const Tree =({data})=>{
    return (
        <ul>
            {data.map(item=>(
                <TreeNode key={item.id} node={item}></TreeNode>
            ))}
        </ul>
    )
}

 export default Tree