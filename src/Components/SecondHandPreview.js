import "../Scss/SecondHandPreview.scss";

export default function SecondHandPreview() {
  const img1 =
    "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp";
  const img2 =
    "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png";
  return (
    <div className="SecondHandPreview">
      <div className="PreviewContainer-1">
        <div className="PreviewContent">
          <div>
            <div className="PreviewContent-Subject">당근 근처의 당근마켓</div>
            <div className="PreviewContent-Content">
              중고 거래부터 동네 정보까지, 이웃과 함께해 가깝고 따뜻한 당신의
              근처를 만들어요.
            </div>
          </div>
        </div>
        <div className="PreviewImg">
          <div className="PreviewImg-Box">
            <img className="Img" src={img1} alt="중고거래"></img>
          </div>
        </div>
      </div>
      <div className="PreviewContainer-2">
        <div className="PreviewImg">
          <div className="PreviewImg-Box">
            <img className="Img" src={img2} alt="중고거래"></img>
          </div>
        </div>
        <div className="PreviewContent">
          <div>
            <div className="PreviewContent-Subject">
              우리 동네 중고 직거래 마켓
            </div>
            <div className="PreviewContent-Content">
              동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
