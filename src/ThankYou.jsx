import { useContext } from 'react';
import "./app.css";
import { RatingContext } from './Context/RatingProvider';
import {ReactComponent as ThankYouImg} from "./assets/illustration-thank-you.svg";

const ThankYou = () => {
  const { rating, setRating } = useContext(RatingContext);

  return (
    <div className="app">
      <div className="ratingContainer">
        <div class="thankYouImg">
          <ThankYouImg/>
        </div>
        <p className="resultText">You selected {rating} out of 5</p>
        <h1 className="ratingTitle" style={{ textAlign: "center" }}>Thank you!</h1>
        <p className="ratingText" style={{ textAlign: "center" }}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default ThankYou