import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const LanguageButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [language, setLanguage] = useState(pathname);

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "de" : "en";
        const newPath = `/${newLanguage}`;

        setLanguage(newLanguage);
        router.push(newPath); // Navigate to the appropriate page
    };

    return (
        <button
            className="flex place-items-center px-2 sub-button hover:main-button text-sm"
            onClick={toggleLanguage}
        >
            {pathname === "/en" ? "DE" : "EN"}
        </button>
    );
};

export default LanguageButton;
