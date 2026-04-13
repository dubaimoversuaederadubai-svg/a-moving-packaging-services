import React from "react";
import { Logo } from "@/components/logo";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0B1F3A] py-4 px-6 shadow-md">
        <div className="container mx-auto max-w-4xl">
          <a href="/" className="inline-flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <Logo />
            <span className="text-lg font-bold text-white hidden sm:inline">A Moving & Packaging Services</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">

          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
            Resume Builder Pro &nbsp;·&nbsp; Last updated: April 13, 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">1</span>
                Introduction
              </h2>
              <p>
                Welcome to <strong>Resume Builder Pro</strong> ("we", "our", or "us"). This Privacy Policy explains how we
                collect, use, and protect information when you use our mobile application{" "}
                <strong>Resume Builder Pro</strong> (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">com.mohsinabid.resumebuilderpro</code>).
              </p>
              <p className="mt-3">By using our app, you agree to the terms of this Privacy Policy.</p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">2</span>
                Information We Collect
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-[#0B1F3A] mb-1">a) Information You Provide</h3>
                  <p>
                    All resume content you enter — such as your name, job title, contact details, work experience,
                    education, skills, languages, projects, and certifications — is stored <strong>locally on your
                    device only</strong>. We do not upload or transmit this information to any server.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0B1F3A] mb-1">b) Photos &amp; Images</h3>
                  <p>
                    Profile photos and project images you add are stored locally on your device. We do not access
                    or upload your photos to any external server.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0B1F3A] mb-1">c) Advertising Data (Google AdMob)</h3>
                  <p className="mb-2">Our app uses Google AdMob to display advertisements. AdMob may collect:</p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-gray-600">
                    <li>Device identifiers (Android Advertising ID)</li>
                    <li>IP address</li>
                    <li>General location (country/region level)</li>
                    <li>App usage and interaction data</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">
                    This data is collected by Google and governed by{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F59E0B] hover:underline font-medium"
                    >
                      Google's Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">3</span>
                How We Use Information
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold mt-0.5">▸</span>
                  <span><strong>Resume content &amp; photos</strong> — Used solely to generate and display your resumes within the app. Never transmitted to us or any third party.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold mt-0.5">▸</span>
                  <span><strong>Ad data</strong> — Used by Google AdMob to serve relevant advertisements.</span>
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">4</span>
                Data Storage &amp; Security
              </h2>
              <p>
                All your personal resume data is stored only on your device using local storage. We do not operate
                any backend server that receives or stores your personal information.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">5</span>
                Third-Party Services
              </h2>
              <p className="mb-4">Our app integrates the following third-party service:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0B1F3A] text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Service</th>
                      <th className="px-4 py-3 text-left">Purpose</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-amber-50 border border-amber-100">
                      <td className="px-4 py-3 font-medium">Google AdMob</td>
                      <td className="px-4 py-3">In-app advertising</td>
                      <td className="px-4 py-3">
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#F59E0B] hover:underline font-semibold"
                        >
                          View →
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">6</span>
                Children's Privacy
              </h2>
              <p>
                Our app is not directed to children under the age of 13. We do not knowingly collect personal
                information from children under 13.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">7</span>
                Your Rights
              </h2>
              <p className="mb-3">Since all data is stored locally on your device, you have full control:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold mt-0.5">▸</span>
                  <span><strong>Delete your data</strong> — Uninstalling the app removes all locally stored data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] font-bold mt-0.5">▸</span>
                  <span><strong>Opt out of personalized ads</strong> — You can reset or opt out of your Android Advertising ID in your device settings under <em>Google → Ads</em>.</span>
                </li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">8</span>
                Internet Connectivity
              </h2>
              <p>
                The app checks for internet connectivity to verify your connection status. No personal data is
                transmitted during this check.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">9</span>
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be reflected by updating the
                "Last updated" date. Continued use of the app after changes constitutes acceptance of the new policy.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0B1F3A] text-sm font-black flex items-center justify-center flex-shrink-0">10</span>
                Contact Us
              </h2>
              <p className="mb-3">If you have any questions about this Privacy Policy, contact us at:</p>
              <a
                href="mailto:sctv77834@gmail.com"
                className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#1a3a5c] transition-colors"
              >
                📧 sctv77834@gmail.com
              </a>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Resume Builder Pro. All rights reserved.
      </footer>
    </div>
  );
}
