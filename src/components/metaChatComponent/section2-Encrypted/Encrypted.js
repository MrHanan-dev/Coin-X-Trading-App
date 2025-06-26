import React from "react";
import messaging from "../../../assests/images/metachat/messaging.svg";
import video_call from "../../../assests/images/metachat/video-call.svg";
import channels from "../../../assests/images/metachat/channels.svg";
import file_sharing from "../../../assests/images/metachat/file-sharing.svg";
import privacy_security from "../../../assests/images/metachat/privacy-security.svg";
const Encrypted = () => {
  return (
    <section className="mc_encrypted-chatting-sec mc_sec">
      <div className="container">
        <div className="mc_encrypted-head">
          <h2>Encrypted Chatting Everywhere</h2>
          <p>Free and secure calls and messages to anyone, anywhere</p>
        </div>
        <div className="chatting-protocols">
          <div
            className="protocol aos-init"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={messaging} alt="" className="img-fluid" />
            <h3>Messaging</h3>
            <p>Send encrypted messenges worldwide to anyone</p>
          </div>
          <div
            className="protocol aos-init"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={video_call} alt="" className="img-fluid" />
            <h3>Video Call</h3>
            <p>Video call with friends and family anywhere.</p>
          </div>
          <div
            className="protocol aos-init"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={channels} alt="" className="img-fluid" />
            <h3>Channels</h3>
            <p>Create channels for your audience or friends</p>
          </div>
          <div
            className="protocol aos-init"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={file_sharing} alt="" className="img-fluid" />
            <h3>File Sharing</h3>
            <p>Share your files through the MetaChat app</p>
          </div>
          <div
            className="protocol aos-init"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={privacy_security} alt="" className="img-fluid" />
            <h3>Privacy and security</h3>
            <p>We keep your data encrypted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Encrypted;
