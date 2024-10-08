import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
    return ( 
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href="/"
                        className="flex z-40 font-semibold"
                    >
                        <Image
                            src="/Asset18.svg"
                            alt="preview"
                            width={40}
                            height={40}
                            quality={100}
                  />
                    </Link>

                    {/* todo: add mobile navbar */}
                    <MobileNav />

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href='/docs'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm"
                                })}>
                                Documentation
                            </Link>
                            <Link
                                href='https://t.me/+bn_7kVHdDSNmY2Q0'
                                target='_blank'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm"
                                })}>
                                Community
                            </Link>
                            <Link
                                href='#'
                                onClick={() => scrollToSection("stepsRef")}
                                className={buttonVariants({
                                    size: "sm"
                                })}>
                                Get Started
                            </Link>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar