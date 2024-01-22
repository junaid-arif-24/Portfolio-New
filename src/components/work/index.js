import React from "react";
import styled from "styled-components";
import { working } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
`;
const MainHeading = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const WorkCard = styled.div`
  width: 45%;
  max-width: 450px;
  color: white;
  border: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 25px;
  margin: 25px 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 30px;
`;

const CardDesc = styled.div`
  font-size: 1rem;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
`;

const CardNumber = styled.div`
  font-size: 4.6875rem;
  font-weight: 600;
  line-height: 5rem;
  z-index: 1;
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 26px;
`;

const CircleElement = styled.div`
  background: linear-gradient(91.1deg, rgb(57, 31, 105) -2.3%, rgb(115, 43, 155) 44.4%, rgb(231, 75, 184) 103.4%);
  height: 45px;
  width: 45px;
  z-index: -1;
  border-radius: 100%;
  display: inline;
  font-size: 22px;
  font-weight: bold;
  line-height: 26px;
  position: relative;
  left: 25px;
  top: 5px;

  @media (max-width: 768px) {
    left: 0;
    margin-bottom: 15px;
  }
`;

const CircleNumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColorHeading = styled.b`
  font-weight: bold;
  background: linear-gradient(91.1deg, rgb(57, 31, 105) -2.3%, rgb(115, 43, 155) 44.4%, rgb(231, 75, 184) 103.4%);
  background-clip: text; /* Clip the gradient to the text */
  -webkit-background-clip: text; /* For older webkit browsers */
  color: transparent; /* Set the text color to transparent */
`;

// @media (max-width: 768px) {
//   ${CircleElement} {
//     left: 0;
//     margin-bottom: 15px;
//   }
// }


const Work = () => {
  return (
    <Container>
    
      <MainHeading>Here's how we <ColorHeading>do it</ColorHeading></MainHeading>
      <InnerContainer>
        {working.map((work, index) => {
          return (
            <WorkCard key={index}>
              <CardHeading>
              <CircleNumberContainer>
              <CircleElement/>
                <CardNumber >{work.number}</CardNumber>
              </CircleNumberContainer>

                <CardTitle>{work.title}</CardTitle>
              </CardHeading>
              <CardDesc>{work.desc}</CardDesc>
            </WorkCard>
          );
        })}
      </InnerContainer>
    </Container>
  );
};

export default Work;
