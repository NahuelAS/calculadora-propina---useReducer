import { Dispatch } from "react"
import { MenuItems } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemPorps = {
    item: MenuItems,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch}: MenuItemPorps) {
    return (
        <button
            className="border-2 border-slate-600 hover:bg-slate-300 w-full p-3 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload: {item}})}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
