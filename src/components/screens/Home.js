import React from 'react'
import styled from 'styled-components'
import subdiv1 from '../assets/subdiv1.svg'
import subdiv2 from '../assets/subdiv2.svg'
import subdiv3 from '../assets/subdiv3.svg'
import subdiv4 from '../assets/subdiv4.svg'

export default function Home() {
    return (
        <Wrapper>
            <Section>
                <DivLeft>
                    <SubHeading>over 2,000 games</SubHeading>
                    <Heading>Best Deals on AppStore</Heading>
                    <Image src={require('../assets/blue-xbox.png').default} alt="image" />
                    <OfferBtn>View Offer <BtnImg src={require('../assets/triangle-png.png').default} alt="arrow" /></OfferBtn>
                </DivLeft>
                <DivRight>
                    <SubDiv>
                        <CatImg src={require('../assets/sports.jpg').default} alt=""/>
                        <H3>Sports                         
                            <Span>
                            <ArrowImg src={require('../assets/arrow.png').default} alt="arrow" />
                        </Span></H3>
                        <Para>200 games</Para>
                    </SubDiv>
                    <SubDiv>
                        <CatImg src={require('../assets/action.png').default} alt=""/>
                        <H3>Action
                        <Span>
                            <ArrowImg src={require('../assets/arrow.png').default} alt="arrow" />
                        </Span>
                        </H3>
                        <Para>200 games</Para>
                    </SubDiv>
                    <SubDiv>
                        <CatImg src={require('../assets/strategic.jpg').default} alt=""/>
                        <H3>Strategy
                        <Span>
                            <ArrowImg src={require('../assets/arrow.png').default} alt="arrow" />
                        </Span>
                        </H3>
                        <Para>200 games</Para>
                    </SubDiv>
                    <SubDiv>
                        <H3>Show All
                        <Span>
                            <ArrowImg src={require('../assets/arrow.png').default} alt="arrow" />
                        </Span>
                        </H3>
                        <Para>25+ Categories</Para>
                    </SubDiv>
                </DivRight>
            </Section>
            <Products>
                <ProductsHeading>Our Products</ProductsHeading>
                <TopDiv>
                    <CatDiv>
                        <CatName>Bestsellers</CatName>
                        <CatName>Newest</CatName>
                    </CatDiv>
                </TopDiv>
                <AppsList>
                    <Apps>
                        <AppImg src={require('../assets/COD-BO.png').default} alt="app-image" />
                        <AppName>CALL OF DUTY: BLACK OPs</AppName>
                        <AppPrice>$ 19.99</AppPrice>
                        <AddBtn>Add to Cart</AddBtn>
                    </Apps>
                    <Apps>
                        <AppImg src={require('../assets/PES.jpg').default} alt="app-image" />
                        <AppName>EFOOTBALL PES 2021</AppName>
                        <AppPrice>$ 30.00</AppPrice>
                        <AddBtn>Add to Cart</AddBtn>
                    </Apps>
                    <Apps>
                        <AppImg src={require('../assets/GTA-5.jpg').default} alt="app-image" />
                        <AppName>Grand Theft Auto 5: GTA 5 EU</AppName>
                        <AppPrice>$ 16.99</AppPrice>
                        <AddBtn>Add to Cart</AddBtn>
                    </Apps>
                    <Apps>
                        <AppImg src={require('../assets/Cyber-Punk.jpg').default} alt="app-image" />
                        <AppName>Cyberpunk 2077</AppName>
                        <AppPrice>$ 59.99</AppPrice>
                        <AddBtn>Add to Cart</AddBtn>
                    </Apps>
                    <Apps>
                        <AppImg src={require('../assets/Assassins-Creed.jpg').default} alt="app-image" />
                        <AppName>Assassin's Creed : Valhalla</AppName>
                        <AppPrice>$ 39.99</AppPrice>
                        <AddBtn>Add to Cart</AddBtn>
                    </Apps>
                    <Apps>
                        <AppImg src={require('../assets/Red-Dead-Redemption-II-PC.jpg').default} alt="app-image" />
                        <AppName>Red Dead Redemption 2</AppName> 
                        <AppPrice>$ 29.99</AppPrice>
                        <AddBtn>Add to Cart</AddBtn>
                    </Apps>
                </AppsList>
            </Products>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 1280px;
    width: 90%;
    margin: 100px auto;
`;

const Section = styled.section`
    display: flex;
    justify-content: space-between;
`;

const DivLeft = styled.div`
    width: 68%;
    height: 500px;
    background: #007FEB;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
`;

const SubHeading = styled.h3`
    color: #fff;
    opacity: 0.5;
    font-weight: 500;
    margin: 110px 0 0 86px; 
    font-size: 28px;
`;

const Heading = styled.h2`
    font-size: 76px;
    color: #fff;
    max-width: 456px;
    margin:0 86px; 
`;

const Image = styled.img`
    position: absolute;
    display: flex;
    width: 520px;
    align-items: center;
    right: -199px;
    top: 0;
    bottom: 0;
    margin: auto;
`;

const OfferBtn = styled.a`
    color: #fff;
    padding: 8px 24px;
    border: 1px solid #fff;
    border-radius: 30px;
    margin: 50px 0 0 86px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 115px;
`;

const BtnImg = styled.img`
    width: 10px;
    transform: rotate(90deg);
    margin-left: 20px;
    filter: invert(100%);
`;

const DivRight = styled.div`
    width: 28%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    // background: antiquewhite;
    justify-content: space-between;
    align-items: flex-end;
`;

const SubDiv = styled.div`
    width: 47%;
    height: 170px;
    margin: 10px 0 0;
    background: url(${subdiv1}) no-repeat;
    background-size: cover;
    border-radius: 12px;
    position: relative;
    box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.4);
    fill: #ff3312;
    &:nth-child(2) {
        background: url(${subdiv2}) no-repeat;
        background-size: cover;
    }
    &:nth-child(3) {
        background: url(${subdiv3}) no-repeat;
        background-size: cover;
    }
    &:last-child {
        background: url(${subdiv4}) no-repeat;
        background-size: cover;
        span{
            transform: rotate(90deg);
        }
    }
`;

const H3 = styled.h3`
    color: #fff;
    margin: 100px 20px 0;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
`;

const Para = styled.p`
    color: #fff;
    margin: 10px 0 0 20px;
    font-size: 12px;
`;

const Span = styled.span`
    width: 5px;
    height: 5px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    `;

const ArrowImg = styled.img`
    width: 5px;
    display: block;
    filter: invert(100%);
`;

const CatImg = styled.img`
    width: 80%;
    display: block;
    position: absolute;
    border-radius: 5px;
    top: -50px;
    left: 0;
    margin: 0 auto;
    right: 0;
`;

const Products = styled.section`
    width: 100%;
`;

const ProductsHeading = styled.h3`
    font-size: 54px;
    font-weight: 500;
    margin: 50px 0 30px;
`;

const TopDiv = styled.div``;

const CatDiv = styled.div`
    border: 1px solid #FF876C;
    border-radius: 30px;
    display: flex;
    max-width: 400px;
    justify-content:space-between;
`;

const CatName = styled.a`
    padding: 16px 20px;
    width: 50%;
    display: flex;
    justify-content: center;
    color: #FF876C;
    font-weight: bold;
    &:hover,:focus {
        background: linear-gradient(to right, #FF755C ,#FF876C);
        border-radius: 30px;
        color: #fff;
    }
`;

const AppsList = styled.div`
    margin-top: 20px;  
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`;

const Apps = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 1px 0 rgb(0, 0, 0, 0.4);
    padding: 10px;
    &:hover,:focus {
        box-shadow: 0 0 6px 0 rgb(0, 0, 0, 0.4);
        height: 390px;
        z-index: 1;
        background: #fff;
        a{
            display: block;
        }
    }
`;

const AppImg = styled.img`
    width: 100%;
    // height: 100%;
`;

const AppName = styled.h4``;

const AppPrice = styled.p`
    color: #FF775E;
    font-weight: bold;
`;

const AddBtn = styled.a`
    padding: 16px 24px;
    background: linear-gradient(to right, #FF755C ,#FF876C);
    color: #fff;
    border-radius: 30px;
    display: none;
    text-align: center;
    font-weight: bold;
`;