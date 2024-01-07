import Footer from "../components/Footer";
import Header from "../components/Header";

type RootLayoutProps = {
  children: JSX.Element;
};

// app layout container to render content
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div
      role="application"
      aria-label="App Layout"
      className="flex flex-col h-screen  justify-items-center"
    >
      <Header />
      <main role="main" className="flex-grow bg-page text-default-text p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
