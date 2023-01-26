import Link from "next/link";

const Logo = ({ url = "/", text = false }) => {
  return (
    <Link href={url}>
      <a className="sitelogo py-2">
        {text ? (
          <span className="text-4xl font-bold uppercase leading-none text-primary">
            Jennifer
          </span>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-8 max-h-full w-auto"
              src="/images/JenArnold_TypefaceLogo_Small.png"
              alt="Jennifer"
            />
          </>
        )}
      </a>
    </Link>
  );
};

export default Logo;
