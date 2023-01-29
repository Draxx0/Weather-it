import Header from "../components/Header/Header";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="main-content">
          <HeaderNavigation />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
