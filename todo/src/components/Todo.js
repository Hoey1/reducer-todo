import React from "react";

const Item = (props) => {
  console.log(props);
  return (
    <div className="item">
      <h3
        className={props.item.task}
        onClick={(event) => {
          console.log(props.state);
          event.stopPropagation();
          const eventTarget = event.target.className;
          const itemIndex = props.state.list.findIndex(
            (element) => element.task === eventTarget
          );
          props.dispatch({
            type: "COMPLETED",
            payload: props.state.list[itemIndex],
          });
          console.log(props.state);
          event.target.style.textDecoration = props.state.list[itemIndex]
            .completed
            ? "none"
            : "line-through";
        }}
      >
        {props.item.task}
      </h3>
    </div>
  );
};

export default Item;
