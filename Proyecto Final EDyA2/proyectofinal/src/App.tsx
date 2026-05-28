import AppRoutes from "./Routes/AppRoutes";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { FavoritesProvider } from "./Context/FavoritesContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <AppRoutes />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}