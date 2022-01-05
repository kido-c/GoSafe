import React from "react";
import styled from "styled-components";
import GlobalFonts from "../font/font";
import map from "../images/map.png";
import barcode from "../images/barcode2.png";
import plane from "../images/plane.png";
import { useState, useEffect } from "react";
import axios from "axios";

function Ccard({
  open,
  country_eng_nm,
  country_nm,
  entry,
  download_url,
  quarantine_date,
}) {
  const [countryImg, setNowCountryImg] = useState({});

  // 그냥 서버에서 다 받아오자

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8080/", { country_isocode })
  //     .then((res) => setNowCountryImg(res.data));
  // }, [country_isocode]);

  return (
    <Cardcontainer onClick={open}>
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
              <Ptage>여행 국가: </Ptage>
              <Ptage>{country_eng_nm}</Ptage>
              <Ptage>{country_nm}</Ptage>
            </Cardcontent>
            <Cardcontent>
              <p>필요 서류: </p>
              <p>PCR (72h)</p>
            </Cardcontent>
            <Cardcontent>자가격리 기간 : {quarantine_date}일</Cardcontent>
          </Contentcontainer>
        </LMiddlecard>
        <Lbottomcard state={entry} />
      </Leftcard>
      <Rightcard>
        <Rtopcard state={entry}> BOARDING PASS </Rtopcard>
        <RMiddlecard countryImg={download_url} />
        <Rbottomcard state={entry} />
      </Rightcard>
    </Cardcontainer>
  );
}

const Ptage = styled.p`
  padding: 0px;
  margin: 0px;
`;

const Cardcontent = styled.div`
  delay: 0.1;
  padding: 5px 15px 5px 15px;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  background-image: url(${map});
  &:after {
    content: "";
  }
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
