"use client";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(300);

    router.push(href);
    await sleep(300);
    body?.classList.remove("page-transition");
  };

  return (
    <Link
      className={className}
      href={href}
      {...props}
      onClick={handleTransition}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
