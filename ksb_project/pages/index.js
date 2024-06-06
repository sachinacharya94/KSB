

import { useEffect, useState } from "react";


export default function Home() {
  let [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(err => console.log(err))
  }, [])

  console.log(categories, "Categories")

  return (


    <div>




      <h3>
        Hello
        Hii

      </h3>
      <h3>
        Hello
      </h3>



    </div>





  );
}
