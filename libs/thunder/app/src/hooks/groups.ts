import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearGroups,
  fetchGroups,
  getGroupsState,
  GroupsEntity,
  GroupsState,
  selectAllGroups
} from '@v-thomas/thunder/data-access';

export const useGroups = (): { groups: GroupsEntity[]; clearGroups: () => void; allGroups: GroupsState } => {
  const dispatch = useDispatch();
  const state = useSelector(selectAllGroups);
  const allState = useSelector(getGroupsState);

  useEffect(() => {
    if (allState.loadingStatus === 'NOT_LOADED') {
      dispatch(fetchGroups());
    }
  }, [allState.loadingStatus, dispatch]);

  return { groups: state, clearGroups: () => dispatch(clearGroups()), allGroups: allState };
};