import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";


function Filternav({ changeRegion }) {
  return (
    <FilterNavContainer>
      <FiltterButtonContainer>
        <Button variant="outlined" size="small" onClick={changeRegion }>
          전체
        </Button>
        <Button variant="outlined" size="small" onClick={changeRegion}>
          남미 / 북미
        </Button>
        <Button variant="outlined" size="small" onClick={changeRegion}>
          유럽
        </Button>
        <Button variant="outlined" size="small" onClick={changeRegion}>
          동북 아시아
        </Button>
        <Button variant="outlined" size="small" onClick={changeRegion}>
          동남 아시아
        </Button>
        <Button variant="outlined" size="small" onClick={changeRegion}>
          오세아니아
        </Button>
      </FiltterButtonContainer>
    </FilterNavContainer>
  );
}

const FilterNavContainer = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  width: 1300px;
  height: 80px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  background-color: white;
`;

const FiltterButtonContainer = styled.div`
  margin: 10px;
  height: 50px;
  width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Filternav;
