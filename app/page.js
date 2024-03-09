import NavBar from "./components/NavBar";
import navItems from "./utils/navItems";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />

      {navItems.map((item, index) => {
        return (
          <div key={index} className="home-section" id={item.href}>
            {item.name}
          </div>
        );
      })}
    </main>
  );
}
