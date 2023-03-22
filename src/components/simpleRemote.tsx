// import LouteButton from "@/components/Buttons/LouteButton";
import { LouteButton } from "@/components/Buttons";

export default function SimpleRemote() {
  return (
    <div className="tmp-nav">
      <LouteButton
        label="홈 화면"
        path="/"
        onClick={() => {
          console.log("홈 화면 버튼 클릭");
        }}
      />
      <LouteButton label="갤러리" path="/gallery" />
      <LouteButton label="갤러리 상세" path="/gallery/1" />
      <LouteButton label="체크박스 테스트" path="/test/checkboxTest" />
      <LouteButton label="뒤로가기" path="prev" />
      {/* 
      <li>
        갤러리 상세조회
      </li> */}
    </div>
  );
}
