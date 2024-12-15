import BookingForm from '../components/BookingForm'

export default function BookingPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-serif text-gold mb-8">Book a Table</h2>
      <p className="text-gray-300 max-w-md font-light mb-8">
        Secure your spot and immerse yourself in a memorable dining experience.
      </p>
      <BookingForm />
    </div>
  )
}
