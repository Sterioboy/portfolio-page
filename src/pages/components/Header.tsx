import type { PropsWithChildren } from "../../types/props-with-children";

export function Header() {
  return (
    <header className="flex h-6 w-full items-center justify-start bg-opacity-0 px-4 text-white">
      <nav className="flex items-center py-4 ">
        <NavLink href="">k-sterio</NavLink>
      </nav>
    </header>
  );
}

function NavLink(props: { href: string } & PropsWithChildren) {
  return (
    <a href={props.href} className="shrink-0 text-start font-bold">
      {props.children}
    </a>
  );
}
