import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TripCard from "./components/TripCard";
import Nav from "./components/Nav";

function App() {
  const [input, setInput] = useState("");
  const [productList, setProductList] = useState([]);

  const getTrips = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      setProductList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTagClick = (tag) => {
    setInput((prevInput) => (prevInput ? `${prevInput} ${tag}` : tag));
  };

  useEffect(() => {
    getTrips();
  }, [input]);

  return (
    <div className="App">
      <main className="m-auto w-full max-w-screen-lg flex flex-col items-center">
        <Nav input={input} setInput={setInput} />
        <TripCard
          productList={productList}
          setInput={setInput}
          onTagClick={handleTagClick}
        />
      </main>
    </div>
  );
}

export default App;
