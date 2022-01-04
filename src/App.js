import styled from "styled-components";
import Ccard from "./components/ccard";
import Filternav from "./components/filternav";
// import Darkbutton from "./component/darkbutton";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import dummydata from "./db/dummydata.json"

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dummy, setDummy] = useState([...dummydata]);
  const [filterDummy, setFilterDummy] = useState([...dummydata]);

  console.log(dummydata);

  const theme = {
    colors: {
      bgColor: "#121212",
    },
  };

  // useEffect(() => {
  //   axios.get("http://localhost:8080/").then((res) => {
  //     console.log(res.data);
  //     setDummy([...dummydata]);
  //     setFilterDummy([...dummydata]);
  //   });
  // }, []);

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
          <Apphead>
            GoSafe
            {/* <Darkbutton /> */}
          </Apphead>
          <Filternav changeRegion={changeRegion} />
          <Cardcontainer>
            {filterDummy
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
                    country_eng_nm={item.country_eng_nm}
                    country_nm={item.country_nm}
                    download_url={item.download_url}
                    entry={item.entry}
                    quarantine_date={item.quarantine_date}
                  />
                );
              })}
          </Cardcontainer>
        </Appcontainer>
      </ThemeProvider>
    </>
  );
}

const Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Apphead = styled.div`
  text-align: center;
  line-height: 50px;
  border: 2px solid black;
  width: 95%;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Cardcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default App;
