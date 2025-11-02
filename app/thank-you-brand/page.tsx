export default function ThankYouBrand() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-12 text-center">
        <div className="text-6xl mb-6">🤝</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Inquiry <span className="text-primary">Submitted!</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your interest in sponsoring padel in Indonesia
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-bold text-lg mb-4">What happens next?</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">1.</span>
              <span>Our team will review your inquiry immediately</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">2.</span>
              <span>We'll contact you via WhatsApp within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">3.</span>
              <span>We'll present curated sponsorship opportunities that match your goals</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">4.</span>
              <span>We facilitate introductions and negotiations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 font-bold">5.</span>
              <span>You connect directly with venues/events that fit your brand</span>
            </li>
          </ol>
        </div>

        <div className="bg-primary bg-opacity-10 border border-primary rounded-lg p-6 mb-8">
          <p className="text-gray-800 font-medium">
            💬 <strong>Expect a WhatsApp message</strong> from us within 24 hours!
          </p>
          <p className="text-sm text-gray-600 mt-2">
            We'll discuss opportunities that align with your budget and goals
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-3">In the meantime...</h3>
          <p className="text-gray-600 text-sm mb-4">
            Continue browsing available sponsorship opportunities
          </p>
          <a
            href="/opportunities"
            className="inline-block bg-primary text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-green-400 transition"
          >
            Browse More Opportunities
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to Home
          </a>
          <a
            href="/for-brands"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Submit Another Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
