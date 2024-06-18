"use client";
import PhotoGrid, { BottomMenu } from "@/components/Photo/PhotoGrid";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";

// 리랜더링의 조건
// state의 변경
// props의 변경

function Photo(props) {
  const [images, setImages] = useState([]);
  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(0)
  const [count, setCount] = useState(1);

  const renderCount = useRef(1);

  const countRef = useRef(0);

  console.log(countRef);

  const value = { a: 3 };

  let countVar = 0;

  const memoizationValue = useMemo(() => {
    return value;
  }, []);

  const onClick = (id) => {
    console.log("Test : " + id); // hook이 사용되지 않은 함수나 값은 매번 Photo()가 다시 실행될 때마다 새로 생성된다.
    setState(state + 1);
  };

  // useCallback -> 메모리에 넣어둔 것() : onClick이라는 애를 메모리에 넣어두고 []안에 있는 것들이 바뀌지 않는 한 바뀌지 않는다.
  const memoizationCallback = useCallback((id) => {
    onClick(id);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9999/photos")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        setImages(result);
        setLoading(false);
      });
  }, []);

  // 리앤트는 렌더링 과정에서 2가지 페이즈를 거친다.
  // 1. render phase : virtual DOM을 만들고, 실제 DOM과 비교해서 업데이트가 필요한 부분을 찾음
  // 2. commit phase : 최적화할 수 있음.
  useEffect(() => {
    setTimeout(() => {
      setState(state + 1);
      console.log("updated");
    }, 1000);
  }, []);

  if (loading) {
    return <div>로딩 중......</div>;
  }

  if (images.length === 0) {
    return <div>이미지가 없습니다.</div>;
  }


  return (
    <div className="">    
      <div className="flex justify-center bg-slate-100">
        <div className="w-[60%] bg-white">
          <div className="flex justify-center w-[100%] ">
            <div className="flex justify-center w-full z-0">
              <div className="w-full">
                <PhotoGrid
                  images={images}
                  onClick={memoizationCallback}
                  value={memoizationValue}
                />
                <BottomMenu />
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Photo;
