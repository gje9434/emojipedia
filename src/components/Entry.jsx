import React from "react";

function Entry(props) {
    return (
        <div className="entry">
            <img className="entry-img" src={props.image}></img>
            <h2 className="entry-title">{props.title}</h2>
            <p className="entry-content">{props.content}</p>
        </div>
    );
};

function generateEntry(data) {
    return (
      <Entry key={data.id}
        image={data.image}
        title={data.title}
        content={data.content}
      />
    )
  }

export {Entry, generateEntry};