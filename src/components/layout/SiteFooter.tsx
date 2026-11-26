import { Mail, MapPin, Phone } from "lucide-react";
import ConferenceLogo from "./ConferenceLogo";
import { contact, footerNavigation } from "../../data/conferenceLinks";
import { conferenceContacts } from "../../data/conferenceContacts";
import "./SiteFooter.css";

const fallbackIcons = { email: Mail, phone: Phone, location: MapPin };

// Use the matching contact icon if its Figma artwork is available.
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
            <ConferenceLogo />
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

          <div className="site-footer__contact" id="contact" tabIndex={-1}>
            <h2>{contact.label}</h2>
            <address>
              <ul>
                {conferenceContacts.map(({ icon, text, href }) => {
                  const Icon = fallbackIcons[icon];
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
