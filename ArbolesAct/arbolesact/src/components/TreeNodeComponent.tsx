import { useState } from "react";
import type { MenuNode } from "../tree/Tree";

interface Props {
  node: MenuNode;
  onSelect: (node: MenuNode) => void;
}

export default function TreeNodeComponent({ node, onSelect }: Props) {
  const [open, setOpen] = useState(false);

  const hasChildren = node.children.length > 0;

  return (
    <div style={{ marginLeft: "10px" }}>
      <div
        onClick={() => {
          setOpen(!open);
          if (!hasChildren) {
            onSelect(node);
          }
        }}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {hasChildren ? (open ? "▼" : "▶") : "•"} {node.title}
      </div>

      {open &&
        node.children.map((child, index) => (
          <TreeNodeComponent
            key={index}
            node={child}
            onSelect={onSelect}
          />
        ))}
    </div>
  );
}