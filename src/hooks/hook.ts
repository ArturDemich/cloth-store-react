import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../storeg/store';

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;