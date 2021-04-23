import {useSelector,TypedUseSelectorHook} from "react-redux"
import {RootState} from "../redux"
export const useTupedSelector:TypedUseSelectorHook<RootState> =useSelector