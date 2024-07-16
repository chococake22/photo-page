import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Button } from '@material-tailwind/react';
import Next from '../NextComponent';
import More from '../MoreButton';

const PhotoGrid = (props) => {
  return (
    <div className="grid grid-cols-1 flex flex-row z-0">
      {props.images.map((list, index) => (
        <PhotoBox item={list} key={list.id} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default React.memo(PhotoGrid);

const PhotoBox = (props) => {
  const inputRef = useRef(false);
  const [opened, setOpened] = useState(false);

  const clickImg = () => {
    inputRef.current.openCloseModal();
    if (!opened) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };

  return (
    <div className="w-full h-[60%] border-y" key={props.item.id} onClick={() => props.onClick(props.item.id)}>
      <div>
        <div className="w-full flex inline-flex">
          <div className="w-[14%] h-[70%] flex items-center place-self-center">
            <img src={props.item.profileUrl} className="p-1 w-[100%] h-[100%] object-cover rounded-full" />
          </div>
          {/* <input ref={inputRef} />
          <button onClick={focus}>집중</button> */}
          <div className="fixed left-0 top-0">
            <ImageBig ref={inputRef} type={'aagsdg'} url={props.item.url} />
          </div>
          <div className="w-[63%]">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl p-2 hover:font-bold">{props.item.name}</p>
          </div>
          <FollowButton />
        </div>
        <img src={props.item.url} className="w-full h-[80%]" onClick={() => clickImg()} />
        <div className="flex inline-flex">
          <HeartButton type={props.item.type} />
          <CommentButton />
          <ShareButton />
        </div>
        <div className="flex flex-wrap px-2">
          <div className="max-h-24">
            <p className="font-medium hover:font-bold">{props.item.name}</p>
            <p className="whitespace-normal break-all font-normal text-sm ">{props.item.content}</p>
          </div>
        </div>
        <div className="flex flex-wrap p-2">
          <p className="font-thin text-xs">{props.item.regiDttm}</p>
        </div>
      </div>
    </div>
  );
};

export { PhotoBox };

const FollowButton = (props) => {
  return (
    <div className="w-[25%] flex items-center place-content-center">
      <Button color="blue" size="sm">
        팔로우
      </Button>
    </div>
  );
};

export { FollowButton };

const HeartButton = (props) => {
  const [clicked, setClicked] = useState(false);

  const click = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div className="p-2">
      <img src={clicked ? '/img/heart-red.png' : '/img/heart-blank.png'} className="w-[20px] h-[20px]" onClick={() => click()} />
    </div>
  );
};

export { HeartButton };

const ImageBig = forwardRef((props, ref) => {
  const [modalOpen, setModalOpen] = useState(false);

  // 부모 컴포넌트에서 자식 컴포넌트를 호출하는 경우 사용함
  useImperativeHandle(ref, () => ({
    openCloseModal,
  }));

  const openCloseModal = () => {
    if (modalOpen) {
      console.log('close');
      setModalOpen(false);
    } else {
      console.log('open');
      setModalOpen(true);
    }
  };

  return (
    <>
      {modalOpen && (
        <div id="static-modal" data-modal-backdrop="static" className="fixed inset-0 overflow-y-auto overflow-x-hidden z-50 justify-center flex items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-opacity-50">
          <div className="relative p-4 w-full max-w-xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">자세히 보기</h3>
                <button
                  type="button"
                  onClick={() => openCloseModal()}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <img src={props.url} className="w-full h-full" />
              </div>
              <div className="grid justify-items-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="static-modal"
                  onClick={() => openCloseModal()}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export { ImageBig };

const CommentButton = (props) => {
  const comment = () => {
    console.log('???6346534??');
  };

  return (
    <div className="p-2" onClick={() => comment()}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" stroke="currentColor" viewBox="0 0 50 50">
        <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z" />
      </svg>
    </div>
  );
};

export { CommentButton };

const ShareButton = (props) => {
  const shareContent = () => {
    console.log('?????');
  };

  return (
    <div className="p-2" onClick={() => shareContent()}>
      {/* <svg src="/img/share.svg" className="w-[20px] h-[20px]"></svg> */}
      <svg className="w-5 h-5 text-black" stroke="currentColor" viewBox="0 0 687.92 687.92">
        <path
          d="M527.129,425.867c-22.226,0-43.52,6.981-62.141,20.271l-174.951-98.282l167.451-100.101
          c20.606,16.681,45.384,25.739,70.894,25.739c67.044,0,121.578-61.347,121.578-136.731C649.96,61.362,595.426,0,528.382,0
          c-64.295,0-117.133,56.55-121.272,127.78L226.033,236.435c-19.874-15.229-43.536-23.509-67.747-23.509
          C91.944,212.941,37.96,273.646,37.96,348.283c0,74.605,53.984,135.295,120.326,135.295c24.227,0,47.95-8.31,67.839-23.585
          l184.513,100.589c1.741,70.543,53.327,127.338,116.477,127.338c64.279,0,116.552-58.78,116.552-131.019
          C643.682,484.647,591.394,425.867,527.129,425.867z M527.129,657.354c-47.399,0-85.971-45.063-85.971-100.468l0.581-14.16
          l-219.77-119.821l-8.05,7.438c-16.024,14.833-35.256,22.654-55.618,22.654c-49.523,0.015-89.79-46.973-89.79-104.714
          c0-57.788,40.266-104.791,89.774-104.791c20.469,0,39.777,7.913,55.832,22.853l8.417,7.821l214.851-128.91l0.015-8.631
          c0.062-58.505,40.878-106.073,90.981-106.073c50.195,0,91.027,47.644,91.027,106.211c0,58.551-40.832,106.18-91.027,106.18
          c-21.264,0-42.023-8.86-58.429-24.945l-8.417-8.249l-213.66,127.719l0.168,10.938l-0.168,10.814l220.366,123.763l8.111-6.98
          c14.924-12.816,32.476-19.599,50.791-19.599c47.415,0,86.001,45.062,86.001,100.467
          C613.131,612.29,574.545,657.354,527.129,657.354z"
        />
      </svg>
    </div>
  );
};

export { ShareButton };

const BottomMenu = (props) => {
  const [clicked, setClicked] = useState(false);

  const click = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div className="w-full h-[50px]">
      <div className="relative">
        <div className="w-[60%] h-[40px] border-t border-gray fixed bottom-0 bg-white flex flex-row justify-around place-items-center">
          <div>
            <More width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BottomMenu };
