import React, {useState, useEffect} from 'react'
import "../styles/main.css"
import Girl from '../images/technologyGirl.png'

const Main = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(JSON.stringify(items, null, 2));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <section>
          <div className='container-fluid'>
            <div className='text'>
              <span><h5>SUMMER 2020</h5></span>
              <h1>NEW COLLECTION</h1>
              <h4>We know how large objects will act, but thing on a small scale.</h4>
              <button>SHOP NOW</button>
            </div>
            <div className='image'><img src={Girl} alt='Girl Picture (.png)' /></div>
          </div>
        </section>

        {/* <section>
          {Object.keys(items).forEach( key => (
            key.map(x=> {console.log(x)})
          )
          )}
        </section> */}
      </main>
    );
  }
}

export default Main