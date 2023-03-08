import "../Scss/MainPage.scss";
import MenuBar from "../Components/MenuBar";
import SecondHandPreview from "../Components/SecondHandPreview";
import RootFooter from "../Components/RootFooter";

export default function MainPage() {
  return (
    <div className="MainPage">
      <MenuBar />
      <SecondHandPreview />
      <RootFooter />
    </div>
  );
}
