import { useContext } from 'react';
import "./app.css";
import {ReactComponent as IconStar} from "./assets/icon-star.svg";
import RatingItem from "./components/RatingItem";
import { RatingContext } from './Context/RatingProvider';
import { Link } from 'react-router-dom';

const App = () => {
  const { rating, setRating } = useContext(RatingContext);

  return (
    <div className="app">
      <div className="ratingContainer">
        <div className="star">
          <IconStar />
        </div>
        <h1 className="ratingTitle">How did we do?</h1>
        <p className="ratingText">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="ratings">
          <RatingItem rating={rating} setRating={setRating} score={1}/>
          <RatingItem rating={rating} setRating={setRating} score={2}/>
          <RatingItem rating={rating} setRating={setRating} score={3}/>
          <RatingItem rating={rating} setRating={setRating} score={4}/>
          <RatingItem rating={rating} setRating={setRating} score={5}/>
        </div>
        <Link to="/submit" className="submitBtn">SUBMIT</Link>
      </div>
    </div>
  );
}

export default App;
