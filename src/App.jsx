import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  
  const [urlValue, setUrlValue] = useState("");

  const [data, setData] = useState(null);


  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
   
    if(!urlValue){
      return alert('Please Enter URL')
    }
    setLoading(true);
    try {
      const res = await fetch(`https://you-tube-video-downloder-backend.vercel.app/download?url=${urlValue}`);
      const data = await res.json();
      setData(data);
      setUrlValue("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  };
  return (
    <div className=" ">
      <Input
        urlValue={urlValue}
        setUrlValue={setUrlValue}
        handleDownload={handleDownload}
      />
      <Output
        data={data}
        loading={loading}
      />
    </div>
  );
}

export default App;