import { HeaderDiv, HeaderContainer, SearchDiv, SearchInput } from './style';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderDiv>
                <h1>SweetDreams</h1>
                <SearchDiv>
                    <SearchInput type="text" placeholder="O que está procurando?" />
                    <img src={search} alt="" />
                </SearchDiv>
                <div className="cart"><img src={cart} alt="" /></div>
            </HeaderDiv>
        </HeaderContainer>
    );
}