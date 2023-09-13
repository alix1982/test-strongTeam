import { observer } from "mobx-react-lite";
import { StyledHeader } from "./headerStyled";
import todosState from "../../store/TodosState";
import {textGeo} from "../../textLocalization";
import Location from "../../location";

const Header = observer(() => {

  return (
    <StyledHeader>
      <Location/>
      <div className="header__buttons">
        <button className={`header__buttonRu ${!todosState.isGeo ? "header__buttonActive" : ""}`} onClick={()=>{todosState.setLanguage()}}>Ru</button>
        <button className={`header__buttonEng ${todosState.isGeo ? "header__buttonActive" : ""}`} onClick={()=>{todosState.setLanguage()}}>Eng</button>
      </div>
      <h1 className="header__heading">{todosState.isGeo ? textGeo.headerHeading.eng : textGeo.headerHeading.ru}</h1>
      <blockquote className="header__quote">{todosState.isGeo ? textGeo.headerQuote.eng : textGeo.headerQuote.ru}</blockquote>
    </StyledHeader>
  )
})
export default Header