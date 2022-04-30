import React from 'react';

const ManageInventories = (props) => {
    const {_id,name,image,description,price,quantity,supplier}=props.item;
    return (
        <div>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </div>
    );
};

export default ManageInventories;