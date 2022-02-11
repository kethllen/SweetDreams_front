import { HeaderDiv, HeaderContainer, SearchDiv, SearchInput } from './style';
import search from '../../assets/search.png';
import cart from '../../assets/cart.png';
import back from '../../assets/back.png';
import { useNavigate } from 'react-router-dom';

export default function Header({ setInputValue, main }) {

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <HeaderDiv>
                {!main && <img className="back-button" onClick={() => navigate('/main')} src={back} alt="" />}
                <h1>SweetDreams</h1>
                {main && <SearchDiv>
                    <SearchInput
                        type="text"
                        placeholder="O que está procurando?"
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <img src={search} alt="" />
                </SearchDiv>}
                <div className="cart"><img src={cart} alt="" /></div>
            </HeaderDiv>
        </HeaderContainer>
    );
}