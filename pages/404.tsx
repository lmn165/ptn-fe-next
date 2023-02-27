import { useRouter } from "next/router"

export default function Error404(){
    const router = useRouter();
    
    return(
        <>
            {/* <div className={styles.attendFailMsg}> */}
            <div>
                요청하신 페이지를 찾을 수 없습니다.
            </div>
            <div className="contentBottom">
              {/* <div className={styles.detailBtn}> */}
              <div>
                <button onClick={() => router.push('/')}>홈으로 이동</button>
              </div>
            </div>
        </>
    )
}