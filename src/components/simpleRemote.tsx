import { useRouter } from "next/router";

export default function SimpleRemote() {
  const router = useRouter();
  return (
    <ul className="tmp-nav">
      <li>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          홈 화면
        </a>
      </li>
      <li>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            router.push("/gallery");
          }}
        >
          갤러리
        </a>
      </li>
      <li>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            router.push("/gallery/1");
          }}
        >
          갤러리 상세
        </a>
      </li>
      {/* 
      <li>
        갤러리 상세조회
      </li> */}
    </ul>
  );
}
