export interface MenuNode {
  title: string;
  content?: string;
  children: MenuNode[];
}

export class Tree {
  root: MenuNode;

  constructor(root: MenuNode) {
    this.root = root;
  }

  // DFS (Challenge 08)
  dfs(node: MenuNode = this.root, result: string[] = []): string[] {
    result.push(node.title);
    node.children.forEach(child => this.dfs(child, result));
    return result;
  }

  // BFS (Challenge 08)
  bfs(): string[] {
    const queue: MenuNode[] = [this.root];
    const result: string[] = [];

    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.title);
      queue.push(...node.children);
    }

    return result;
  }

  // Buscar nodo (Challenge 08)
  find(title: string, node: MenuNode = this.root): MenuNode | null {
    if (node.title === title) return node;

    for (const child of node.children) {
      const found = this.find(title, child);
      if (found) return found;
    }

    return null;
  }
}