import { StyledHeader } from "./headerStyled"

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="header__heading">Уникальный ежедневник</h1>
      <blockquote className="header__quote">"Не откладывай на завтра, что можно сделать сегодня"</blockquote>
    </StyledHeader>
  )
}
export default Header