import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CustomRTK from "./CustomRTK";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //to line up the reqest and response first in first out, while respond everytime user type the keyword in the search bar
    // using axios controller, need to send with url
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`/api/products?search=${search}`, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        //axios controller configuration
        if (axios.isCancel(error)) {
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //axios contoller configuration
    return () => {
      controller.abort();
    };
  }, [search]);

  //alternet of above code customer customRTK generic function which is accepting URL

  //const { products, error, loading } = CustomRTK("api/products");

  // if (loading) {
  //   return (
  //     <>
  //       <div className="App">
  //         <header className="App-header">
  //           <h2>Loading...</h2>
  //         </header>
  //       </div>
  //     </>
  //   );
  // }

  // if (error) {
  //   return (
  //     <>
  //       <div className="App">
  //         <header className="App-header">
  //           <h2>something went wrong...</h2>
  //         </header>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="App">
        <header className="App-header">
          {loading && <h2>Loading...</h2>}
          {error && <h2>something went wrong...</h2>}
          <h1>Search with keyword "pro","htc","ultra"</h1>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h3>Number of Products : {products.length}</h3>
        </header>
      </div>
    </>
  );
}

export default App;
