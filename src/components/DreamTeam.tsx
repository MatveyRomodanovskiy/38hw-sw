import React, {useState} from 'react';
import images from "../config/images-pathes.json"
import Friend from "./Friend";
export const DreamTeam = () => {

        return (
            <div className="float-end w-50 row border mx-1" >
                <h2 className="col-12 text-center">Dream Team</h2>
                {images.friend_pathes.map((p: string, id: number) => <Friend key={id} pos={id+1} picture={p} />)}
            </div>
        );
}
export default DreamTeam;