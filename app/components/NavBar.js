import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const NavBar = () => {
  return (
    <nav className="text-colorDarkBlue  flex justify-between p-4 w-full fixed top-0 bg-transparent z-10 px-10">
      <Link
        href="/"
        className={`${dancingScript.className} text-3xl font-black`}
      >
        Razvan Plîngu
      </Link>
      <div className="flex items-center gap-5 ">
        <div className="hidden md:flex gap-10 font-secondary">
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#skillsSection">Tools and Technologies</Link>
          <Link href="#projectsSection">My Projects</Link>
        </div>
        <div className="place-self-end">{/* <MobileNavigation /> */}</div>
      </div>
    </nav>
  );
};

export default NavBar;
