// Step 1: Create context
const CartContext = createContext();

// Step 2: Provider and Consumer in sync for state data 
function App() {
  const [cart, setCart] = useState([]);
  // The Provider allows child components to access 'cart' and 'setCart'
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <ProductList />
    </CartContext.Provider>
  );
}

function Navbar() {
  // The Consumer, useContext Hook, accesses 'cart' here 
  const { cart } = useContext(CartContext);
  return <h1>Shopping Cart ({cart.length})</h1>;
}

function ProductList() {
  // The Consumer, useContext Hook, accesses 'cart' and 'setCart' here 
  const { cart, setCart } = useContext(CartContext);
  // Add products here
}
