import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div>
            <h1 className="text-2xl font-bold text-[#6A38C2]">
              JobPortal
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Connecting talent with opportunities. Find your dream job and grow your career with trusted companies.
            </p>

            <div className="flex gap-4 mt-4 text-gray-600">
              <Facebook className="cursor-pointer hover:text-[#6A38C2]" />
              <Twitter className="cursor-pointer hover:text-[#6A38C2]" />
              <Instagram className="cursor-pointer hover:text-[#6A38C2]" />
              <Linkedin className="cursor-pointer hover:text-[#6A38C2]" />
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h2 className="font-semibold mb-3">For Job Seekers</h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="hover:text-[#6A38C2] cursor-pointer">Browse Jobs</li>
              <li className="hover:text-[#6A38C2] cursor-pointer">Companies</li>
              <li className="hover:text-[#6A38C2] cursor-pointer">Career Tips</li>
              <li className="hover:text-[#6A38C2] cursor-pointer">Upload Resume</li>
            </ul>
          </div>

          {/* For Recruiters */}
          <div>
            <h2 className="font-semibold mb-3">For Recruiters</h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li className="hover:text-[#6A38C2] cursor-pointer">Post a Job</li>
              <li className="hover:text-[#6A38C2] cursor-pointer">Search Resume</li>
              <li className="hover:text-[#6A38C2] cursor-pointer">Hiring Solutions</li>
              <li className="hover:text-[#6A38C2] cursor-pointer">Employer Login</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-3">Contact Us</h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>Email: support@jobportal.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
