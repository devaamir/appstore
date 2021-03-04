import React, { useState } from "react";
import styled from "styled-components";
import subdiv1 from "../assets/subdiv1.svg";
import subdiv2 from "../assets/subdiv2.svg";
import subdiv3 from "../assets/subdiv3.svg";
import subdiv4 from "../assets/subdiv4.svg";

export default function Home() {
	const [isHoveredApp, setIsHoveredApp] = useState(false);

	const [apps, setApps] = useState([
		{
			id: 1,
			name: "CALL OF DUTY: BLACK OPs",
			price: 19.99,
			image: require("../assets/cod-bo.jpg"),
		},
		{
			id: 2,
			name: "EFOOTBALL PES 2021",
			price: 29.99,
			image: require("../assets/pes.jpg"),
		},
		{
			id: 3,
			name: "Grand Theft Auto 5: GTA 5 EU",
			price: 49.99,
			image: require("../assets/gta-5.jpg"),
		},
		{
			id: 4,
			name: "Cyberpunk 2077",
			price: 79.99,
			image: require("../assets/cyber-punk.jpg"),
		},
		{
			id: 5,
			name: "Assassin's Creed : Valhalla",
			price: 39.99,
			image: require("../assets/assassins-creed.jpg"),
		},
		{
			id: 6,
			name: "Red Dead Redemption 2",
			price: 29.99,
			image: require("../assets/red-dead-redemption.jpg"),
		},
		{
			id: 7,
			name: "Absolver - Downfall",
			price: 44.99,
			image: require("../assets/absolver.jpg"),
		},
		{
			id: 8,
			name: "Dead by Daylight",
			price: 35.99,
			image: require("../assets/dead-by-daylight.jpg"),
		},
	]);

	function IsHoveredApp(e) {
		if ((e.currentTarget.style.display = "block")) {
			let widths = e.currentTarget.clientWidth;
			e.currentTarget.style.display = "none";
			e.currentTarget.nextSibling.style.display = "block";
			let siblingTag = e.currentTarget.nextSibling;
			let padding = window
				.getComputedStyle(siblingTag, null)
				.getPropertyValue("padding");
			let wdth = widths - parseInt(padding);
			e.currentTarget.nextSibling.style.width = `${wdth}px`;
		}
	}

	function IsLeaveApp(e) {
		e.currentTarget.previousSibling.style.display = "block";
		e.currentTarget.style.display = "none";
	}

	return (
		<>
			<Wrapper>
				<Section>
					<DivLeft>
						<SubHeading>over 2,000 games</SubHeading>
						<Heading>Best Deals on AppStore</Heading>
						<Image
							src={require("../assets/blue-xbox.png").default}
							alt='image'
						/>
						<OfferBtn>
							View Offer{" "}
							<BtnImg
								src={require("../assets/triangle-png.png").default}
								alt='arrow'
							/>
						</OfferBtn>
					</DivLeft>
					<DivRight>
						<SubDiv>
							<CatImg src={require("../assets/sports.jpg").default} alt='' />
							<H3>
								Sports
								<Span>
									<ArrowImg
										src={require("../assets/arrow.png").default}
										alt='arrow'
									/>
								</Span>
							</H3>
							<Para>200 games</Para>
						</SubDiv>
						<SubDiv>
							<CatImg src={require("../assets/action.png").default} alt='' />
							<H3>
								Action
								<Span>
									<ArrowImg
										src={require("../assets/arrow.png").default}
										alt='arrow'
									/>
								</Span>
							</H3>
							<Para>200 games</Para>
						</SubDiv>
						<SubDiv>
							<CatImg src={require("../assets/strategic.jpg").default} alt='' />
							<H3>
								Strategy
								<Span>
									<ArrowImg
										src={require("../assets/arrow.png").default}
										alt='arrow'
									/>
								</Span>
							</H3>
							<Para>200 games</Para>
						</SubDiv>
						<SubDiv>
							<H3>
								Show All
								<Span>
									<ArrowImg
										src={require("../assets/arrow.png").default}
										alt='arrow'
									/>
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
						{apps.map((app) => (
							<AppTwo key={app.id}>
								<AppContainer onMouseEnter={IsHoveredApp}>
									<AppImg src={app.image.default} alt='app-image' />
									<AppName>{app.name}</AppName>
									<AppPrice>$ {app.price}</AppPrice>
									{/* <AddBtn>Add to Cart</AddBtn> */}
								</AppContainer>
								<AppContainer2 className='main' onMouseLeave={IsLeaveApp}>
									<AppImg src={app.image.default} alt='app-image' />
									<AppName>{app.name}</AppName>
									<AppPrice>$ {app.price}</AppPrice>
									<AddBtn>Add to Cart</AddBtn>
								</AppContainer2>
							</AppTwo>
						))}
					</AppsList>
					<BottomDiv>
						<MoreBtn>
							Show More
							<BtmArrow
								src={require("../assets/btmarrowtriangle.svg").default}
								alt='arrow-btm'
							/>
						</MoreBtn>
					</BottomDiv>
				</Products>
			</Wrapper>
			<Footer>
				<Copyright>&copy; 2021 AppStore. All Rights Reserved</Copyright>
				<Pptc>Privacy And Policy</Pptc>
			</Footer>
		</>
	);
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
	background: #007feb;
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
	margin: 0 86px;
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
	cursor: pointer;
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
	box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.1);
	cursor: pointer;
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
		span {
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
	border: 1px solid #ff876c;
	border-radius: 30px;
	display: flex;
	max-width: 400px;
	justify-content: space-between;
`;

const CatName = styled.a`
	padding: 16px 20px;
	width: 50%;
	display: flex;
	justify-content: center;
	color: #ff876c;
	font-weight: bold;
	cursor: pointer;
	&.active {
		background: linear-gradient(to right, #ff755c, #ff876c);
		border-radius: 30px;
		color: #fff;
	}
	&:hover,
	:focus {
		background: linear-gradient(to right, #ff755c, #ff876c);
		border-radius: 30px;
		color: #fff;
	}
`;

const AppsList = styled.div`
	margin-top: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 26px;
	&.main {
		display: none;
	}
`;

const AppTwo = styled.div`
	width: 100%;
	position: relative;
`;

const AppContainer = styled.div`
	border-radius: 10px;
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.4);
	padding: 10px;
	cursor: pointer;
	margin: 0 auto;
`;

const AppContainer2 = styled.div`
	border-radius: 10px;
	box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.1);
	padding: 10px;
	// cursor: pointer;
	display: none;
	background: #fff;
	position: absolute;
	top: 0;
	margin: 0 auto;
	// left: 0;
	z-index: 1;
`;

const AppImg = styled.img`
	width: 100%;
`;

const AppName = styled.h4``;

const AppPrice = styled.p`
	color: #ff775e;
	font-weight: bold;
`;

const AddBtn = styled.a`
	padding: 16px 24px;
	background: linear-gradient(to right, #ff755c, #ff876c);
	color: #fff;
	border-radius: 30px;
	display: block;
	text-align: center;
	font-weight: bold;
	justify-content: center;
	cursor: pointer;
`;

const BottomDiv = styled.div`
	width: 100%;
	padding: 70px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MoreBtn = styled.a`
	padding: 20px 24px;
	border-radius: 30px;
	font-size: 14px;
	font-weight: 500;
	border: 1px solid #ff755c;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: #ff876c;
`;

const BtmArrow = styled.img`
	width: 10px;
	transform: rotate(180deg);
	margin-left: 15px;
`;

const Footer = styled.footer`
	max-width: 1280px;
	width: 90%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #253344;
`;

const Copyright = styled.p``;

const Pptc = styled.a``;
