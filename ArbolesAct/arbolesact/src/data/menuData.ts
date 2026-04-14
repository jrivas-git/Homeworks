import type { MenuNode } from "../tree/Tree";

export const menuData: MenuNode = {
  title: "Root",
  children: [
    {
      title: "Inicio",
      content: "Bienvenido a la página principal",
      children: []
    },
    {
      title: "Productos",
      children: [
        {
          title: "Celulares",
          content: "Aquí puedes ver los mejores celulares 📱",
          children: []
        },
        {
          title: "Laptops",
          content: "Explora laptops potentes 💻",
          children: []
        }
      ]
    },
    {
      title: "Servicios",
      children: [
        {
          title: "Reparación",
          content: "Servicio técnico especializado 🔧",
          children: []
        },
        {
          title: "Soporte",
          content: "Atención al cliente 24/7 ☎️",
          children: []
        }
      ]
    }
  ]
};