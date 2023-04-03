import Link from "next/link";

const Logo = ({ url = "/", text = false }) => {
  return (
    <Link href={url}>
      <a className="sitelogo py-2">
        {text ? (
          <span className="text-4xl font-bold uppercase leading-none text-primary">
            Bieber
          </span>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-12 max-h-full w-auto"
              src="/images/logo192.png"
              alt="React"
            />
          </>
        )}
      </a>
    </Link>
  );
};

export default Logo;
