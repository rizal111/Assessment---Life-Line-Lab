import axios from "axios";

export const getFriends = ({ page, total }) =>
  axios.get(`?seed=lll&page=${page}&results=${total}`);
