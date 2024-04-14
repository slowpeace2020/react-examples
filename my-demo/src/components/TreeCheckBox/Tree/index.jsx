import React, { useState, useEffect } from 'react';
import TreeNode from "../TreeNode";

function TreeView({ data }) {
    const [checkedNodes, setCheckedNodes] = useState([]);

    const handleCheck = (node, isChecked) => {
        setCheckedNodes(prev => {
            let newChecked = new Set(prev);
            if (isChecked) {
                newChecked.add(node.id);
                if (node.children) {
                    node.children.forEach(child => handleCheck(child, isChecked));
                }
            } else {
                newChecked.delete(node.id);
                if (node.children) {
                    node.children.forEach(child => handleCheck(child, isChecked));
                }
            }
            return [...newChecked];
        });
    };

    useEffect(() => {
        const updateParentNodes = () => {
            const updateParent = (node) => {
                if (!node) return;

                const childrenChecked = node.children.every(child => checkedNodes.includes(child.id));
                if (childrenChecked) {
                    setCheckedNodes(prev => [...new Set([...prev, node.id])]);
                } else {
                    setCheckedNodes(prev => prev.filter(id => id !== node.id));
                }
            };

            data.forEach(rootNode => {
                if (rootNode.children) {
                    rootNode.children.forEach(childNode => {
                        updateParent(childNode);
                    });
                }
            });
        };

        updateParentNodes();
    }, [checkedNodes, data]);

    return (
        <ul>
            {data.map(item => (
                <TreeNode
                    key={item.id}
                    node={item}
                    checkedNodes={checkedNodes}
                    onCheck={handleCheck}
                />
            ))}
        </ul>
    );
}

export default TreeView
