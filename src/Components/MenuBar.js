import "../Scss/MenuBar.scss";
import SearchBar from "./SearchBar";
import MenuPages from "./MenuPages";
export default function MenuBar() {
  const carrot_src =
    "https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png";
  return (
    <div className="MenuBar">
      <div className="Menu">
        <div className="Menu-logo">
          <a href="http://localhost:3000">
            <img src={carrot_src} alt="메인메뉴로고" />
          </a>
        </div>
        <MenuPages />
        <SearchBar />
      </div>
    </div>
  );
}
