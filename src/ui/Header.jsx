// eslint-disable-next-line react/prop-types
function Header({ children }) {
  console.log("HEADER RR");
  return (
    <header className="flex w-full items-center justify-around px-4 py-3">
      <h1 className="text-xl font-bold text-red-600">ADD FREE TUBE📺</h1>
      {children}
    </header>
  );
}

export default Header;
