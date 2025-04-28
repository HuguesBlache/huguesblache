import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "size-12" }: LogoProps) {
  return (
    <Image
      src="/images/UNSW.png"
      alt="Logo UNSW"
      width={50}
      height={50}
      className={className}
    />
  );
} 