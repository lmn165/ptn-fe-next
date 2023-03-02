import LouteButton from "./Buttons/LouteButton";

export default function SimpleRemote() {
  return (
    <ul className="tmp-nav">
      <li>
        <LouteButton label="홈 화면" path="/" />
      </li>
      <li>
        <LouteButton label="갤러리" path="/gallery" />
      </li>
      <li>
        <LouteButton label="갤러리 상세" path="/gallery/1" />
      </li>
      <li>
        <LouteButton label="뒤로가기" path="prev" />
      </li>
      {/* 
      <li>
        갤러리 상세조회
      </li> */}
    </ul>
  );
}
