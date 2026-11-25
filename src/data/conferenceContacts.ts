export const conferenceVenue = "Creativa Damanhour, Egypt";

const contactEmail = "contact@dicicdi2027.dmu.edu.eg";
const contactPhone = "+20 45 331 8537";
type ConferenceContact = {
  icon: "email" | "phone" | "location";
  text: string;
  href?: string;
};

export const conferenceContacts: readonly ConferenceContact[] = [
  {
    icon: "email",
    text: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: "phone",
    text: contactPhone,
    href: `tel:${contactPhone.replaceAll(" ", "")}`,
  },
  {
    icon: "location",
    text: "FCI, Damanhour University, Beheira, Egypt",
  },
];
