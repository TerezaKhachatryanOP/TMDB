import "../../styles/footer/footer.css";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  const basics = [
    { label: "About TMDB", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "API Documentation", href: "#" },
    { label: "API for Business", href: "#" },
    { label: "System Status", href: "#" },
  ];

  const getInvolved = [
    { label: "Contribution Bible", href: "#" },
    { label: "Add New Movie", href: "#" },
    { label: "Add New TV Show", href: "#" },
  ];

  const community = [
    { label: "Guidelines", href: "#" },
    { label: "Discussions", href: "#" },
    { label: "Leaderboard", href: "#" },
    { label: "Support Forums", href: "#" },
  ];

  const legal = [
    { label: "Terms of Use", href: "#" },
    { label: "API Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "DMCA Policy", href: "#" },
  ];

  return (
    <div className="footer-container">
      <div className="join-wrapper">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="Logo"
          className="footer-logo"
        />
        <span className="username-wrapper">Hi Teresa!</span>
      </div>
      <div className="footer-link-wrapper">
        <FooterLinks
          basics={basics}
          getInvolved={getInvolved}
          community={community}
          legal={legal}
        />
      </div>
    </div>
  );
}
