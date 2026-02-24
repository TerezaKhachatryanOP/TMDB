import "../../styles/mainStyles/content.css";
import Actions from "./Actions";
import { FilterProvider } from "../Context/FilterProvider.jsx";

export default function Content() {
  return (
    <div className="content-wrapper">
      <h1 className="content-header">Popular Movies</h1>
      <FilterProvider>
        <Actions />
      </FilterProvider>
    </div>
  );
}
