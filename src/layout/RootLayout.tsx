import Footer from "../components/Footer";
import Header from "../components/Header";

type RootLayoutProps = {
  children: JSX.Element;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex flex-col h-screen  justify-items-center">
      <Header />
      <main role="main" className="flex-grow bg-page text-default-text p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
