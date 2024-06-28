import { memo } from "react";

const Footer = memo(function Footer() {
  console.log("footer RR");
  return (
    <footer className="w-full px-4 py-3">
      <span className="text-sm text-red-900">
        &copy; Copyright FreeTube co.
      </span>
    </footer>
  );
});
export default Footer;
