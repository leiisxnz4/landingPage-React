import type { JSX } from "react";
import { ContactItem } from "./contact-item";
import { FooterListItem } from "./footer-list-item";
import { FacebookIcon } from "./facebook-icon";
import { XIcon } from "./x-icon";
import { InstagramIcon } from "./intagram-icon";

interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string;
}

const contactInformation: ContactInformation[] = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas nulla recusandae vel facere ab beatae culpa tenetur. Tempora, voluptas quisquam. Eum dignissimos quis nihil sequi et rerum quos tempora.",
    iconUrl: "/images/icon-location.svg",
    alt: "location",
  },
  {
    text: "+1-543-123-4567",
    iconUrl: "/images/icon-phone.svg",
    alt: "icon phone",
  },
  {
    text: "example@fylo.com",
    iconUrl: "/images/icon-email.svg",
    alt: "icon email",
  },
];

const pages: string[] = ["About us", "Jobs", "Press", "Blog"];

const conditions: string[] = ["Contact us", "Terms", "Privacy"];

interface Media {
  text: string;
  icon: JSX.Element;
}

const medias: Media[] = [
  {
    text: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    text: "Twitter",
    icon: <XIcon />,
  },
  {
    text: "Instagram",
    icon: <InstagramIcon />,
  }
];

export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-[60px] px-6">
      <img className="mb-10" src="/images/logo.svg" alt="Logo" />

      <div className="flex flex-col gap-4">
        {contactInformation.map((contact: ContactInformation) => (
          <ContactItem key={contact.alt} {...contact} />
        ))}
      </div>

      <div className="flex flex-col gap-8 mt-16">
        <ul>
          {pages.map((page: string) => (
            <FooterListItem key={page} text={page} />
          ))}
        </ul>

        <ul>
          {conditions.map((condition: string) => (
            <FooterListItem key={condition} text={condition} />
          ))}
        </ul>

        <div className="flex justify-center gap-4">
          {medias.map((media: any) => (
            <div
              key={media.text}
              className="text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5"
            >
              {media.icon}
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
};
