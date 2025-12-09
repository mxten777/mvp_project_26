// rooms 컬렉션 비동기 fetch 및 상태 관리 예시
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAppContext } from '../context/useAppContext';

export function useRoomsApi() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    async function fetchRooms() {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      try {
        const querySnapshot = await getDocs(collection(db, 'rooms'));
        const rooms = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: 'SET_LOADING', payload: false });
        // rooms 상태를 Context에 추가하려면 reducer/initialState에 rooms 추가 필요
        // dispatch({ type: 'SET_ROOMS', payload: rooms });
        return rooms;
      } catch (error) {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_ERROR', payload: error.message });
        dispatch({ type: 'SHOW_TOAST', payload: { msg: error.message, type: 'error' } });
        return [];
      }
    }
    fetchRooms();
  }, [dispatch]);
}
