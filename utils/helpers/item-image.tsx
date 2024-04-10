import Image from 'next/image';
import Link from 'next/link';

type ImageComponentProps = {
  src: string;
  href?: string;
  isLink?: boolean;
  target?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export function ImageComponent({
  src,
  href,
  isLink = false,
  target = '_blank',
  width = 500,
  height = 500,
  alt = 'project-img',
}: ImageComponentProps) {
  const imageComponent = (
    <Image
      className="h-full w-full object-cover"
      width={width}
      height={height}
      src={src ?? ''}
      alt={alt}
    />
  );

  return isLink ? (
    <Link target={target} href={href ?? ''}>
      {imageComponent}
    </Link>
  ) : (
    imageComponent
  );
}
