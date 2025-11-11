import { useContext } from 'react';
import { AppContext } from './AppContext';

export function useAppContext() {
  // 예시: const { state, dispatch } = useAppContext();
  // dispatch({ type: 'SHOW_TOAST', payload: { msg: '완료!', type: 'success' } });
  // dispatch({ type: 'SET_LOADING', payload: true });
  // dispatch({ type: 'SET_ERROR', payload: '에러 발생' });
  return useContext(AppContext);
}