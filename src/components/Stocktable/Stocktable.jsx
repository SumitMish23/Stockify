import React from "react";
import { useEffect } from "react";
import "./Stocktable.css";
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../Redux/actions/index'
import { AiFillPlusCircle } from "react-icons/ai";

const Stocktable = ({ input, data, setData }) => {
  const dispatch = useDispatch()
  
  function fetchData() {
    return fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input.toLowerCase()}&apikey=CW3BD1G14KVQQX49`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  console.log(data);
  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="stocks-table">
      <table>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Region</th>
            <th>Currency</th>
            <th>MatchScore</th>
          </tr>

          {data.bestMatches?.length > 1 &&
            data.bestMatches.map((value,index) => {
              return (
                <>
                 <tr key={value["1. symbol"]} >
                  <td>{value["2. name"]}</td>
                  <td>{value["4. region"]}</td>
                  <td>{value["8. currency"]}</td>
                  <td>{value["9. matchScore"]}</td>
                  <span className="add-icon" onClick={()=>dispatch(allActions.watchlistActions.watchlist(value["2. name"]))}> <AiFillPlusCircle className="icon"/></span>
                 
                </tr>
               
                </>
               
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Stocktable;
