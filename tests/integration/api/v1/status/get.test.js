const { requestToBodyStream } = require("next/dist/server/body-streams");

test("GET to /api/v1/status shoud retirn 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});
