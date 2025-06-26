import React from "react";

const Network = () => {
  return (
    <section className="peer-to-peer-sec">
      <div className="container">
        <div className="peer-head blockware-head">
          <h2>Peer-2-Peer Network</h2>
          <p>
            As a distributed ledger technology, blockchain records transactions
            as an immutable timestamped digital block that indicates senders and
            receivers.
          </p>
        </div>
        <div
          className="peer-to-peer-content aos-init"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3>Resources Provided</h3>
          <p>
            Each computer in a P2P network provides resources to the Network and
            consumes resources that the network provides. Resources such as
            files, printers, storage, bandwidth and processing power can be
            shared between various computers in the network.
          </p>
        </div>
        <div
          className="peer-to-peer-content aos-init"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h3>Overlaying Virtual Network</h3>
          <p>
            The network uses the physical connection to transfer data while the
            virtual overlay allows the computers on the network to communicate
            with each other.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Network;
