import React, {Component} from 'react';
import TreeNode from "../../../TreeNode";

const  TreeCategory =({children})=>{
    return (
        <ul>
            {children.map(item=>(<TreeNode key={item.id} node={item}></TreeNode>))}
        </ul>
    )
}

export default TreeCategory;