import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="border-b border-border bg-background px-6 py-4">
    <Link to="/" className="flex items-center gap-2">
      <Calendar className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold text-foreground">SmartEvent</span>
    </Link>
  </header>
);

export default Header;
