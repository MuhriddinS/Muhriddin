import { NavLink} from "react-router-dom";
import "./Navbar.css";
import { Sun, Moon } from "../../assets/svg";

export default function Navbar() {
  return (
    <div className="header">
      <NavLink to={"/"} activeClassname="active" className="logo">
        <p className="logo">35-maktab</p>
      </NavLink>
      <NavLink to={"/"} activeClassname="active" className="about">
        Maktab haqida
      </NavLink>{" "}
      <NavLink to={"/"} activeClassname="active" className="about">
        Maktab tarixi
      </NavLink>{" "}
      <NavLink to={"/"} activeClassname="active" className="about">
        Manzil
      </NavLink>
      <NavLink to={"/"} activeClassname="active" className="UzRu">
        UZ / RU
      </NavLink>
      <NavLink to={"/"} activeClassname="active" className="Sun">
        <Sun />
      </NavLink>
      <NavLink to={"/"} activeClassname="active" className="Sun">
        <Moon />
      </NavLink>
    </div>
  );
}
