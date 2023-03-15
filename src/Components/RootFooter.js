import MenuPages from "./MenuPages";
import "../Scss/RootFooter.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function RootFooter() {
  const img_appstore =
    "data:image/png;base64,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";
  const img_googleplay =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRFAwvX5t4020S873APC7SvMTcvvN7aBifw&usqp=CAU";

  const img_facebook =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAADw8PCKior8/Pz29vYEBAT4+PgREREgICAlJSWioqKlpaXExMS7u7seHh4ZGRnQ0NDi4uLp6enX19cuLi6rq6sWFhY1NTVZWVmvr6+UlJTd3d3IyMhra2t2dnZMTExAQEBiYmIqKip7e3uDg4OamppxcXFQUFBnZ2dbW1tEREQ6OjqPj49W+2MrAAAPg0lEQVR4nO1dCXvqKhMOSlZtEve9am3Vbv//730QbY8ZIGHX+z197z3P6WkUeDMwM8AwBMEf/vCHP/xfAeM4DMM4xvjeLbGL0SDvvT0v9pME/SKd7162q+nTOrx364yAh0+r0wS14PN1Oujcu6kaCDerc9JGDqHo+vfkeTq+d5MVEG6683ZyLBb99b2bLoPRdKHD7or0dfO4Woi2bNTbG9C74vkJX4t7NMTLnTm9C7aDe5PhYHC6NC5qbrsssuNj6Ve81FItzXh/HEF2vq2ziyLaFz7ze1OrMHq1zu8fiiW+t9LpUH6Wxh4LUnA6vR858mo7b6643WB2x756RA7ld4P9HXQOHRr5TKmZ0WR//nh/JnhZ7L6yf7+X+fLLyD/D4VmW2e61l49HMdAXOBwOlqtnaSuz8q1vVjKtKt57G97Lv20sHubd35cllCd5kG0Cj2p1nIma8ot0m8v3LDzuLRoZVtjG3hh229qy6w2VC403b2XLW0s2DshAkJe4bpm2n5faLuX6u6VzvNrkIkIfNUkw6xlqvUGzizRR7xxKwEH4Iai6In2yYbjwct/0EpduB+O6aJDfqmNL2Q1eRHWQ2rdWquACB0v+y6UTgcyu/zhq8Hcn7sx/Vyi+dGm5KhyMRD4v4e3Ii8MfoteaTAMXxni0pfVxa7T9Qit0vkS9xp1DtV6IuurKfmWjklMZ/cWzu1FB3txTKuipJ9uVjfniQwfnE5uVQIwfdgfGQECwa7EOPsgs5pMvxZ1zghGae1qF7/HFuLfniW8EAsRefH1Sx5A/jfyyVb2gi/pw9H/xxhXjpx0p8pXMzuuaNA6e+K2wUfiQLTfyoWLqID7OvPIOARaBsUodcd/dXRb43nktOQWGUQFxxjP06/usQx953alr1BYcsLaIGIk7bQvhIOdJ0WxSc+L0fauWVgWkO3LVur5bhXndAr1YbLM6OHoPIX3PeMORoPHINgSP4lyvRZirRh0uIUhixAliedfUNhxX6f4E+RT1tM0bNBMRerbcWD3w+pZOvBHHTVo8SAwIZyym6rOAEJYRoU8nzdXBALoh6nN+HLCRTZmFOMIqFmidH19fzvuv+Xz/ef543r51j/18MOxIC4Fr+lUdySVbxMhGHx31xUFhiWwhmGup1QQAB7ONNUoyUnLugsQvVEo7Me7yi5IEPpjv980luGzbPVMqbc98/Unh22w3N128w8G4NZZWjWGHmfQksXxzGF9trsoIFBgEMnFTakWyXvibdD9jdwxMd+1COgBboy5USiTahn1psmt/rEE12yYgHm4hIUHFXkrARHvuJL/I6HPTCVMnkYuaUS6XKUHOKLKro4amPj5ISVCdIWu1I6mRyOg802Un6cBv46IjYtTakcMvvatXXENflqAGQ9ZkSFgMpksZrjvxlyPtMMR0S6OO9o1FpmvLyL0JwqADCwwJvmAhMICOAdTrXzrV3mCtEJ+pUz5j948tX2D8NVOH+9ktQ0wqAGiRIVybUXPYWbAmyy5DzjhvHlaMLRwaMpRXpLoMmRiYovHTMCzWeG2teUJohSGz3tJkv4dw0JjGWSh1Uj2G7Hx/1/DZ+qQiMg92fGrQM+wTzUowLEc8xWA+ahwq0zgrTN+7x970gv603+vpDnkYkv0m/CQ0FeYTe4FLSsXXtRcpyowF4auC8y3zYBLBvDBCc6uRVHDKztc1cCcmQmfjmmM+QYRKGkRhbwF9BEb1gvspqJMipbUrYc182I1UwQGMXBbMFib1FyE3m2yEKBpub1owBPRU+HtRcHmmzYXVqNhi0QAgxp+/xQINpwVdwI0sQC7CqaDB4DYezLT4o1UNIob2jxRAXcPrplAr2Ag05uzvVLAeroKhpePJZwpaYSMnh2hm4SAgBzafoyXBasOHjWqZVRSLbw8AdkHOUAefsBK55pEh7KasbwpNl5WOJGLoIhwA1MXuJQFbsXNR6y+sFA4AzTljL8AswI5N9skQGn04zOCWoZ18OB4Z4gAc64MxvmsnbfAqQ7CeABd6gW22FIDolSG0F0Cd1eaQEerZqdQrQzgQwUDb159aOuvjl+GpLiXgdoImWDLJIq/NTukQwHGr23xgTCaW6vTLEDgt9UUYoIdsHX3zyxAsfpe1h2DAaCgariMGHX63DOG2Us3xBMtxGnNwHPQZTJmdryumPQ6OxvNicOSkpkyBz6a1gCFgIw/j5VmwlFHz20D8hZbvL5EmsRnG0xmwaHI71sCGhV4UmzFDU4LBoK4vb80F0EJ68dymDE0jBhi/7TZMBvjdeptqpgzNDwKArni7aAoCGvQOu2sxzCbzw7VrfRszBMouu3kChqje+QwdhpMsmZVXNWdh+RIozJsnYO6ktwqlwbCcJPPJobxkFbCwEA7CEG4iwIBLo1eXBsMsPUTRobwEmllYCAcexo35AaZSZwkDB/z8Do0oDkVK/r9M7OSjtIUACxk3jgsISdFxLnB8kA9++kE0L5NkklbSz9rraAVwPofCJzpOG8YZt5tGtb9+kRwqkSeTySS5PDPfcWYCI24kJZauJGie9UoUl+YmP7z+/XD5c6WXoDLJooQ+vXwgoQeX4kv+4DjU7q/i0WbIEIdh3KEMo6wgWiPJiqISaJqVWSWqLC0y+qfiGJGf0tksKQqiYqJDVn0hTY44pBRpWWFrBKUAR1mGqi4wadKFYYbKjDBAZUl+RGmSFEmS0h9mBYrIn0qlkMdpOSO/Iu8BJdRUZKiYoSVNuk8cSFJWqCtFaYaKMqyuAyDjMIqIWAgflBVZRJkmRVQkaYTID0lK/svKGRFhWpZR1UvpIWPKcDYjD9GGSC/EMeHngqGZpiEtwlTTRElJhUT4pFRalXhQWiYorViW1R/CkPyLMiTP0upDhD4ZjkMqQyo/2k31CDaMQ7GWlWQYEzVBGVJOWZRm1IZTouRfLMPiypB87oZhTBlSGXa0CTboUvETGWCqG8LgcJUaaXCZzGaEVJTNGIakR1JBJ2VZdWX6lZIynAdXGcZhJyYvrNPR6KliSYH+q7oeXLXslyEiP8xmM6I+CkRozGoMizJKLh8iloTonh8Zohd6vQehdumpOOx0NCS5FY42sOqn7JfS0RNQY1E1nvxFUJCumGWzNCPsyK+pqUjJTCLLrt5dlmZF9VlqLGjCIoyr8VyNRCpDDYZgp/7GJhjPLTCxYKgdDX4d3bCM40tZlV3UMYlgp/umCHAyXe+IxYDB+PRLq85tmTOwEqtYPw0T3TauztDCbPsCUaJFV7fL1Gu53ZsA2xbW8tmJGDpKcAMW1HbiRzbc/AqeGTYICuzi25iqVfDMcFMf7rWd/H29BRam2xW8MsRwI6i2oAYMia1sgZ5lCKrbNDyzlazMM0MQC11zr4HJtxXD65khCFWo2SRgEG1lu/LLEBy7mDQ9bD7+JQ+/DJvF5KYJfhmCdW2w+wLWwy2FmvtlCAxCXt8jBG35tnOgxS9DsF4LVirA7tPOTp1eGbYEH8KwNztejVeGwOIx0fpgX8XOQPTKEMSaMNu8YGPKTo5ZrwxBHcxiE/Ba7US2+WQIUw8ws2wYCG7l4I5PhqAuzhwXNMJKDK1PhmAPnxNtAdYaraQQ9MgQ2grOmm/NIkZWDuf5ZLgCy3mcj8DUBDZmUN4YMlEE3MU04Joapmir4E+GUJNy5/DwsKCFQyX+GMJborgrsvDcvoX7sbwxhENMkNsKJjYxn154YoiZ/idYaIIfM80Q5ZEhzMAmmDhAUZt7br56KQidFW9LwMBz46QKvhjCfGLCLV6oco39Gk8MoU/dsCtxqEk7Iu/CTNt4Ycim+xL61DCDnXl2Ez8yZPKLNBTPJJUyPMPmhyFMmtwYMA5dg51Z3V4YMgllx01ja4jASNwYjUQvDGFumkb9CFPZRMT/fnSGTOLEFhvHfN7oFhf3DHGwB2W3zomY7MMmcRMeZMikT2nd+wRCNMtK554ho/3T9mG1gJFLBvNE1wwxXF2S2r5mslcZTPady5BRG1KNZe40XmnrU+cyBPvakdxuBJuSXTs0wy1DmMkSUQ9FShjgexGaPKgMN0ywo9yFcJjRT0Sf6nF0yzBkjrBI6n0mtghpB9i4Zchegi5vu/fMd/VWwB0y5CQrVznBCDcBdE2GSxkyNyKpZGPEpGnwPqVnnaHojCH3UjiVDUH2MKFeyhqHMmQvhVM8vTxmw86f1KXoiCHmZetXPOxOL3GB/VTD8DtjyN6Eo7FpDbtBpJGg3VUv5eQu6qn3MM4FdYlqy5wwZHcpUJUGQl0Tspe4oInidJjTmSzIkJMVNQk1VD2dezFnXCZqJa2f+DBY++HfX6216okDzGjkCM1VwsHERAwo8ggedQvkJavOOve8yJJ/6bF2zhDMyeUcodRqNnVV8DJPzU3u7+3zjpvd6VZuWitM+VzBRG9h9kJZ+m/7yaolwaw7UZhGVHAvM9Iwr8bAQXzm9Sjz3PjMEjGFhTgNZQy5Fy2Y3axeIZ6wV9Mi9On9BnmiRNlbwvXtxC1C/vWaHgcjJcF3j+wE+tLrCx2WLoXRntsE8XUriuhk3PLnppdByQELs9fL3zvaio4gf5ClVLVttbOLanYlSBHO+UfN90PNc+UKECXQtHYe+4KYe/lWRDMFuO2qa1HFlvsPrtZfuQkDZrnRVKG50vgNCaq1dQj0FjBO4xefY1ccBTlsbdwSzgLzFpl/8GL/0hGCPBPlmZi50uKii3EInodW5UiKysX3eJ9d5WQgriHfMFZv+t1OKv4rlg33lDt1irEoMzDFJx39poKktmcEry2qvUsXOuZf9WLrVFVeriwsAAya3iKaDANb+RBEWB8a88wscjpItL2A4UqcfpFOLbxM27DQbFzxkmtqgmGPud0XQGPvRAubWdNrpvjo/9gP2RbhQbdBuVxfXahQoBkwd8GkjtlpuZZsTTg4wpMQPDhVMXWQhg+kboSPFt183agYOoPpdi9TFNrqLNwb4diocG6RnF+Py8142IlpisyApi0brQf59Pu5bdj9vCiEvhy4aS3AwahRqwvampSz+oqB3Fuaup+kcTHecVeHrKN7r30EUu9Tq/4zx2l0z50S4iCzIQN2+TmZtiiAynHvjt/Wz2JXC0NiOgRLRab47txJwXAwFO3Y62O/fBBuFWgmx5y7waGL1/HjiO8fRitLWmeRPxy3X6y/BasACvSW1abP43IMhn0ZL5qPYpu7nt5aAHn54aYr6XHe4qO/vn7/v4F40HtvdHhuvb3P1+W9DbsmwsGy+9E0z4r2p2M+/M+ITYjOerPsdV9PL4vzjuC8eN++rab5YOhu3fMPf/jDI+F/kXHCSw4ZunYAAAAASUVORK5CYII=";
  const img_instagram =
    "https://cdn-icons-png.flaticon.com/128/1384/1384156.png";
  const img_youtube =
    "https://cdn-icons-png.flaticon.com/128/3848/3848800.png  ";
  const img_naver =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Jv-IjKeQ_vwEv7Y2qE-sKo36LHN9ANpkHpoa0ifRnhH3_C1u54aNfvDZeNYLXI7ytBk&usqp=CAU";

  return (
    <footer className="RootFooter">
      <div className="RootFooter-Container">
        <section className="RootFooter-Container-1">
          <div className="RootFooter-Container-1-1">
            <MenuPages />
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="test">당근 비지니스</a>
                  </li>
                  <li>
                    <a href="test">채팅하기</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="test">자주 묻는 질문</a>
                  </li>
                  <li>
                    <a href="test">회사 소개</a>
                  </li>
                  <li>
                    <a href="test">인재 채용</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="RootFooter-Container-1-2">
            <div>당근마켓 앱 다운로드</div>
            <div className="StoreImageBox">
              <div>
                <a href="test">
                  <img src={img_appstore} alt="애플"></img>
                </a>
              </div>
              <div>
                <a href="test">
                  <img src={img_googleplay} alt="삼성"></img>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="RootFooter-Container-2">
          <div className="RootFooter-Container-2-Company">
            <div className="RootFooter-Container-2-Company-Info">
              <div>
                <span>
                  <b>대표</b>
                  김용현 ,황도현
                </span>
                <span>
                  <b>사업자번호</b>
                  375-87-00088
                </span>
              </div>
              <div>
                <span>
                  <b>직업정보제공사업 신고번호</b>
                  2016-서울서초-0051
                </span>
              </div>
              <div>
                <span>
                  <b>주소</b>
                  서울특별시 구로구 디지털로20길 28, 609호(당근서비스)
                </span>
              </div>
              <div>
                <span>
                  <b>전화</b>
                  1544-7976
                </span>
                <span>
                  <b>고객문의</b>
                  cs@daangnservice.com
                </span>
              </div>
            </div>
            <div className="RootFooter-Container-2-Company-Sns">
              <nav>
                <div>
                  <a href="test">
                    <img alt="페북" src={img_facebook} />
                  </a>
                </div>
                <div>
                  <a href="test">
                    <img alt="인스타" src={img_instagram} />
                  </a>
                </div>
                <div>
                  <a href="test">
                    <img alt="유튜브" src={img_youtube} />
                  </a>
                </div>
                <div>
                  <a href="test">
                    <img alt="네이버" src={img_naver} />
                  </a>
                </div>

                <div className="DropdownButton">
                  <DropdownButton title="한국">
                    <Dropdown.Item href="#/action-1">한국</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">영국</Dropdown.Item>
                  </DropdownButton>
                </div>
              </nav>
            </div>
          </div>
          <div className="RootFooter-Container-2-Company-Etc">
            <div>
              <div>
                <span>제휴 문의</span>
              </div>
              <div>
                <span>광고 문의</span>
              </div>
              <div>
                <span>PR 문의</span>
              </div>
              <div>
                <span>IR 문의</span>
              </div>
            </div>
            <div>
              <div>
                <span>이용약관</span>
              </div>
              <div>
                <span>개인정보처리방침</span>
              </div>
              <div>
                <span>위치기반서비스 이용약관</span>
              </div>
              <div>
                <span>이용자보호 비전과 계획</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
