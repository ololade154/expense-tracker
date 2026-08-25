import { Content } from "../component/content";
import { NavBar } from "../component/navBar";
import { SumWithReduce } from "../component/reduce";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Content />
      <SumWithReduce />
    </>
  );
};
