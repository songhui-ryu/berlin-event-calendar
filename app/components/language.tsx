import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const LanguageButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLanguage = pathname.startsWith("/de") ? "de" : "en";

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "de" : "en";
        const newPath = `/${newLanguage}`;

        router.push(newPath); // Navigate to the appropriate page
    };

    return (
        <button
            className="flex place-items-center px-2 sub-button hover:main-button text-sm"
            onClick={toggleLanguage}
        >
            {currentLanguage === "en" ? "Show DE" : "Show EN"}
        </button>
    );
};

export default LanguageButton;
