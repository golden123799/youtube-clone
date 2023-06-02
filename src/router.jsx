import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import App from "./App";
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetail />,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ],
  },
]);

export default router;
