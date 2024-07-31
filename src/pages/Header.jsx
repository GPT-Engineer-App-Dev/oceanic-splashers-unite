import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">Cercle des Nageurs Marins</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "About", "Events", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Button variant="ghost" asChild>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;