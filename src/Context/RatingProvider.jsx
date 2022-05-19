import { createContext, useState } from 'react';

export const RatingContext = createContext();

export const RatingProvider = ({children}) => {
  const [rating, setRating] = useState(0);
  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  )
}
