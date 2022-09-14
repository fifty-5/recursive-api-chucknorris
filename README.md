## Services

Iniciar con:

```console
docker-compose up
```

Visible en: 

http://localhost:3000

Hardcode de la siguiente información:

```javascript
[
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
```

Es para probar la repetición de información, con lo que la posición inicial siempre tendrá el ID: <strong>JSwfO-EASf-uEJiZ0rxf6g</strong>, mientras la posición 1, 2, serán eliminadas.

### Testing

```console
docker run --network=host --rm skandyla/wrk -c4 -d10s -t2 http://0.0.0.0:3000
```
Los resultados son:

```
Running 10s test @ http://0.0.0.0:3000
  2 threads and 4 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   678.52ms   85.79ms 986.16ms   80.70%
    Req/Sec     3.75      2.96    10.00     84.62%
  57 requests in 10.01s, 241.74KB read
Requests/sec:      5.69
Transfer/sec:     24.14KB
```