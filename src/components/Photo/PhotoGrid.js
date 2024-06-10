import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button } from "@material-tailwind/react";

const PhotoGrid = (props) => {
  return (
    <div className="grid grid-cols-1 flex flex-row">
      {props.images.map((list, index) => (
        <PhotoDetail item={list} key={list.id} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default React.memo(PhotoGrid);

const PhotoDetail = (props) => {
  const inputRef = useRef(false);
  const [opened, setOpened] = useState(false)

  const clickImg = () => {
    if(!opened) {
      inputRef.current.openModal();
      setOpened(true)
    } else {
      inputRef.current.closeModal();
      setOpened(false)
    }
  }

  return (
    <div
      className="w-full h-90 pb-2"
      key={props.item.id}
      onClick={() => props.onClick(props.item.id)}
    >
      <div className="border-2 border-black">
        <div className="w-full flex inline-flex">
          <div className="w-[10%] h-[70%] flex items-center">
            <img src={props.item.profileUrl} className="p-1 w-[100%] h-[100%] object-cover rounded-full" />
          </div>
          {/* <input ref={inputRef} />
          <button onClick={focus}>집중</button> */}
            <ImageBig ref={inputRef} type={"aagsdg"} />
          <div className="w-[65%]">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl p-2 hover:font-bold">{props.item.name}</p>
          </div>
          <FollowButton />
        </div>
        <img src={props.item.url} className="w-full h-[80%]"  onClick={() => clickImg()}/>
        <div className="flex inline-flex">
          <HeartButton type={props.item.type} />
          <ShareButton />
        </div>
        <div className="flex flex-wrap p-2">
          <div className="max-h-24">
            <p className="whitespace-normal break-all">{props.item.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhotoDetail };

const FollowButton = (props) => {
  return (
    <div className="w-[25%] flex items-center place-content-center">
      <Button color="blue" size="sm">팔로우</Button>
    </div>
  );
};

export { FollowButton };

const HeartButton = (props) => {
  return (
    <div className="p-2">
      <img src={props.type == "clicked" ? "/img/heart-red.png" : "/img/heart-blank.png"} className="w-[20px] h-[20px]"/>
    </div>
  );
};

export { HeartButton };


const ImageBig = forwardRef( (props, ref) => {

  const [modalOpen, setModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal, closeModal
  }));

  const openModal = () => {
    console.log("open")
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("close")
    setModalOpen(false);
  };

  
  return (
    <div>
      {modalOpen && <img src="/img/heart-red.png" className="w-100 h-100"/>}
    </div>
  )
});
  

export { ImageBig };



const ShareButton = (props) => {
  return (
    <div className="p-2">
      {/* <svg src="/img/share.svg" className="w-[20px] h-[20px]"></svg> */}
      <svg
        className="w-5 h-5" viewBox="0 0 687.92 687.92">
        <path d="M527.129,425.867c-22.226,0-43.52,6.981-62.141,20.271l-174.951-98.282l167.451-100.101
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
          C613.131,612.29,574.545,657.354,527.129,657.354z"/>
      </svg>
    </div>
  );
};

export { ShareButton };
