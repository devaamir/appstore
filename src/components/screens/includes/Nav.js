import React from 'react'
import styled from 'styled-components'

export default function Nav() {
    return (
        <div>
            <Header>
                <Wrapper>
                    <AppLogo>
                        <AppIcon src="" alt="" />
                    </AppLogo>
                    <SearchBox>
                        <SearchIcon src={require('../../assets/search.webp').default} alt="" />
                        <SearchInput type="text" placeholder="Search..." />
                    </SearchBox>
                    <RightDiv>
                    <SignUpBtn>SingUp</SignUpBtn>
                    <LoginBtn>Login</LoginBtn>
                    <FavList><FavListImg src={require('../../assets/wishlist.png').default} alt="" /></FavList>
                    <CartList><CartListImg src={require('../../assets/cart.png').default} alt="" /></CartList>
                    </RightDiv>
                </Wrapper>
            </Header>
        </div>
    )
}

const Header = styled.section`
    height: 100px;
    background: #f5f5f5;
`;

const Wrapper = styled.section`
    max-width: 1280px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    height: 100%;
`;

const AppLogo = styled.a``;

const AppIcon = styled.img``;

const SearchBox = styled.div`
    width: 40%;
    padding: 0 0 0 28px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: #fff; 
    border: 1px solid #FF896F;
    color: #FF896F;
`;

const SearchIcon = styled.img`
    width: 15px;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    padding: 16px 28px 16px 10px;
    width: 100%;
`;

const RightDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        margin-right: 35px;
    }
    a:last-child {
        margin-right: 0;
    }
`;

const SignUpBtn = styled.a`
    border: 1px solid #000;
    border-radius: 30px;
    padding: 14px 24px;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    border: 1px solid #FF896F;
    color: #FF896F;
    cursor: pointer;
`;

const LoginBtn = styled.a`
    border: 1px solid #000;
    border-radius: 30px;
    padding: 14px 24px;
    font-size: 14px;
    font-weight: 500;
    background: #fff;
    border: 1px solid #FF896F;
    color: #FF896F;
    cursor: pointer;
`;

const FavList = styled.a`
    width: 35px;
    display: inline-block;
    cursor: pointer;
`;

const FavListImg = styled.img`
    display: inline-block;
    width: 100%;
`;

const CartList = styled.a`
    width: 35px;
    display: inline-block;
    cursor: pointer;
`;

const CartListImg = styled.img`
    display: inline-block;
    width: 100%;
`;

