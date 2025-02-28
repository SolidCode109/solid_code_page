import { use, useEffect } from "react";
import { menuConfig } from "./menuConfig";

const Header = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header id="header">
      <nav className="navvar navbar-expand">
        <div className="container header">
        {/* Logo Container */}
          <div className="navbar-logo">
            <a href="/">
              <img src="/" alt="Solid Code - Logo"></img>
            </a>
          </div>
          {/* Menu Container */}
          <ul className="navbar-nav items d-none d-md-block">
            {menuConfig.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  className={`nav-link ${
                    location.pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
