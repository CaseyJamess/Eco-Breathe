import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  return (
    <button>
      <FaMoon id="moon-icon" className="text-accent w-6 h-6"/>
      <FaSun id="sun-icon" className="text-accent w-6 h-6"/>
    </button>
  );
}
