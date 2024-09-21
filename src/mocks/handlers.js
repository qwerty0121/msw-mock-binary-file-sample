import { http, HttpResponse } from "msw";
import IMAGE_1 from "./images/image-1.jpg";

export const handlers = [
  http.get("/api/image/:id", async () => {
    const imageArrayBuffer = await fetch(IMAGE_1).then((response) =>
      response.arrayBuffer()
    );

    return HttpResponse.arrayBuffer(imageArrayBuffer);
  }),
];
