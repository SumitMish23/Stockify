import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Watchlist.css";
import { AiFillCloseCircle } from "react-icons/ai";
const Watchlist = () => {
  const watchlistValue = useSelector((state) => state.watchlistReducer);
  const [list, setList] = useState(watchlistValue);
  function handleDeleteWatchlist(index) {
    setList(
      list.filter((currIndex) => {
        return index !== currIndex;
      })
    );
  }
  console.log(list);
  return (
    <>
      <div className="charts-update">
        {list.length < 1 ? (
          <p>
            OOPS ! You Need To Track Some Companies in order to see it here.
          </p>
        ) : (
          <p>Gotcha ! Here is the list of companies you were looking for ,</p>
        )}
      </div>
      <div className="watchlist-charts">
        {list.map((value, index) => {
          return (
            <div className="card" key={index}>
              <div className="cancel">
                <AiFillCloseCircle
                  className="watch-icon"
                  onClick={() => {
                    handleDeleteWatchlist(index);
                  }}
                />
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
