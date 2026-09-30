const photo = (id) => `https://ttw.wlimg.com/package-images/photo-big/dir_73/2185031/${id}.jpg`

export const packageIntro =
  'Listed here are some of the exclusive tour packages that we have customized for our valuable clients. Just glance through these packages, and plan your trip with us for a memorable touring experience.'

export const packages = [
  {
    slug: '1-days-sarnath-tour-package',
    title: '1 Days Sarnath Tour Package',
    image: photo('479717'),
    duration: '1 Day',
    destinations: ['Sarnath'],
    activities: ['Museums', 'Sightseeing'],
    themes: ['Religious & Pilgrimage', 'Culture & Heritage'],
    meal: 'EP (No Meal)',
    price: 'On request',
    summary:
      'A day excursion to Sarnath, where the Buddha preached his first sermon. Pickup and drop from the hotel are included.',
    days: [
      {
        label: 'Day 1',
        title: 'Pickup from Hotel by Guide and Cab',
        text: 'This is an excursion to Sarnath, where the Buddha preached his first sermon and set the Dhammachakka, the wheel of law, in motion. Several Buddhist structures were raised at Sarnath between the 3rd century BC and the 11th century AD, and today it presents the most expansive ruins amongst all the places on the Indian Buddhist trail. The Museum at Sarnath contains important findings from the excavations in this area. In modern times, several temples have been built in Sarnath and are also worth visiting.',
      },
    ],
    inclusions: ['EP (No Meal)'],
    payment: '20% advance of the total booking amount.',
    cancellation: 'Upon cancellation, the refund is made after deducting the retention amount.',
  },
  {
    slug: '5-days-varanasi-bodhgaya-and-prayagraj-tour',
    title: '5 Days Varanasi - Bodhgaya And Prayagraj Tour',
    image: photo('479718'),
    duration: '4 Nights / 5 Days',
    destinations: ['Prayagraj', 'Varanasi', 'Bodhgaya', 'Sarnath', 'Allahabad Fort', 'Gaya'],
    activities: ['Boating', 'Sightseeing'],
    themes: ['Religious & Pilgrimage', 'Culture & Heritage', 'Monuments & Historical Places'],
    meal: 'Hotel',
    price: 'On request',
    summary: 'Five days from Varanasi, with Prayagraj, Bodhgaya, a morning boat ride, and Sarnath.',
    days: [
      {
        label: 'Day 1',
        title: 'Varanasi (Arrival)',
        text: 'Upon arrival, meet and greet at the airport or railway station and transfer to the hotel. Overnight stay at the hotel in Varanasi.',
      },
      {
        label: 'Day 2',
        title: 'Varanasi – Allahabad – Varanasi',
        text: 'Varanasi to Allahabad and back to Varanasi.',
      },
      {
        label: 'Day 3',
        title: 'Varanasi – Bodhgaya – Varanasi',
        text: 'Varanasi to Bodhgaya and back to Varanasi.',
      },
      {
        label: 'Day 4',
        title: 'Varanasi – Morning Boat Ride – Sarnath',
        text: 'A morning boat ride in Varanasi, then Sarnath.',
      },
      {
        label: 'Day 5',
        title: 'Departure from Varanasi',
        text: 'Departure from Varanasi.',
      },
    ],
    inclusions: ['Hotel', 'CP (Room + Breakfast)', 'Flights', 'Sightseeing', 'Transfers', 'Pickup-Drop'],
    payment: '20% advance of the total booking amount.',
    cancellation: 'Upon cancellation, the refund is made after deducting the retention amount.',
  },
  {
    slug: '4-days-mirzapur-varanasi-and-durga-temple-tour',
    title: '4 Days Mirzapur - Varanasi And Durga Temple Tour',
    image: photo('479719'),
    duration: '3 Nights / 4 Days',
    destinations: ['Mirzapur', 'Varanasi', 'Durga Temple'],
    activities: ['Sightseeing'],
    themes: ['Religious & Pilgrimage', 'Culture & Heritage'],
    meal: 'CP (Room + Breakfast)',
    price: 'On request',
    summary: 'Varanasi with the evening Ganga Aarti and the temple circuit, then a day toward Vindhyachal.',
    days: [
      {
        label: 'Day 1',
        title: 'Arrival Varanasi',
        text: 'Our staff meet you and escort you to the vehicle after pickup from Varanasi station or the airport. Check in at the hotel and go for the evening Ganga Aarti, with time on the Ganga ghats. Night stay in Varanasi.',
      },
      {
        label: 'Day 2',
        title: 'Varanasi',
        text: 'At 6:00 am, visit Kal Bhairav, Kashi Vishwanath, Annapurna Temple, and Vishalakshi Temple, then return to the hotel for breakfast. Later, visit Sankat Mochan Temple, Durga Temple, Tulsi Manas Mandir, and Tridev Temple. Night stay in Varanasi.',
      },
      {
        label: 'Day 3',
        title: 'Vindhyachal',
        text: 'After breakfast, drive to Vindhyachal, Kali Khoh, Ashta Bhuja Temple, and Sitamarhi. Night stay in Varanasi.',
      },
      {
        label: 'Day 4',
        title: 'Departure',
        text: 'Remaining sightseeing and departure.',
      },
    ],
    inclusions: ['CP (Room + Breakfast)'],
    payment: '20% advance of the total booking amount.',
    cancellation: 'Upon cancellation, the refund is made after deducting the retention amount.',
  },
  {
    slug: '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
    title: '1 Days Varanasi - Durga Temple And Vishwanath Temple Tour',
    image: photo('479720'),
    duration: '1 Day',
    destinations: ['Varanasi', 'Durga Temple', 'Kashi Vishwanath Temple', 'Ramnagar', 'Ramnagar Fort'],
    activities: ['Boating', 'Sightseeing'],
    themes: ['Religious & Pilgrimage', 'Culture & Heritage'],
    meal: 'Hotel',
    price: 'On request',
    summary:
      'A Varanasi day for the sunrise boat ride, Kashi Vishwanath, Durga Temple, Ramnagar Fort, and Sarnath.',
    days: [
      {
        label: 'Day 1',
        title: 'Varanasi',
        text: 'On arrival, meet and greet at the airport or railway station and transfer to the hotel. After freshening up, visit Dashashwamedh Ghat for Subah-e-Banaras and a sunrise boat ride. The temple circuit covers Kashi Vishwanath Temple, Annapurna Temple, and Kal Bhairav Temple. After breakfast, continue to Durga Temple, Tulsi Manas Temple, Sankat Mochan Temple, Banaras Hindu University, Baba Keenaram Sthal, and Ramnagar Fort, including the new Kashi Vishwanath Temple at BHU. Time is free for the silk-weaving lanes and shopping. After lunch, drive to Sarnath, where Lord Buddha delivered his first sermon, for the archaeological museum, temples, and stupas. In the evening, attend Ganga Aarti at Dashashwamedh Ghat from the steps or from a boat. Drop at the hotel or railway station.',
      },
    ],
    inclusions: [
      'Hotel',
      'CP (Room + Breakfast)',
      'Sightseeing',
      'Transfers',
      'Pickup-Drop',
      'Private Cab',
      'Private Guide',
      'Entry Tickets/Passes',
      'Welcome Drink',
    ],
    payment: '20% advance of the total booking amount.',
    cancellation: 'Upon cancellation, the refund is made after deducting the retention amount.',
  },
  {
    slug: '3-days-varanasi-and-durga-temple-tour',
    title: '3 Days Varanasi And Durga Temple Tour',
    image: photo('479721'),
    duration: '2 Nights / 3 Days',
    destinations: ['Varanasi', 'Durga Temple'],
    activities: ['Sightseeing'],
    themes: ['Religious & Pilgrimage', 'Culture & Heritage'],
    meal: 'EP (No Meal)',
    price: 'On request',
    summary: 'Two nights in Varanasi, with the evening Ganga Aarti and a morning temple round that includes Durga Temple.',
    days: [
      {
        label: 'Day 1',
        title: 'Arrival Varanasi',
        text: 'Our staff meet you and escort you to the vehicle after pickup from Varanasi station or the airport. Check in at the hotel and go for the evening Ganga Aarti on the Ganga ghats. Night stay in Varanasi.',
      },
      {
        label: 'Day 2',
        title: 'Varanasi',
        text: 'At 6:00 am, visit Kal Bhairav, Kashi Vishwanath, Annapurna Temple, and Vishalakshi Temple, then return to the hotel for breakfast. Later, visit Sankat Mochan Temple, Durga Temple, Tulsi Manas Mandir, and Tridev Temple. Night stay in Varanasi.',
      },
      {
        label: 'Day 3',
        title: 'Departure',
        text: 'Remaining sightseeing and departure.',
      },
    ],
    inclusions: ['EP (No Meal)'],
    payment: '20% advance of the total booking amount.',
    cancellation: 'Upon cancellation, the refund is made after deducting the retention amount.',
  },
]

export const packageCategories = [
  {
    group: 'Packages by Destination',
    slug: 'varanasi',
    label: 'Varanasi Tours',
    title: 'Varanasi Tour Packages',
    packageSlugs: [
      '3-days-varanasi-and-durga-temple-tour',
      '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
      '4-days-mirzapur-varanasi-and-durga-temple-tour',
      '5-days-varanasi-bodhgaya-and-prayagraj-tour',
    ],
  },
  {
    group: 'Packages by Destination',
    slug: 'sarnath',
    label: 'Sarnath Tours',
    title: 'Sarnath Tour Packages',
    packageSlugs: ['5-days-varanasi-bodhgaya-and-prayagraj-tour', '1-days-sarnath-tour-package'],
  },
  {
    group: 'Packages by Destination',
    slug: 'ramnagar',
    label: 'Ramnagar Tours',
    title: 'Ramnagar Tour Packages',
    packageSlugs: ['1-days-varanasi-durga-temple-and-vishwanath-temple-tour'],
  },
  {
    group: 'Packages by Destination',
    slug: 'prayagraj',
    label: 'Prayagraj Tours',
    title: 'Prayagraj Tour Packages',
    packageSlugs: ['5-days-varanasi-bodhgaya-and-prayagraj-tour'],
  },
  {
    group: 'Packages by Destination',
    slug: 'mirzapur',
    label: 'Mirzapur Tours',
    title: 'Mirzapur Tour Packages',
    packageSlugs: ['4-days-mirzapur-varanasi-and-durga-temple-tour'],
  },
  {
    group: 'Packages by Destination',
    slug: 'bodhgaya',
    label: 'Bodhgaya Tours',
    title: 'Bodhgaya Tour Packages',
    packageSlugs: ['5-days-varanasi-bodhgaya-and-prayagraj-tour'],
  },
  {
    group: 'Packages by Theme',
    slug: 'religious-pilgrimage',
    label: 'Religious & Pilgrimage Tours',
    title: 'Religious & Pilgrimage Tour Packages',
    packageSlugs: [
      '3-days-varanasi-and-durga-temple-tour',
      '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
      '4-days-mirzapur-varanasi-and-durga-temple-tour',
      '5-days-varanasi-bodhgaya-and-prayagraj-tour',
      '1-days-sarnath-tour-package',
    ],
  },
  {
    group: 'Packages by Theme',
    slug: 'culture-heritage',
    label: 'Culture & Heritage Tours',
    title: 'Culture & Heritage Tour Packages',
    packageSlugs: [
      '3-days-varanasi-and-durga-temple-tour',
      '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
      '4-days-mirzapur-varanasi-and-durga-temple-tour',
      '5-days-varanasi-bodhgaya-and-prayagraj-tour',
      '1-days-sarnath-tour-package',
    ],
  },
  {
    group: 'Packages by Theme',
    slug: 'monuments',
    label: 'Monuments & Historical Places Tours',
    title: 'Monuments & Historical Places Tour Packages',
    packageSlugs: ['5-days-varanasi-bodhgaya-and-prayagraj-tour'],
  },
  {
    group: 'Packages by Activity',
    slug: 'sightseeing',
    label: 'Sightseeing Tours',
    title: 'Sightseeing Tour Packages',
    packageSlugs: [
      '3-days-varanasi-and-durga-temple-tour',
      '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
      '4-days-mirzapur-varanasi-and-durga-temple-tour',
      '5-days-varanasi-bodhgaya-and-prayagraj-tour',
      '1-days-sarnath-tour-package',
    ],
  },
  {
    group: 'Packages by Activity',
    slug: 'boating',
    label: 'Boating Tours',
    title: 'Boating Tour Packages',
    packageSlugs: [
      '1-days-varanasi-durga-temple-and-vishwanath-temple-tour',
      '5-days-varanasi-bodhgaya-and-prayagraj-tour',
    ],
  },
  {
    group: 'Packages by Activity',
    slug: 'museums',
    label: 'Museums Tours',
    title: 'Museums Tour Packages',
    packageSlugs: ['1-days-sarnath-tour-package'],
  },
]

export function getPackage(slug) {
  return packages.find((item) => item.slug === slug)
}

export function getCategory(slug) {
  return packageCategories.find((item) => item.slug === slug)
}

export function packagesInCategory(category) {
  return category.packageSlugs.map((slug) => getPackage(slug)).filter(Boolean)
}
