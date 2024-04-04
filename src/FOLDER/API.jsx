import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from "./apiSlice";

const API = () => {
  const dispatch = useDispatch();
  const { apiData, loading, error } = useSelector((state) => state.apiCall);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  // Render logic based on apiData, loading, error
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {apiData && (
        <ul>
          {apiData.map((data, index) => (
            <li key={index}>{/* Render your data here */}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default API;
