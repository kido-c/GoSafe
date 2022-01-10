import React from "react";
import styled, {keyframes} from "styled-components";
import GlobalFonts from "../font/font";
import map from "../images/map.png";
import barcode from "../images/barcode2.png";
import plane from "../images/plane.png";
import { useState, useEffect } from "react";

function Ccard({
  modalOpen,
  getCountry,
  open,
  country_eng_nm,
  country_nm,
  entry,
  download_url,
  quarantine_date,
}) {

  const [ticketState, setTicketState] = useState(false)

  useEffect(() => {
    if (!modalOpen) setTicketState(false);
  }, [modalOpen]); // 모달오픈여부에 따라 뜯어지는 효과는 되지만, 랜더링 조절이 필요로 하다. 

  const onClick = () => {
    open()
    getCountry(country_eng_nm);
    setTicketState(true)
  }

  return (
    <Cardcontainer onClick={onClick}>
      <GlobalFonts />
      <Leftcard>
        <Ltopcard state={entry}>
          GoSafe
          <Plane />
          BOARDING PASS
        </Ltopcard>
        <LMiddlecard imgOpacity={"0.5"}>
          <Barcode />
          <Contentcontainer>
            <Cardcontent>
              <Pname>여행 국가: </Pname>
              <Pcontent>{country_eng_nm}</Pcontent>
              <Pcontent>{country_nm}</Pcontent>
            </Cardcontent>
            <Cardcontent>
              <Pname>필요 서류: </Pname>
              <Pcontent>PCR (72h)</Pcontent>
            </Cardcontent>
            <Cardcontent>
              <BottomName>자가격리 기간 : {quarantine_date} days</BottomName>
            </Cardcontent>
          </Contentcontainer>
        </LMiddlecard>
        <Lbottomcard state={entry} />
      </Leftcard>
      <Rightcard state={ticketState}>
        <Rtopcard state={entry}> BOARDING PASS </Rtopcard>
        <RMiddlecard countryImg={download_url} />
        <Rbottomcard state={entry} />
      </Rightcard>
    </Cardcontainer>
  );
}


const Pname = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 12px;
`;

const BottomName = styled.p`
  position: relative;
  padding: 0px;
  margin: 0px;
  font-size: 15px;
  font-weight: bold;
  right: 50px;
`;

const Pcontent = styled.p`
  width: 100px;
  padding: 0px;
  margin: 0px;
  font-size: 15px;
  font-weight: bold;
`;

const Cardcontent = styled.div`
  delay: 0.1;
  padding: 20px 15px 5px 15px;
  margin-left: 15px;
  font-family: "Noto Sans KR";
  justify-self: center;
`;

const Plane = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 3px;
  background-image: url(${plane});
  background-size: 100%;
  filter: invert(100%);
`;

const Contentcontainer = styled.div`
  width: 290px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Barcode = styled.div`
  width: 40px;
  height: 110px;
  margin: 20px 5px 5px 5px;
  background-image: url(${barcode});
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Cardcontainer = styled.div`
  height: 220px;
  width: 540px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 30px;
  position: relative;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  :hover {
    cursor: pointer;
  }

`;

const Leftcard = styled.div`
  height: 220px;
  width: 350px;
`;

const Ltopcard = styled.div`
  height: 40px;
  width: 349px;
  font-family: "Noto Sans KR";
  font-size: 12px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 40px;
  border-right: 1px dashed white;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => (props.state ? "#45a8a2" : "#DC6761")};
  opacity: 0.7;
`;

const LMiddlecard = styled.div`
  height: 160px;
  width: 349px;
  border-right: 1px dashed gray;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  &:before {
    content: "";
    background: url(${map});
    background-size: cover;
    position: absolute;
    opacity: 0.3;
         top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
  };
`;

const Lbottomcard = styled.div`
  height: 20px;
  width: 349px;
  border-right: 1px dashed white;
  border-radius: 0 0 15px 15px;
  background-color: ${(props) => (props.state ? "#45a8a2" : "#DC6761")};
  opacity: 0.7;
`;

const Rightcard = styled.div`
  height: 220px;
  width: 190px;
  transform: ${(props) => (props.state ? "rotate(20deg)" : "null")};

`;

const Rtopcard = styled.div`
  height: 40px;
  width: 190px;
  font-family: "Noto Sans KR";
  font-size: 12px;
  text-align: center;
  color: white;
  line-height: 40px;
  border-radius: 0 15px 0 0;
  background-color: ${(props) => (props.state ? "#45a8a2" : "#DC6761")};
  opacity: 0.7;
`;

const RMiddlecard = styled.div`
  height: 160px;
  width: 190px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.countryImg})`};
`;

const Rbottomcard = styled.div`
  height: 20px;
  width: 190px;
  border-radius: 0 0 15px 0;
  padding: 0;
  background-color: ${(props) => (props.state ? "#45a8a2" : "#DC6761")};
  opacity: 0.7;
`;

export default Ccard;

