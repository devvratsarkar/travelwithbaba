import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import paymentQr from '../../assets/payment-qr.webp'

export default function PaymentPage() {
  useEffect(() => {
    document.title = 'Make a Payment | Travel with Baba'
    return () => {
      document.title = 'Travel with Baba - Passport & Visa Services in Varanasi'
    }
  }, [])

  return (
    <>
      <section className="band-navy pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <div className="custom_container">
          <p className="text-sm text-white/70">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <span className="px-2">/</span>
            <span>Make a Payment</span>
          </p>
          <h1 className="mt-4 font-sans text-3xl font-medium sm:text-5xl">Make a Payment</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Scan the QR with any UPI app to pay Travel With Baba.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="custom_container grid items-center gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <img
            src={paymentQr}
            alt="UPI QR code for Shivshankar Bharti, 8707238117@sbi, State Bank of India 3365"
            width={600}
            height={814}
            className="mx-auto w-full max-w-sm rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          />
          <div className="rounded-2xl bg-[#f6f8fb] p-6 ring-1 ring-black/5">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Pay to</p>
            <p className="mt-2 font-sans text-2xl font-medium text-[#101828]">Shivshankar Bharti</p>
            <dl className="mt-6 space-y-5 text-sm leading-6">
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">UPI ID</dt>
                <dd className="mt-1 text-base text-[#101828]">8707238117@sbi</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">Receiving in</dt>
                <dd className="mt-1 text-base text-[#101828]">State Bank of India 3365</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-6 text-muted">
              Open PhonePe, Google Pay, Paytm, or any UPI app, scan this code, and enter the amount before you pay.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
