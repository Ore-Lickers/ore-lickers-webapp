import { LinkComponentType } from "@/domain/cms/common";
import { BUTTON_TYPE } from "@/utils/constants/contentful";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LinkComponentParams {
  readonly data: LinkComponentType;
  readonly classes?: string;
}

export default function LinkComponent({
  data,
  classes = "",
}: LinkComponentParams) {
  const router = useRouter();
  const handleClick = (event: any): void => {
    event.preventDefault();
    router.push(data.redirectUrl);
  };

  if (data.linkType === BUTTON_TYPE.BUTTON) {
    return (
      <Button color="warning" className={" " + classes} onClick={handleClick}>
        {data.linkText}
      </Button>
    );
  }
  if (data.linkType === BUTTON_TYPE.HYPERLINK) {
    return (
      <Link className={" " + classes} href={data.redirectUrl}>
        {data.linkText}
      </Link>
    );
  }
}
