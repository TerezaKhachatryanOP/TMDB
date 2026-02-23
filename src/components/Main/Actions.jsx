import Filter from "../Filter/Filter.jsx";
import MainSearch from "./MainSearch";
import Sort from "./Sort";

export default function Actions() {
  return (
    <div>
      <Sort />
      <Filter />
      <MainSearch />
    </div>
  );
}
