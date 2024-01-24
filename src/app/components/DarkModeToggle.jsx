import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  return (
    <button className="mt-2 md:mt-0">
      <FaMoon id="moon-icon" className="text-accent w-5 h-5"/>
      <FaSun id="sun-icon" className="text-accent w-5 h-5"/>
    </button>
  );
}
