import { listNav } from "./constants";

export function Header() {

  return (
    <nav className="bg-(--color-acento) border-b-[2px] border-(--color-blanco) overflow-hidden h-[100px] p-[0_60px]"
    >
      <div className=" flex justify-between items-center px-4 sm:px-6 lg:px-8 h-full w-full mx-auto">
        <div className="flex items-center justify-around w-full">
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
    </nav>
  )
}