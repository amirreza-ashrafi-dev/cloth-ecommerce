import ActionType from "./shop.types";
import {
  firestore,
  converCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsEnd = (collectionsMap) => ({
  type: ActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (err) => ({
  type: ActionType.FETCH_COLLECTIONS_FAILURE,
  payload: err,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("Collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = converCollectionSnapshotToMap(snapshot.docs);
        dispatch(fetchCollectionsEnd(collectionMap));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err)));
  };
};
