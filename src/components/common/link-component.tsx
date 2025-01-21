import { LinkComponentType } from "@/domain/cms/common";
import { BUTTON_TYPE } from "@/utils/constants/contentful";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LinkComponentParams {
  readonly data: LinkComponentType;
}

export default function LinkComponent({ data }: LinkComponentParams) {
  const router = useRouter();
  const handleClick = (event: any): void => {
    event.preventDefault();
    router.push(data.redirectUrl);
  };

  if (data.linkType === BUTTON_TYPE.BUTTON) {
    return (
      <Button className="btn btn-yellow" onClick={handleClick}>
        {data.linkText}
      </Button>
    );
  }
  if (data.linkType === BUTTON_TYPE.HYPERLINK) {
    return (
      <Link className="link link-yellow" href={data.redirectUrl}>
        {data.linkText}
      </Link>
    );
  }
}
