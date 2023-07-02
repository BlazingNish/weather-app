// API route to get weather information when city or place is provided 

export default async function GetInfo(req, res) {
  const {
    query: { location },
  } = req;
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.KEY}&q=${location}&units=metric`;
  const response = await fetch(baseUrl);
  res.status(200).json(await response.json());
}
