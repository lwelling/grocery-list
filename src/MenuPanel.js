import React from 'react';
import { Recipes } from './Recipes';
import Item from './Item';

function MenuPanel () {
    return (
        <>
            {
                Recipes.map(function(item, i){
                    return <Item key={i} item={item} />
                })
            }
        </>
    )
}

export default MenuPanel;
