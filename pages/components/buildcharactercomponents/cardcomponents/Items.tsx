import React from 'react'
import { itemDataInterface } from '../../../../interfaces/dataInterfaces/itemsDataInterface'

export default function Items(Props: itemDataInterface) {
    const { name, weight, quantity, catagory } = Props
    return (
        <div>
            {name}
            {weight}
            {quantity}
            {catagory}
        </div>
    )
}
