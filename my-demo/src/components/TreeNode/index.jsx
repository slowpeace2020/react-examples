import React, {useState} from "react";
import Tree from "../TreeCategory";

const TreeNode = ({node}) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.children && node.children.length>0;

    const toggleOpen = ()=> setIsOpen(!isOpen);

    return (
        <li key={node.id}>
            <div onClick={toggleOpen}>
                {node.title} {hasChildren&& (isOpen ? '-':'+')}
            </div>
            {hasChildren && isOpen && <Tree data={node.children}></Tree>}
        </li>
    )
}

export default TreeNode