import React from "react";
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
  return (
    <div
      className="w-full border-2 border-black"
      key={props.item.id}
      onClick={() => props.onClick(props.item.id)}
    >
      <div>
        <div className="flex flex-row justify-between">
          <p className="p-2 hover:font-bold">{props.item.name}</p>
          <FollowButton />
        </div>
        <img src={props.item.url} className="w-full h-[80%]" />
        <HeartButton type={props.item.type} />
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
    <div className="p-2">
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
