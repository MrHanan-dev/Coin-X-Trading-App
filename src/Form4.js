import PersonIcon from "@mui/icons-material/Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./navbar";

export default function Form4() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <div class="container w-50  ">
          <div class="  py-5 text-center justify-content-center">
            <div class="my-5">
              <h1 class="my-5 fw-bolder text-white ">Payment Successful</h1>
              <p class="lead text-white fs-4 ">
                After the payment you will receive an email with the login
                details for WalletX. There you can see your coins you have
                bought during the presale. After the payment you will receive an
                wmail with the login details for WalletX. There you can see your
                coins you have bought during the presale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
