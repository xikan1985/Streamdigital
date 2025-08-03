import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-white/90 space-y-6">
              <div className="mb-6">
                <p className="text-sm text-gray-300">Last Updated: August 04, 2025</p>
              </div>

              <p>
                Welcome to Stream Digital (ABN: 53744510019), located at https://streamdigital.com.au/. We care about your privacy and want to be clear about how we handle your information. This Privacy Policy explains what we collect, why we collect it, and how we use it, following the Australian Privacy Principles (APP).
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Information Do We Collect?</h2>
                <p>
                  We collect information when you visit our website or use our services (like Miss Call Text Back, AI Agent bookings, or Paid Ads). This includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Personal Details:</strong> Your name, phone number, email, or address if you contact us or fill out a form.</li>
                  <li><strong>Website Activity:</strong> Details about your visit, like pages you view or actions you take, using tools like Facebook media pixels.</li>
                </ul>
                <p>We only collect what's necessary and in line with the APP.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How Do We Collect Information?</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Directly from You:</strong> When you call, text, or submit a form on our site.</li>
                  <li><strong>Automatically:</strong> Using Facebook media pixels, which track how you use our website (e.g., pages visited) to improve our ads and services.</li>
                  <li><strong>From Third Parties:</strong> Sometimes, we get info from partners (e.g., ad platforms) to better serve you, but only with your implied consent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Why Do We Use Your Information?</h2>
                <p>We use your data to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Provide our services, like booking appointments or managing your CRM.</li>
                  <li>Send you updates or replies about your enquiries.</li>
                  <li>Improve our website and ads with insights from Facebook pixels.</li>
                  <li>Meet legal or business needs, like keeping records.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How Do We Store and Protect Your Information?</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>We keep your information secure using safe storage methods.</li>
                  <li>It's held only as long as needed for our services or as required by law.</li>
                  <li>We don't share it with others unless you agree or it's required (e.g., by law).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Facebook Media Pixels</h2>
                <p>
                  When you visit https://streamdigital.com.au/, we use Facebook media pixels to track your activity (e.g., page views). This helps us show you relevant ads. The pixel is managed by Meta, and their privacy policy (available at <a href="https://www.facebook.com/privacy/policy/" className="text-blue-300 hover:text-blue-200 underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/policy/</a>) explains how they handle your data. You can opt out of ad tracking via your Facebook settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Rights</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Access and Correction:</strong> You can ask to see or update your information by contacting us.</li>
                  <li><strong>Opt-Out:</strong> You can unsubscribe from emails or adjust ad preferences.</li>
                  <li><strong>Complaints:</strong> If you're worried about how we handle your data, contact us or the OAIC at <a href="https://www.oaic.gov.au/" className="text-blue-300 hover:text-blue-200 underline" target="_blank" rel="noopener noreferrer">https://www.oaic.gov.au/</a>.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
                <p>
                  If you have questions or want to manage your information, reach out to Stream Digital at:
                </p>
                <p className="ml-4">
                  <strong>Email:</strong> <a href="mailto:hello@streamdigital.com.au" className="text-blue-300 hover:text-blue-200 underline">hello@streamdigital.com.au</a>
                </p>
                <p>
                  We're here to help small businesses like electricians and plumbers in Geelong and Bellarine stay private and secure while using our services.
                </p>
              </section>

              <section className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  <strong>Note:</strong> This policy may change, so check back for updates. By using our site, you agree to this policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}