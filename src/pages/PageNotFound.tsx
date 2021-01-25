import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageNotFound() {
  let location = useLocation();

  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) {
      title.innerHTML = " · 404";
    }
  }, []);

  return (
    <div className="PNF-container">
      <h2>No matches for {location.pathname}</h2>
    </div>
  );
}

export default PageNotFound;
