const { push } = require("./utils");
const fastify = require("fastify")({
  logger: true,
});

var length = 20,
  arrayData = [];

const fillData = async () => {
  if (arrayData.length === length) return;

  while (arrayData.length < length) {
    arrayData.push(new Promise(push));
  }

  const uniquesId = [];

  // set new data de API
  arrayData = await Promise.all(arrayData);
  arrayData = [...arrayData].filter((e) => {
    // se descartan elelentos repetidos
    if (e.id === "repeat" || uniquesId.find((d) => d === e.id) !== undefined) {
      return false;
    }

    // se coloca un listado de elementos correctos
    uniquesId.push(e.id);

    return true;
  });

  if (arrayData && arrayData.length < length) {
    await fillData();
  }
};

// Declare a route
fastify.get("/", async function (_, reply) {
  // setting initial
  arrayData = [
    {
      id: "JSwfO-EASf-uEJiZ0rxf6g",
      value:
        'The reason why Japan has too many disasters like the WWII bombings in Hiroshima and Nagasaki, earthquakes and tsunamis is because they always mispronounced his name in their prayers and praises as "CHUCK NOLLIS" instead of CHUCK NORRIS.',
      url: "https://api.chucknorris.io/jokes/JSwfO-EASf-uEJiZ0rxf6g",
    },
    {
      id: "JSwfO-EASf-uEJiZ0rxf6g",
      value:
        'The reason why Japan has too many disasters like the WWII bombings in Hiroshima and Nagasaki, earthquakes and tsunamis is because they always mispronounced his name in their prayers and praises as "CHUCK NOLLIS" instead of CHUCK NORRIS.',
      url: "https://api.chucknorris.io/jokes/JSwfO-EASf-uEJiZ0rxf6g",
    },
    {
      id: "repeat",
    },
  ];

  await fillData();

  reply.send(arrayData);
});

// Run the server!
fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
