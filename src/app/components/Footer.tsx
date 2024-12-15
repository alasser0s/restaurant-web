export default function Footer() {
  return (
    <footer className="bg-darkbg border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
        © {new Date().getFullYear()} La Bella Vita. All rights reserved.
      </div>
    </footer>
  )
}
