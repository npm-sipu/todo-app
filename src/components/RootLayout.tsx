import { Outlet } from "react-router";
import Header from "./Header";

const RootLayout: React.FC = () => {
  return (
    <div className=''>
      <Header />

      <main className='h-screen box-border'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
