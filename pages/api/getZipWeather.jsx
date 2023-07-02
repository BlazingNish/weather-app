// API route to get weather information when zipcode is provided

export default async function GetInfo(req, res) {
  const {
    query: { location },
  } = req;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${location},in&appid=${process.env.KEY}&units=metric`;
  //   res.status(200).json({ query: location });
  const response = await fetch(baseUrl);
  res.status(200).json(await response.json());
}
