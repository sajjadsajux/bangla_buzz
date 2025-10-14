import Link from "next/link";
import { FileText, ArrowLeft, Shield, Users, AlertCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors duration-200 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 text-lg">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-purple-100">
          {/* Introduction */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">Welcome to BanglaBuzz! These Terms of Service ("Terms") govern your access to and use of our website, services, and applications (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.</p>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">By creating an account or using BanglaBuzz, you confirm that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You are at least 13 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>All information you provide is accurate and up-to-date</li>
            </ul>
          </section>

          {/* User Accounts */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">When you create an account with BanglaBuzz, you are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains accurate</li>
            </ul>
          </section>

          {/* Content Guidelines */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Content Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree not to post content that:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Violates any laws or regulations</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains hate speech, harassment, or discrimination</li>
              <li>Includes spam, malware, or malicious code</li>
              <li>Impersonates others or misrepresents your affiliation</li>
              <li>Contains false, misleading, or deceptive information</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Your Content:</strong> You retain all rights to the content you post on BanglaBuzz. By posting, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content on our platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Our Content:</strong> The BanglaBuzz platform, including its design, features, and functionality, is owned by us and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Activities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Sell, transfer, or sublicense your account</li>
              <li>Collect user information without consent</li>
              <li>Use the Service for commercial purposes without authorization</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.</p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">To the maximum extent permitted by law, BanglaBuzz shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.</p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you have any questions about these Terms, please contact us:</p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> legal@banglabuzz.com
              </p>
              <p>
                <strong>Address:</strong> Dhaka, Bangladesh
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
