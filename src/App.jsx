import Card from "./components/Card";
import { useEffect, useState } from "react";
import Skeleton from "./components/Skeleton";
import { config } from "./config";
import img1 from "./assets/img1.jpg";

function App() {
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 800);
  }, []);

 
  return (
    <div className="h-screen w-screen flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden duration-300">
    
      {loading ? (
        <div className="flex justify-center items-center mx-auto">
          <Skeleton />
        </div>
      ) : (
        config.map((flower, index) => (
          <div key={index} className="min-w-full min-h-full flex justify-center items-center snap-start">
            <Card image={flower.img} title={flower.title} description={flower.description} tags={flower.tags} />

          </div>
        ))
      )}
    </div>

    
  );
}

export default App;
