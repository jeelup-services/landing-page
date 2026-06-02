import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Jeelup",
  description: "How Jeelup collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#111827] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

          <h1 className="text-4xl font-semibold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-white/40 mb-16">Last updated: June 2025</p>

          <div className="space-y-12">

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Information We Collect
              </h2>
              <p className="text-white/60 leading-relaxed">
                We collect information you provide when booking a call or contacting us: name,
                email address, and company name. We also collect analytics data via Google
                Analytics 4 to understand how visitors use our site, including pages visited,
                time on site, and general location data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-white/60 leading-relaxed">
                We use your information to respond to inquiries, schedule calls via Calendly,
                and improve our services. We do not sell your data to third parties. Your
                contact details are used solely to communicate with you about Jeelup services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Cookies
              </h2>
              <p className="text-white/60 leading-relaxed">
                We use cookies for analytics (Google Analytics) and session management.
                Analytics cookies help us understand how our site is used so we can improve
                the experience. You can disable cookies in your browser settings at any time,
                though some features of the site may be affected.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Third-Party Services
              </h2>
              <p className="text-white/60 leading-relaxed">
                We use Google Analytics for traffic analysis and Calendly for booking
                management. These services operate under their own privacy policies and may
                collect data independently. We encourage you to review their respective
                policies to understand how they handle your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Your Rights
              </h2>
              <p className="text-white/60 leading-relaxed">
                You have the right to access, correct, or delete your personal data at any
                time. You may also request that we stop using your data for marketing
                communications. To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:hello@jeelup.com"
                  className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
                >
                  hello@jeelup.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-white/60 leading-relaxed">
                We may update this policy periodically to reflect changes in our practices
                or for legal and regulatory reasons. Changes will be posted on this page
                with an updated date. Continued use of the site following any changes
                constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Contact
              </h2>
              <p className="text-white/60 leading-relaxed">
                For privacy-related questions or requests, please contact us at{" "}
                <a
                  href="mailto:hello@jeelup.com"
                  className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
                >
                  hello@jeelup.com
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
