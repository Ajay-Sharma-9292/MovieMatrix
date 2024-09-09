export { removeperson } from "../reducers/personSlice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalids = await axios.get(`/person/${id}/external_ids`);
    const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
    const moviecredits = await axios.get(`/person/${id}/movie_credits`);
    const tvcredits = await axios.get(`/person/${id}/tv_credits`);

    let theultimatedetail = {
      details: detail.data,
      externalids: externalids.data,
      combinedcredits: combinedcredits.data,
      moviecredits: moviecredits.data,
      tvcredits: tvcredits.data,
    };

    dispatch(loadperson(theultimatedetail));

    // console.log(theultimatedetail);
  } catch (error) {
    console.log(error);
  }
};
