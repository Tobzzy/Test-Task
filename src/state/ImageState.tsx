import { createContainer } from "unstated-next";

import usePersistedState from "../hooks/usePersistedState";

const useImageState = () => {
  const [approvedImageUrls, setApprovedImageUrls] = usePersistedState<
    Array<string>
  >("ApprovedImages", []);
  const [rejectedImageUrls, setRejectedImageUrls] = usePersistedState<
    Array<string>
  >("RejectedImages", []);

  return {
    approvedImageUrls,
    setApprovedImageUrls,
    rejectedImageUrls,
    setRejectedImageUrls,
  };
};

export default createContainer(useImageState);
