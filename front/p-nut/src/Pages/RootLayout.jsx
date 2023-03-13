import { Outlet } from 'react-router-dom';
import NavBar from '../UI/NavBar';

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
