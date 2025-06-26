import React, { useState, useEffect } from "react";
import axios from "axios";
import btc from "../../../assests/images/walletx/btc.png";
import cnx from "../../../assests/images/walletx/cnx.png";
import eth from "../../../assests/images/walletx/eth.png";
import ada from "../../../assests/images/walletx/ada.png";
const Trade = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="default-padd-walletx trade-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hd-wraper hd-black">
              <h2>
                <span></span> Trade With Confidence
              </h2>
              <p>
                Trade, hold and transfer your crypto currencies 24 hours a day
                anywhere and with anyone in the world.
              </p>
            </div>
            <div className="table-responsive aos-init" data-aos="fade-up"
                 data-aos-delay="100">
              <table className="table">
                <tbody>
                  {filteredCoins.map((coin) => {
                    return (
                      <tr key={coin.symbol}>
                        <th scope="row">
                          {coin.name} <span>{coin.symbol.toUpperCase()}</span>
                        </th>
                        <td>
                          <strong>
                            {"$"}
                            {coin.current_price}
                          </strong>
                        </td>
                        {coin.price_change_percentage_24h < 0 ? (
                          <td
                            className="coin-percent red"
                            style={{ color: "red" }}
                          >
                            <strong>{coin.price_change_percentage_24h.toFixed(3)}%</strong>

                          </td>
                        ) : (
                          <td
                            className="coin-percent green"
                            style={{ color: "green" }}
                          >
                            <strong>+{coin.price_change_percentage_24h.toFixed(3)}%</strong>

                          </td>
                        )}
                        <td>
                          <img src={btc} alt="" />
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <th scope="row">
                      CoinX <span>CNX</span>
                    </th>
                    <td>
                      {" "}
                      <strong>$0.08</strong>
                    </td>
                    <td
                      className="coin-percent green"
                      style={{ color: "green" }}
                    >
                      <b>+236.51%</b>
                    </td>
                    <td>
                      <img src={cnx} alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
