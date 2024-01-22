import { Description } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { services } from '../../data/constants';

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

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  ${'' /* flex-wrap: wrap; */}
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const ServiceCard = styled.div`
  width: 100%;
  max-width: 350px;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 24px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 16px;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ServiceTitle = styled.p`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  color: white;
`;

const ServiceDesc = styled.p`
  width: 100%;
  line-height: 22px;
  font-size: 14px;
  color: white;
`;



const Services = () => {
  return (
    <Container>
      <Wrapper>
<Title>
Services We Offer
</Title>

<ServiceContainer>
{
  services.map((service,index)=>{
    return(<ServiceCard key={index}> 
    <ServiceImage>
      <img alt="service" height={"100px"} width={"100px"} src ={service.image} />
    </ServiceImage>
    <ServiceTitle>{service.title}</ServiceTitle>
    <ServiceDesc>{service.desc}</ServiceDesc>
  </ServiceCard>)
  })
}
  
</ServiceContainer>
      </Wrapper>
    </Container>
  )
}

export default Services;
