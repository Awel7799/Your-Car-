import Header from "./component/Header/Header"
import CartProvider from "./component/cartContext/CartProvider"
import CartDetail from "./component/cartDetail/cartDetial"

function App() {
  return (
    <>
    <CartProvider>
        <Header />
        <CartDetail />

    </CartProvider>
    </>
  )
}

export default App
