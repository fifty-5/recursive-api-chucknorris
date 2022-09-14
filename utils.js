const axios = require("axios");

const push = async (resolve) => {
  try {
    const {
      data: { id, value, url },
    } = await axios({
      method: "get",
      url: "https://api.chucknorris.io/jokes/random",
    });

    resolve({
      id,
      value,
      url,
    });
  } catch (_) {
    // los errores de red se eliminan con un este string
    // al filtrarlos
    return resolve({
      id: "repeat",
    });
  }
};

module.exports = {
  push,
};
