export default function ThankYouVenue() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-12 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Submission <span className="text-primary">Received!</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for submitting your venue/event to CariSponsorPadel
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-bold text-lg mb-4">What happens next?</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">1.</span>
              <span>Our team will review your submission within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">2.</span>
              <span>If approved, we'll create an anonymized opportunity card</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">3.</span>
              <span>We'll contact you via WhatsApp to confirm details</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">4.</span>
              <span>Your opportunity will be visible to interested brands</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">5.</span>
              <span>We'll facilitate connections with matching sponsors</span>
            </li>
          </ol>
        </div>

        <div className="bg-primary bg-opacity-10 border border-primary rounded-lg p-6 mb-8">
          <p className="text-gray-800 font-medium">
            💬 <strong>Expect a WhatsApp message</strong> from us within 24 hours!
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Make sure your WhatsApp notifications are enabled
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to Home
          </a>
          <a
            href="/for-venues"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Submit Another
          </a>
        </div>
      </div>
    </div>
  );
}
