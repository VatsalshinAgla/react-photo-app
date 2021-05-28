import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import CardImage from './components/CardImage';

const apiKey = 'ldEOch1ylhz3dJ6gv5chlrJ9vqLPjZDZN-Mk3p-hWwI';

const App = () => {
  const [images, setImages] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  let url = `https://api.unsplash.com/photos?query=india&client_id=${apiKey}&page=${pageNo}&per_page=18&orientation=squarish`;

  const fetchImages = async () => {
    const { data } = await Axios.get(url);
    console.log(data);
    setImages(data);
  };

  const incPage = () => {
    if (pageNo <= 3) setPageNo(pageNo + 1);
  };

  const decPage = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  useEffect(() => {
    fetchImages();
  }, [url]);

  const pagination = () => (
    <nav aria-label="pagination">
      <ul className="pagination">
        <li className="page-item" onClick={() => decPage()}>
          <div className="page-link">Previous</div>
        </li>
        <li
          className={'page-item ' + (pageNo === 1 ? 'active' : '')}
          onClick={() => setPageNo(1)}
        >
          <div className="page-link">1</div>
        </li>
        <li className={'page-item ' + (pageNo === 2 ? 'active' : '')}>
          <div className="page-link" onClick={() => setPageNo(2)}>
            2
          </div>
        </li>
        <li
          className={'page-item ' + (pageNo === 3 ? 'active' : '')}
          onClick={() => setPageNo(3)}
        >
          <div className="page-link">3</div>
        </li>
        <li className="page-item" onClick={() => incPage()}>
          <div className="page-link">Next</div>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <div className="container">
        <div className="row">
          {images.map(image => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
              key={image.id}
            >
              <CardImage key={image.id} image={image} />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 offset-lg-4 offset-md-4">
            <div className="text-center">{pagination()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
