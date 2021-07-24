import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/about" && (
        <footer>
          <p>Copyright</p>
          <Link to="/about">About</Link>
        </footer>
      )}
    </>
  );
};
