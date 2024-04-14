import React, {useState} from "react";
import Tree from "../Tree";

const TreeNode = ({ node, checkedNodes, onCheck }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    return (
        <li>
            <div onClick={() => setIsOpen(!isOpen)}>
                <input
                    type="checkbox"
                    checked={checkedNodes.includes(node.id)}
                    onChange={(e) => onCheck(node, e.target.checked)}
                />
                {node.title}
            </div>
            {hasChildren && isOpen && (
                <ul>
                    {node.children.map(child => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            checkedNodes={checkedNodes}
                            onCheck={onCheck}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}


export default TreeNode