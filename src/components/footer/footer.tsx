import {
  FooterCopyright,
  FooterLinkGroup,
  FooterLink,
  Footer,
} from "flowbite-react";

export default function FooterComponent() {
  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <Footer container bgDark>
          <FooterCopyright
            className="text-gray-400"
            href="#"
            by="Ore Lickers™"
            year={2026}
          />
          <FooterLinkGroup>
            <FooterLink className="text-white" href="/about">
              About
            </FooterLink>
            <FooterLink className="text-white" href="/disclaimer">
              Disclaimer
            </FooterLink>
          </FooterLinkGroup>
        </Footer>
      </div>
    </div>
  );
}
