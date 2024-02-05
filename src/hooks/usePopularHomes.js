import {useState, useEffect} from "react";
import {getPopularHomes} from "../services/popularHomes";

export const usePopularHomes = () => {
  const [popularHomes, setPopularHomes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPopularHomes().then((homes) => {
      setLoading(false);
      setPopularHomes(homes);
    }).catch((error) => {
      setLoading(false);
      console.log(error.message);
    })
  }, [])

  return {popularHomes, loading};
}