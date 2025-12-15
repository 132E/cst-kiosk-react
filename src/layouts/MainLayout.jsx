import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-sky-800 text-slate-100">
      {/* Top Nav */}
      <header className="border-b border-sky-800 bg-horizon-blue/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-wide">
            <NavLink 
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-teal-300 ${
                  isActive ? "text-teal-300" : "text-slate-300"
                }`
              }
            >
            CST Industrial Storage</NavLink>
          </div>

          <div className="flex gap-4 text-sm">
            <NavLink
              to="/brochures"
              end
              className={({ isActive }) =>
                `hover:text-teal-300 ${
                  isActive ? "text-teal-300" : "text-slate-300"
                }`
              }
            >
              BROCHURES
            </NavLink>


            <NavLink
              to="/specs"
              className={({ isActive }) =>
                `hover:text-teal-300 ${
                  isActive ? "text-teal-300" : "text-slate-300"
                }`
              }
            >
              SPECS
            </NavLink>

            <NavLink
              to="/images"
              className={({ isActive }) =>
                `hover:text-teal-300 ${
                  isActive ? "text-teal-300" : "text-slate-300"
                }`
              }
            >
              IMAGES
            </NavLink>
            
            <NavLink
              to="/media"
              className={({ isActive }) =>
                `hover:text-teal-300 ${
                  isActive ? "text-teal-300" : "text-slate-300"
                }`
              }
            >
              MEDIA
            </NavLink>

          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
