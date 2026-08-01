import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 bg-zinc-950 p-8 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;