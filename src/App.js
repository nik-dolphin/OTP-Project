import "./App.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";

function App() {
  const [OTP, setOTP] = useState("");
  return (
    <>
      <div className="field">
        <div id="divOuter">
          <div id="divInner">
            <input id="inputOTP" type="text" maxLength="5" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={5}
          otpType="text"
          disabled={false}
          // secure
        />
        <ResendOTP
          handelResendClick={() => console.log("Resend clicked")}
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}

export default App;
