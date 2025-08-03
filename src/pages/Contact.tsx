export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Feel free to reach out if you have any questions, suggestions, or feedback!</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" placeholder="Your name" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" placeholder="Your email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea rows={4} placeholder="Your message" className="w-full px-3 py-2 border rounded"></textarea>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Send
        </button>
      </form>
    </div>
  );
}
