import React, {Component} from 'react';
import TreeCategory from "../TreeCategory";

const TreeNode = ({node})=>{
    return (
        <div>
            {node.title}
            {node.children &&node.children.length>0 &&(
                <TreeCategory children={node.children}></TreeCategory>
            )}

        </div>
    )
}
export default TreeNode;