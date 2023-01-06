import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMaterialui,
  SiStyledcomponents,
  SiReactrouter,
  SiExpress,
  SiPassport,
  SiMongodb,
} from "react-icons/si";
import styled from "styled-components";



export default function Animations() {
  return (
    <>
      <LogoDiv>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-0s" }}>
          <SiMaterialui />
        </div>

        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-4s" }}>
          <SiStyledcomponents />
        </div>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-8s" }}>
          <SiReactrouter />
        </div>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-12s" }}>
          <FaNodeJs />
        </div>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-16s" }}>
          <SiExpress />
        </div>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-20s" }}>
          <SiPassport />
        </div>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-24s" }}>
          <SiMongodb />
        </div>
        <div className="logo text-gray-800 dark:text-indigo-50" style={{ animationDelay: "-28s" }}>
          <FaReact />
        </div>
      </LogoDiv>
    </>
  );
}

const LogoDiv = styled.div`
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
  .logo {
    animation: spinAround 32s linear infinite;
    align-self: center;
    justify-self: center;
    display: block;
    font-size: 3.5rem;
    svg {
      animation: rotate 16s linear infinite;
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @keyframes spinAround {
    from {
      transform: rotate(0deg) translate(270px);
    }
    to {
      transform: rotate(360deg) translate(270px);
    }
  }
  @media only screen and (max-width: 768px) {
    .logo {
      font-size: 2.5rem;
    }
    @keyframes spinAround {
      from {
        transform: rotate(0deg) translate(150px);
      }
      to {
        transform: rotate(-360deg) translate(150px);
      }
    }
  }
`;
