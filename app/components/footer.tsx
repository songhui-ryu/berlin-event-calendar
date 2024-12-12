import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex mb-4 px-4 justify-between items-center bg-transparent">
            {/* Left Side: Generated By Text */}
            <div className="">
                <p>Created by Song</p>
            </div>

            {/* Right Side: Social Media Buttons */}
            <div className="flex space-x-4 rounded">
                <a
                    href="https://github.com/songhui-ryu/berlin-event-calendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 sub-button hover:bg-gray-700 rounded text-xl"
                >
                    <FaGithub className="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/songhui-ryu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 sub-button hover:bg-blue-600 rounded text-xl"
                >
                    <FaLinkedin className="" />
                </a>
            </div>
        </footer>
    );
}
