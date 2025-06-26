import React from "react";
import free_channel from "../../../assests/images/metachat/free-channel.png";
import paid_channel from "../../../assests/images/metachat/paid-channels.png";
const Earning = () => {
  return (
    <section className="mc_earning-sec mc_sec">
      <div className="container">
        <div className="earning-head">
          <h2>Start Earning In Metachat</h2>
          <p>
            Communities on MetaChat bring people together — Take part in a
            conversation on any topic you’re passionate about.
          </p>
        </div>
        <div className="channels-main">
          <div className="channel-subscription">
            <img
              src={free_channel}
              alt=""
              data-aos="fade-right"
              data-aos-delay="200"
              className="aos-init"
            />
            <div
              className="channel-content aos-init"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3>Free channels</h3>
              <p>
                Create worldwide channels with unlimited amount of users who can
                join your channel for free.{" "}
              </p>
              <p>
                Create your own admins, teams and manage everything by yourself
                or other team members that you have given permissions.
              </p>
              <a href="">Download Now</a>
            </div>
          </div>
          <div className="channel-subscription paid-channels">
            <img
              src={paid_channel}
              className="aos-init"
              alt=""
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <div
              className="channel-content aos-init"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3>Paid channels</h3>
              <p>
                Allow you and/ or your team to broadcast messages to an
                unlimited amount of subscribers which are paying to be in your
                group.
              </p>

              <p>
                To get in your group, users will have to pay a monthly fee in
                CNX so they can be subscribed to your channel.
              </p>
              <a href="">Download Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earning;
