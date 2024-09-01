import { Link } from "react-router-dom";
import "./App.scss";

import appStoreSvg from "./assets/appstore.webp";
import playStoreSvg from "./assets/playstore.webp";

function App() {
  return (
    <div className="App">
      <div className="sangsang">
        <div className="image-crop">
          <img src="/sangsang.png" alt="" />
        </div>
      </div>
      <div className="heading">빠른상상랩</div>
      <div className="desc">한동대학교 상상랩 예약 서비스</div>
      <div className="icons tb-margin">
        <div className="app">
          <Link to="/ios">
            <img src={appStoreSvg} alt="" />
          </Link>
        </div>
        <div className="play">
          <Link to="/android">
            <img src={playStoreSvg} alt="" />
          </Link>
        </div>
      </div>
      <div>
        * 구글 플레이스토어는 베타테스트 초대 신청을 하여 이메일을
        받으셔야합니다.
      </div>
      <div className="tb-margin last">
        <div>
          <Link to="/form">피드백/문의/기여 구글폼</Link>
        </div>
        <div>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            개인정보처리방침
          </a>
        </div>
        <div>
          빠른상상랩 -{" "}
          <a href="mailto:sangsang@handong.app">sangsang@handong.app</a>
        </div>
      </div>
    </div>
  );
}

export default App;
