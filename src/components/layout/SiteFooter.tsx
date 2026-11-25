import { Mail, MapPin, Phone } from "lucide-react";
import conferenceLogo from "../../assets/logos/conference-logo.png";
import { footerNavigation } from "../../data/conferenceLinks";
import "./SiteFooter.css";

const contactEmail = "contact@dicicdi2027.dmu.edu.eg";
const contactPhone = "+20 45 331 8537";
const contacts = [
  {
    icon: "email",
    fallback: Mail,
    text: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: "phone",
    fallback: Phone,
    text: contactPhone,
    href: `tel:${contactPhone.replaceAll(" ", "")}`,
  },
  {
    icon: "location",
    fallback: MapPin,
    text: "FCI, Damanhour University, Beheira, Egypt",
  },
];

// Use the original artwork as soon as the corresponding Figma export is added.
const contactIcons = import.meta.glob<string>(
  "../../assets/icons/footer/*.svg",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

export default function SiteFooter() {
  return (
    <footer className="site-footer" lang="en" dir="ltr">
      <div className="page-container">
        <div className="site-footer__columns">
          <div className="site-footer__brand">
            <a
              href={`${import.meta.env.BASE_URL}#home`}
              aria-label="DICICDI 2027 home"
            >
              <img src={conferenceLogo} alt="" width={248} height={83} />
            </a>
            <p>
              The First Damanhour International Conference on Intelligent
              Computing and Digital Innovation. Organized with scholarly rigor
              by the Faculty of Computers and Information, Damanhour University.
            </p>
          </div>

          {footerNavigation.map(({ title, links }) => (
            <nav key={title} aria-label={`Footer: ${title}`}>
              <h2>{title}</h2>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href ? <a href={href}>{label}</a> : <span>{label}</span>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="site-footer__contact" id="contact">
            <h2>Contact Us</h2>
            <address>
              <ul>
                {contacts.map(({ icon, fallback: Icon, text, href }) => {
                  const artwork =
                    contactIcons[`../../assets/icons/footer/${icon}.svg`];
                  return (
                    <li key={icon}>
                      {artwork ? (
                        <img src={artwork} alt="" width={24} height={24} />
                      ) : (
                        <Icon size={24} aria-hidden="true" />
                      )}
                      {href ? <a href={href}>{text}</a> : <span>{text}</span>}
                    </li>
                  );
                })}
              </ul>
            </address>
          </div>
        </div>

        <p className="site-footer__copyright">
          © 2027 DICICDI – All Rights Reserved. Faculty of Computers and
          Information, Damanhour University.
        </p>
      </div>
    </footer>
  );
}
