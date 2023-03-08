import "../Scss/MenuPages.scss";

export default function MenuPages() {
  return (
    <div className="MenuPages">
      <nav className="MenuPagesNav">
        <ul>
          <li>
            <a href="http://localhost:3000">중고거래</a>
          </li>
          <li>
            <a href="#!">동네가게</a>
          </li>
          <li>
            <a href="#!">알바</a>
          </li>
          <li>
            <a href="#!">부동산 직거래</a>
          </li>
          <li>
            <a href="#!">중고차 직거래</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
