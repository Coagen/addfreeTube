import { useState } from "react";
import Searchtube from "./component/Searchtube";
import Tubefree from "./component/Tubefree";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
export default function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header>
        <Searchtube setSearch={setSearch} />
      </Header>
      <Tubefree search={search} />
      <Footer />
    </div>
  );
}
