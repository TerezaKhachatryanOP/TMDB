import "../../styles/mainStyles/content.css";
import Actions from "./Actions";

export default function Content() {
  return (
    <div className="content-wrapper">
      <h1 className="content-header">Popular Movies</h1>
      <Actions />
    </div>
  );
}
