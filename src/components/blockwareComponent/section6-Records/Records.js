import React from "react";

const Records = () => {
  return (
    <section className="records-store-sec">
      <div className="container">
        <div className="records-head blockware-head">
          <h2>Records Stored &deg; Secured</h2>
          <p>Records cannot be altered. That makes our network safe.</p>
        </div>
        <div className="saving-records-process">
          <ul>
            <li className="aos-init" data-aos="fade-right" data-aos-delay="100">
              {" "}
              Non-repudiation: A user cannot deny about an action that he/she
              has performed on the blockchain.
            </li>
            <li className="aos-init" data-aos="fade-right" data-aos-delay="200">
              {" "}
              Private Key: When user does a transaction, he will have to use his
              private key.
            </li>
            <li className="aos-init" data-aos="fade-right" data-aos-delay="300">
              {" "}
              Wallet address for every coin? {"("}Very basic terms in Blockchain
              {")"}
            </li>
            <li className="aos-init" data-aos="fade-right" data-aos-delay="400">
              {" "}
              Support for new tokens and NTFs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Records;
