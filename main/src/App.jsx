import { Navbar, Welcome, Services, Transact, Footer } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transact />
      <Footer />
    </div>
  );
};

export default App;
