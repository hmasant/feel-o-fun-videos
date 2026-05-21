import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const VideoScreen = lazy(() => import("./screens/VideoScreen"));

export const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/video/:title" element={<VideoScreen />} />
      </Routes>
    </Suspense>
  );
};
