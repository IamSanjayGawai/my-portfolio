import { useDispatch, useSelector } from "react-redux";

// Custom hooks to get the dispatch and selector functions
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
