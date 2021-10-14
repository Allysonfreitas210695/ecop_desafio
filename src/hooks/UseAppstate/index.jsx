import  { useContext } from 'react';
import { AppContext } from '../../Providers';

export const useAppState = () => useContext(AppContext);

