import React from "react";
 import "../../assests/css/presale.css";
const Presale = () => {
  return (
    <section className="presale-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="presale-inner">
              <h1>The pre-sale starts on 30-04-2022</h1>
              <h3>
                Don’t want to miss the pre-sale date? Enter your email and we
                will get you up-to-date with pre-sale launch and temporary
                actions.
              </h3>
              <div className="presale-email-wrap">
                <h5>Keep me up with the release date and presale actions!</h5>
                <form action="">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                    <button className="btn_submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
