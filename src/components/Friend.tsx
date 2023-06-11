import React from 'react';

interface Props {
    picture: string,
    pos: number,
}
const Friend = ({picture, pos}: Props )=> {
      let styles = "col-4 p-1 "
    if (pos === 7){
        styles +="bottomLeft"
    }
    if (pos === 9){
        styles +="bottomRight"
    }

    return (
        <img className={styles}  src={picture}  alt="friend"/>
    );
};

export default Friend;