import React from "react";
import { useEffect, useState } from "react";
import "./Stocktable.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions/index";
import { AiFillPlusCircle } from "react-icons/ai";

const Stocktable = ({ input, data, setData }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState();
  const watchlistValue = useSelector((state) => state.watchlistReducer);
  console.log(watchlistValue);

  function handleClickedIcon(Clickedindex) {
    console.log(clicked);
    console.log(Clickedindex);
    return Clickedindex;
  }

  async function fetchData() {
    const response = await fetch(
      `https://dev.portal.tradebrains.in/api/search?keyword=${input.toLowerCase()}&length=10`
    );
    const data = await response.json();
    return setData(data);
  }
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
            {/* <th>MatchScore</th> */}
          </tr>

          {data.length > 1 &&
            data.map((value, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{value.company}</td>
                    <td>{value.symbol}</td>
                    <td>{value.type}</td>
                    <AiFillPlusCircle
                      onClick={() => {
                        dispatch(
                          allActions.watchlistActions.watchlist(value.company)
                        );
                        setClicked(index);
                      }}
                      className={watchlistValue.includes(value.company)? "icon clicked" : "icon"}
                    />
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
