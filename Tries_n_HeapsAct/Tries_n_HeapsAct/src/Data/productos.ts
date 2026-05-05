import { Tries } from "../Tries/Tries";

const trie = new Tries();


const productos = [
  { name: "air max", popularity: 90 },
  { name: "air force", popularity: 95 },
  { name: "air jordan", popularity: 85 },
  { name: "adidas boost", popularity: 80 }
];

productos.forEach(p => {
  trie.insert(p.name, p);
});

export default trie;