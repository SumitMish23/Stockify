import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Watchlist.css";
import { AiFillCloseCircle } from "react-icons/ai";
const Watchlist = () => {
  const watchlistValue = useSelector((state) => state.watchlistReducer);
  const [list, setList] = useState(watchlistValue);
  function handleDeleteWatchlist(index) {
    setList(
      list.filter((value, currIndex) => {
        return index !== currIndex;
      })
    );
  }

  return (
    <>
   
    <div className="charts-update">
       {list.length < 1 ? (
        <p>OOPS ! You Need To Track Some Comapnies in order to see it here</p>
      ) : (
        <p>Gotcha ! Here is the list of companies you were looking for ,</p>
      )}
    </div>
    <div className="watchlist-charts">
     
      {list.map((value, index) => {
        return (
          <div className="card" key={index}>
            <div
              className="cancel"
              onClick={() => {
                handleDeleteWatchlist(index);
              }}
            >
              <AiFillCloseCircle className="watch-icon" />
            </div>
            <div className="name">{value}</div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Watchlist;
