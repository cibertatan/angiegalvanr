import { listNav } from "./constants";
import MobileMenu from "./menuToggle";

export function Header() {
  return (
    <nav className="bg-(--color-acento) border-b-[3px] border-(--divisor-border) flex flex-row w-full max-w-[100vw] justify-between items-center overflow-visible h-[100px] p-[0_60px] lg:relative sticky top-0 z-50">
      {/* PC only: show nav links and menu */}
      <div className="hidden lg:flex justify-between items-center px-4 sm:px-6 lg:px-8 h-full w-full mx-auto">
        <div className="flex items-center space-x-4 justify-around w-full">
          <a href="/" className="logo-button">
            <img
              src="/assets/img/logo-angie.png"
              alt="Logo Angie Galván R"
              className="w-[70px] h-[70px] object-contain"
            />
          </a>
          {listNav.map((item) => (
            <a href={item.href} key={item.name} className="nav-button-3d">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {/* Tablet & Mobile only: show logo and menu */}
      <div className="flex lg:hidden h-full w-full bg-yellow-500">
        <div className="w-full flex relative bg-green-500">
          <MobileMenu />
          <div className="items-center justify-center flex bg-red-500">
            <a href="/" className="logo-button">
              <img
                src="/assets/img/logo-angie.png"
                alt="Logo Angie Galván R"
                className="w-[70px] h-[70px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}