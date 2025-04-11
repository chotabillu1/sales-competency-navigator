
import { BarChart2, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="flex items-center">
              <BarChart2 className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold text-gray-900">
                SalesAssess
              </span>
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Contact
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SalesAssess. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
