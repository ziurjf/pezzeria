import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import RegisterPage from "./components/RegisterPage";
// import LoginPage from "./components/LoginPage";
// import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

const App = () => (
  <div>
    <Navbar />

    {/* Para mostrar el listado de pizzas (Hito 4 consumiendo API):
        <Home /> */}

    {/* Visualizar formulario de registro:
        <RegisterPage /> */}

    {/* Visualizar formulario de login:
        <LoginPage /> */}

    {/* Visualizar carrito simulado:
        <Cart /> */}

    {/* Mostrar detalle de una pizza (Hito 4):
    */}
    <Pizza />

    <Footer />
  </div>
);

export default App;

