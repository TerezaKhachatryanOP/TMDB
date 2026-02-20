import { Link } from "react-router-dom";
import "../../styles/footer/footerLinks.css";

export default function FooterLinks({ basics, getInvolved, community, legal }) {
  return (
    <>
      <div className="link-container">
        <h1 className="link-header">THE BASICS</h1>
        {basics.map((item) => (
          <Link className="footer-link" key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="link-container">
        <h1 className="link-header">GET INVOLVED</h1>
        {getInvolved.map((item) => (
          <Link className="footer-link" key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="link-container">
        <h1 className="link-header">COMMUNITY</h1>
        {community.map((item) => (
          <Link className="footer-link" key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="link-container">
        <h1 className="link-header">LEGAL</h1>
        {legal.map((item) => (
          <Link className="footer-link" key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
