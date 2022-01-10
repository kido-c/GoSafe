import styled from "styled-components";
import Ccard from "./components/ccard";
import Filternav from "./components/filternav";
import Modal from "./components/modal";
// import Darkbutton from "./component/darkbutton";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import travelBag from "./images/travel.png"
import topbutton from "./images/top.png"
import dummydata from "./db/dummydata.json"

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dummy, setDummy] = useState([...dummydata]);
  const [filterDummy, setFilterDummy] = useState([...dummydata]);
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState()
  const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
  const [BtnStatus, setBtnStatus] = useState(false);
  


  const handleFollow = () => {
       setScrollY(window.pageYOffset);
       if (ScrollY > 100) {
         // 100 이상이면 버튼이 보이게
         setBtnStatus(true);
       } else {
         // 100 이하면 버튼이 사라지게
         setBtnStatus(false);
       } // window 스크롤 값을 ScrollY에 저장
  };


  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }


 useEffect(() => {
   const watch = () => {
     window.addEventListener("scroll", handleFollow);
   };
   watch(); // addEventListener 함수를 실행
   return () => {
     window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
   };
 });


  const getCountry = (country) => {
    setSelectedCountry(country);
  }

  const theme = {
    colors: {
      bgColor: "#121212",
    },
  };

  const openModal = () => {
    setModalOpen(true)
    
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  
  const changeRegion = (e) => {
    let textRegion = "";
    let region = e.target.textContent;

    if (region === "남미 / 북미") textRegion = "North America";
    else if (region === "유럽") textRegion = "Europe";
    else if (region === "동북 아시아") textRegion = "NORTHASIA";
    else if (region === "동남 아시아") textRegion = "Southeast Asia";
    else if (region === "오세아니아") textRegion = "OSEANIA";

    setSelectedRegion((prev) => (prev = textRegion));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Appcontainer>
          {BtnStatus && <Totopbutton onClick={handleTop} />}
          {modalOpen &&
            filterDummy
              .filter((val) => {
                if (val.country_eng_nm === selectedCountry) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <Modal
                    item={item}
                    open={modalOpen}
                    close={closeModal}
                  />
                );
              })}
          <Apphead>
            GoSafe
            {/* <Darkbutton /> */}
          </Apphead>
          <Filternav changeRegion={changeRegion} />
          <Cardcontainer>
            <Cardheader>
              <TravelBagimg src={travelBag} />
              해외 입국 정보
            </Cardheader>
            {dummy
              .filter((val) => {
                if (selectedRegion === "") {
                  return val;
                } else if (val.region === selectedRegion) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <Ccard
                    modalOpen={modalOpen}
                    selectedCountr={selectedCountry}
                    getCountry={getCountry}
                    open={openModal}
                    country_eng_nm={item.country_eng_nm}
                    country_nm={item.country_nm}
                    download_url={item.download_url}
                    entry={item.entry}
                    quarantine_date={item.quarantine_date}
                  />
                );
              })}
          </Cardcontainer>
          <AppFooter>
            {" "}
            해당 내용은 한국인 출국자를 대상으로한 정보입니다.
          </AppFooter>
        </Appcontainer>
      </ThemeProvider>
    </>
  );
}
const Totopbutton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 15%;
  background-image: url(${topbutton});
  background-size: 100%;
  cursor: pointer;
  transition: opacity 0.1s ease-in;
`;


const TravelBagimg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-top: 15px;
`;

const Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(235, 235, 235, 1);
`;

const Apphead = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  border: 2px solid black;
  width: 1300px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  background-color: white;
`;

const Cardheader = styled.div`
  width: 1300px;
  height: 50px;
  padding-left: 80px;
  font-size: 20px;
  font-weight: bold;
  line-height: 80px;
  border-radius: 10px;
  margin-top: 20px;
`;

const Cardcontainer = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  border-radius: 15px;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AppFooter = styled.div`
  width: 95%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  background-color: rgba(252, 237, 207, 1);
  margin-bottom: 20px;
`;


export default App;
