import React from "react";
import { useEffect } from "react";
import "./Stocktable.css";
import {useDispatch} from 'react-redux';
import allActions from '../../Redux/actions/index'
import { AiFillPlusCircle } from "react-icons/ai";

const Stocktable = ({ input, data, setData }) => {
  const dispatch = useDispatch()
  
  async function fetchData() {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input.toLowerCase()}&apikey=CW3BD1G14KVQQX49`
    );
    const data = await response.json();
    return setData(data);
  }
  console.log(data);
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                 <tr key={index} >
                  <td>{value["2. name"]}</td>
                  <td>{value["4. region"]}</td>
                  <td>{value["8. currency"]}</td>
                  <td>{value["9. matchScore"]}</td>
                 <AiFillPlusCircle  onClick={()=>dispatch(allActions.watchlistActions.watchlist(value["2. name"]))} className="icon"/>
                 
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
