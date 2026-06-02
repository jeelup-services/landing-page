import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Jeelup",
  description: "Terms governing use of the Jeelup website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#111827] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

          <h1 className="text-4xl font-semibold text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-white/40 mb-16">Last updated: June 2025</p>

          <div className="space-y-12">

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-white/60 leading-relaxed">
                By accessing jeelup.com, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use the site. Your
                continued use of the site following any updates to these terms constitutes
                acceptance of the revised version.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Our Services
              </h2>
              <p className="text-white/60 leading-relaxed">
                Jeelup provides talent deployment services, connecting companies with
                dedicated professionals across engineering, design, and other functions.
                Specific service terms, pricing, and deliverables are governed by separate
                client agreements signed between Jeelup and each client organization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Intellectual Property
              </h2>
              <p className="text-white/60 leading-relaxed">
                All content on this site — including text, design, logos, and branding —
                is the property of Jeelup. You may not reproduce, distribute, or create
                derivative works from any content on this site without our express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-white/60 leading-relaxed">
                Jeelup is not liable for any indirect, incidental, or consequential damages
                arising from the use of this website or our services. The site is provided
                on an &quot;as is&quot; basis without warranties of any kind, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Governing Law
              </h2>
              <p className="text-white/60 leading-relaxed">
                These terms are governed by the laws of the United Arab Emirates. Any
                disputes arising from these terms or your use of the site shall be subject
                to the exclusive jurisdiction of the courts of the United Arab Emirates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Changes to Terms
              </h2>
              <p className="text-white/60 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes take effect
                immediately upon posting. Continued use of the site after any changes
                constitutes your acceptance of the updated terms. We encourage you to
                review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">
                Contact
              </h2>
              <p className="text-white/60 leading-relaxed">
                For questions about these terms, please contact us at{" "}
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
