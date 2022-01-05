import React from 'react'
import styled, {keyframes} from 'styled-components';


const Modal = (props) => {

    const { open, close, header } = props;

    return (
      <ModalContainer open={open}>
        {open ? (
          <ModalSection>
            <ModalHeader>
              {header}
              <HeaderButton className="close" onClick={close}>
                {" "}
                &times;{" "}
              </HeaderButton>
            </ModalHeader>
            <ModalMain>여기에 국가에 대한 상세 정보가 들어간다</ModalMain>
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

const boxFadeout = keyframes`
      from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
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



export default Modal