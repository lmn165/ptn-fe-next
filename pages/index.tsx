import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/styles/Main.module.scss";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MainPage() {
  // var regex = new RegExp();
  useEffect(() => {}, []);
  const {
    register,
    watch,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => console.log("data" + data);

  console.log(watch());

  const onError = (error: any) => {
    console.log(error);
  };

  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    {
      name: "guest",
      content: (
        <>
          <div className={styles.guestMadeBox}>
            <div className={styles.iconBox}>
              <button className={styles.iconRefresh}>
                <img
                  alt="img"
                  style={{ width: "69px" }}
                  src="/assets/image/reset.png"
                ></img>
              </button>
            </div>
            <input className={styles.nicknameBox}></input>
          </div>
          <button className={styles.startGame}>방만들기</button>
        </>
      ),
    },
    {
      name: "login",
      content: (
        <>
          <p>이메일</p>
          <input type="text"></input>
          <p>패스워드</p>
          <input type="password"></input>
          <button>로그인!</button>
        </>
      ),
    },
    {
      name: "register",
      content: (
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>이메일</p>
          <input
            id="email"
            type="text"
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
            {...register("email", {
              // required: "이메일은 필수 입력입니다.",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "이메일 형식에 맞지 않아요 ;(",
              },
            })}
          />
          {errors.email && null && <p>{errors.email.message}</p>}
          <p>닉네임</p>
          <input
            type="text"
            id="nickName"
            name="nickName"
            {...register("nickName", {
              pattern: {
                value: /[`~!@#$%^&*|\\\'\";:\/?]/gi,
                message: "특수문자는 쓸수없어요 ;(",
              },
              maxLength: {
                value: 10,
                message: "너무 길어요 ;(",
              },
            })}
          />
          {errors.nickName && <p>{errors.nickName.message}</p>}
          <p>패스워드</p>
          <input type="password" />
          <br />
          <br />
          <button type="submit" onClick={onSubmit} disabled={!isValid}>
            로그인!
          </button>
        </form>
      ),
    },
  ];

  const selectMenuHandler = (index: any) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };
  const options = {
    // responsiveClass: true,
    // margin: 20,
    // rewind: true,
    autoplay: true,
    infiniteLoop: true,
    // items: 1,
    // smartSpeed: 1000,
    // autoplayHoverPause: true,
    // center: true,
  };
  const Click1 = (e: any) => {
    console.log("클릭테스트");
  };
  return (
    <div className={styles.ptnMain}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <div className={styles.logo}>로고 구역</div>
        </div>
        <div className={styles.mainContainerBody}>
          <div className={styles.mainGuestBox}>
            <div className={styles.guestBoxHeader}>
              <ul className={styles.tabMenu}>
                {menuArr.map((el, index) => (
                  <li
                    className={
                      index === currentTab ? styles.focused : styles.submenu
                    }
                    onClick={() => selectMenuHandler(index)}
                    key={index.toString()} //배열 중복 키값을 제외하기위한
                  >
                    {el.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.guestBoxBody}>
              {menuArr[currentTab].content}
            </div>
          </div>
          <div className={styles.mainGuideBox}>
            <div className={styles.mainGuideP}>
              <p className={styles.p}>플레이 방법</p>
            </div>
            <div className={styles.mainGuideImage}>
              <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
                showArrows={false}
                showStatus={false}
                showThumbs={false}
              >
                {/* <Carousel {...options}> */}
                <div className={styles.item}>
                  <img alt="img" src="/assets/image/sample.jpeg" />
                </div>
                <div className={styles.item}>
                  <img alt="img" src="/assets/image/sample.jpeg" />
                </div>
                <div className={styles.item}>
                  <img alt="img" src="/assets/image/sample.jpeg" />
                </div>
                <div className={styles.item}>
                  <img alt="img" src="/assets/image/sample.jpeg" />
                </div>
                <div className={styles.item}>
                  <img alt="img" src="/assets/image/sample.jpeg" />
                </div>
                <div className={styles.item}>
                  <img alt="img" src="/assets/image/sample.jpeg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to Next.js app!</h1>
//       <input type={"date"} />
//       &nbsp; ~ &nbsp;
//       <input type={"date"} />
//     </div>
//   );
// }

// export default HomePage;
