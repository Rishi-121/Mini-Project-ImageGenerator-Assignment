import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ImageDisplay from "./components/ImageDisplay";
import Loader from "./components/Loader";

function App() {
  const [image, setImage] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = () => {
    setError(null);
    setLoading(true);
    fetch("https://picsum.photos/500")
      .then((result) => {
        setLoading(false);
        setImage(result.url);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <div className="container text-center" style={{ padding: "2rem" }}>
        {error ? (
          <h3>Unable to Fetch</h3>
        ) : loading ? (
          <Loader />
        ) : (
          <ImageDisplay image={image} />
        )}
        <br />
        <Button className="mt-4" variant="primary" onClick={fetchImage}>
          Get New Image
        </Button>{" "}
      </div>
    </>
  );
}

export default App;
