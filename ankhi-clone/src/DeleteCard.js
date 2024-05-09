import React from 'react'
import './DeleteCard.css';

import {
    collection, getDocs,
    updateDoc, doc,
    deleteDoc
} from 'firebase/firestore';
import db from './Firebase.js';

export const DeleteCard = ({cardID}) => {
    
    const deleteCard = () => {
        const cardRef=doc(db, 'Cards', cardID);
        deleteDoc(cardRef)
            .then(()=>{
                console.log("Deleted",cardRef);
            })
            .catch((error) => {
                console.error("Error", error);
            })
    }


    return (
        <img id="trashcan" src="../../trashcan.png" alt="settings" width="30" height="30" onClick={()=>deleteCard()}/>
    )
}
