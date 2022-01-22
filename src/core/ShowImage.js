import React from "react";
import { API } from "../config";

import {Card} from 'react-bootstrap'

const ShowImage = ({ item, url }) => {
    const heigh = {
        maxHeight: "250px"
   
    };
    return (
        <div className="product-img">
            <Card.Img src={`${API}/${url}/photo/${item._id}`} alt={item.name}
                className="mb-3 "
            // style={{ maxHeight: '100%', maxWidth: '100%' }}

        style={heigh}
     
            />
        </div>
    );
};
export default ShowImage;


