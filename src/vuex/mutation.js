/* eslint-disable */
// export default {
//   getParam(state, object) {
//     state.START_PARMA = object;
//   }
// };
export default {
  name: "advertisement",
  created() {
    const keyCode = (sessionStorage.keyCode = getQueryString("keyCode"));
    const keyWord = (sessionStorage.keyWord = keyCode.split("_")[0]);
    const hunterCode = (sessionStorage.hunterCode = keyCode.split("_")[1]);
    const sid = (sessionStorage.sid = getQueryString("sid"));
    const ck = (sessionStorage.ck = getQueryString("ck"));
    const tm = (sessionStorage.tm = getQueryString("tm"));
    this.$store.commit("getParam", {
      keyCode,
      keyWord,
      hunterCode,
      sid,
      ck,
      tm
    });
  }
};
