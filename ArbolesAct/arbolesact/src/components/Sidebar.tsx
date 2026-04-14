import TreeNodeComponent from "./TreeNodeComponent";
import { Tree } from "../tree/Tree";
import { menuData } from "../data/menuData";
import type { MenuNode } from "../tree/Tree";

const tree = new Tree(menuData);

interface Props {
  onSelect: (node: MenuNode) => void;
}

export default function Sidebar({ onSelect }: Props) {
  return (
    <div
      style={{
        width: "250px",
        background: "#1e1e2f",
        color: "white",
        padding: "1rem",
        height: "100vh"
      }}
    >
      <h3>📂 Menu</h3>
      <TreeNodeComponent node={tree.root} onSelect={onSelect} />
    </div>
  );
}