import "./styles.css";
import { Container } from "reactstrap";
import qrcode from "./images/image-qr-code.png";

export default function App() {
  return (
    <>
    
      <div className="App">
        <Container className="container">
          <img src={qrcode} alt="qr code" id="qr"></img>
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </Container>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/samantha-dorrell-307377188/">Samantha Dorrell</a>.
      </div>

  </>
  );
}
