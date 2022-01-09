import React from 'react'
import styled, { keyframes } from 'styled-components';
import plane from "../images/plane.png";


const Modal = (props) => {

    const { open, close, header, item } = props;

    return (
      <ModalContainer open={open}>
        {open ? (
          <ModalSection>
            <ModalHeader>
              {item.country_eng_nm}_{item.country_nm}
              <Plane />
              <HeaderButton className="close" onClick={close}>
                {" "}
                &times;{" "}
              </HeaderButton>
            </ModalHeader>
            <ModalMain>
              <Rightcard>
                <Rtopcard state={item.entry}> BOARDING PASS </Rtopcard>
                <RMiddlecard countryImg={item.download_url} />
                <Rbottomcard state={item.entry} />
              </Rightcard>
              <div>
                <p>{item.country_nm}</p>
                <p>{item.country_eng_nm}</p>
                <a href={item.datail_ink} target="_blank">
                  상세링크{" "}
                </a>
                <p>{item.entry}</p>
                <p>{item.acceptable_vaccines}</p>
              </div>
            </ModalMain>
            <CommentMain>
              <div>
                <p>2021.1.5에 입국했는데 괜찮았어요 </p>
                <p>2021.1.5에 입국했는데 괜찮았어요 </p>
                <p>2021.1.5에 입국했는데 괜찮았어요 </p>
                <p>2021.1.5에 입국했는데 괜찮았어요 </p>
              </div>
            </CommentMain>
            <ModalFooter>
              <FooterButton className="close" onClick={close}>
                {" "}
                close{" "}
              </FooterButton>
            </ModalFooter>
          </ModalSection>
        ) : null}
      </ModalContainer>
    );
}

const DetailLink = styled.a`

`

const planFadein = keyframes`
  0%{
    margin-left:100px;
    opacity:1;
  }

100%{
    margin-left:680px;
    opacity:0;
  }
`;


const Plane = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 3px;
  background-image: url(${plane});
  background-size: 100%;
  margin-left: 20px;
  animation-delay: 0.3s;
  animation: ${planFadein} 3s;
  animation-iteration-count: infinite;
  overflow: hidden;
`;

const boxFadein = keyframes`
      from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;



const ModalContainer = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: ${(props) => (props.open ? "center" : "null")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalSection = styled.div`
  width: 90%;
  max-width: 950px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation : ${boxFadein} 0.3s;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 10px 64px 10px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
  display: flex;
  line-height: 42px;
`;

const HeaderButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
`;

const ModalMain = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  display: flex;
`;

const CommentMain = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  display: flex;
`;

const ModalFooter = styled.div`
  padding: 12px 16px;
  text-align: right;
`;

const FooterButton = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
`;

const Rightcard = styled.div`
  height: 220px;
  width: 190px;
  transform: ${(props) => (props.state ? "rotate(20deg)" : "null")};
  margin-right: 30px;
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
`



export default Modal