import aIone from "../assets/animationImages/WhatsApp_Image_2022-12-10_at_22.24.48-removebg-preview.png";
import aItwo from "../assets/animationImages/WhatsApp_Image_2022-12-10_at_22.25.22-removebg-preview.png";
import aIthree from "../assets/animationImages/WhatsApp_Image_2022-12-10_at_22.25.22__1_-removebg-preview.png";
import aIfour from "../assets/animationImages/WhatsApp_Image_2022-12-10_at_22.27.29-removebg-preview.png";
import aIfive from "../assets/animationImages/WhatsApp_Image_2022-12-10_at_22.29.32-removebg-preview.png";
import aIsix from "../assets/animationImages/WhatsApp_Image_2022-12-10_at_22.29.52-removebg-preview.png";
import aIseven from "../assets/animationImages/IMG_20210826_220435-removebg-preview.png";
import aIeight from "../assets/animationImages/IMG_20211128_141709_2-removebg-preview.png";
import styled from "styled-components";

export default function LandingPageAnimation() {
  return (
    <LogoDiv2>
      <div className="logo2" style={{ animationDelay: "-0s" }}>
        <img src={aIsix} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-4s" }}>
        <img src={aItwo} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-8s" }}>
        <img src={aIthree} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-12s" }}>
        <img src={aIfour} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-16s" }}>
        <img src={aIfive} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-20s" }}>
        <img src={aIone} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-24s" }}>
        <img src={aIseven} alt="animation" />
      </div>
      <div className="logo2" style={{ animationDelay: "-28s" }}>
        <img src={aIeight} alt="animation" />
      </div>
    </LogoDiv2>
  );
}

const LogoDiv2 = styled.div`
  * {
    grid-column: 1;
    grid-row: 1;
  }
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 100%;
  height: 100%;
  width: 100%;
  .logo2 {
    animation: spinAround2 32s linear infinite;
    align-self: center;
    justify-self: center;
    display: block;
    font-size: 3.5rem;
    border-radius: 50%;
    svg {
      animation: rotate2 16s linear infinite;
      color: #4f45e4;
    }
    img {
      z-index: 1;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      animation: rotate2 16s linear infinite;
    }
    @keyframes rotate2 {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @keyframes spinAround2 {
    from {
      transform: rotate(0deg) translate(470px);
    }
    to {
      transform: rotate(-360deg) translate(470px);
    }
  }

  @media only screen and (max-width: 768px) {
    .logo2 {
      overflow: hidden;
      padding: 1rem;
      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
    }
    @keyframes spinAround2 {
      from {
        transform: rotate(0deg) translate(250px);
      }
      to {
        transform: rotate(360deg) translate(250px);
      }
    }
  }
`;
