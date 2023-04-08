import Link from "next/link";

interface NavbarProps {
  /* TODO */
}

export default function Navbar(props: NavbarProps) {
  return (
    <ul className="flex flex-row">
      <li className="border">
        <Link href="#">item 1</Link>
      </li>
      <li>
        <Link href="#">item 2</Link>
      </li>
      <li>
        <Link href="#">item 3</Link>
      </li>
    </ul>
  );
}
