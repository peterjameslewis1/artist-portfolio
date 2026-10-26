// Gallery content. To add a real image, drop it in public/images/ and set
// `src: 'images/your-file.jpg'`. Leave `src` as null to show a blank placeholder.
// `ratio` is width / height and controls the tile shape.
export const artworks = [
  { title: 'Morning, Kitchen Table', year: 2025, medium: 'Oil on linen', size: '60 × 80 cm', category: 'Paintings', ratio: 3 / 4, src: null },
  { title: 'Field After Rain', year: 2025, medium: 'Oil on board', size: '40 × 30 cm', category: 'Paintings', ratio: 4 / 3, src: null },
  { title: 'Harbour Study I', year: 2024, medium: 'Ink on paper', size: 'A4', category: 'Drawings', ratio: 1, src: null },
  { title: 'The Long Walk Home', year: 2024, medium: 'Book cover, digital', size: '—', category: 'Illustration', ratio: 2 / 3, src: null },
  { title: 'Window, February', year: 2024, medium: 'Oil on linen', size: '50 × 50 cm', category: 'Paintings', ratio: 1, src: null },
  { title: 'Market Day', year: 2024, medium: 'Ink & watercolour', size: 'A3', category: 'Illustration', ratio: 4 / 3, src: null },
  { title: 'Hands, Sketchbook', year: 2023, medium: 'Graphite', size: 'A5', category: 'Drawings', ratio: 3 / 4, src: null },
  { title: 'Evening Hills', year: 2023, medium: 'Oil on canvas', size: '100 × 70 cm', category: 'Paintings', ratio: 10 / 7, src: null },
  { title: 'Magazine Spot: Sleep', year: 2023, medium: 'Editorial, digital', size: '—', category: 'Illustration', ratio: 1, src: null },
]

export const cv = [
  {
    heading: 'Solo exhibitions',
    items: [
      { year: '2025', text: 'In Between Light — Gallery Name, Bristol' },
      { year: '2023', text: 'Small Rituals — Studio Space, Bath' },
    ],
  },
  {
    heading: 'Group exhibitions',
    items: [
      { year: '2025', text: 'Summer Open — Royal West of England Academy, Bristol' },
      { year: '2024', text: 'New Landscapes — Gallery Name, London' },
      { year: '2022', text: 'Graduate Show — Art School Name' },
    ],
  },
  {
    heading: 'Awards & residencies',
    items: [
      { year: '2024', text: 'Residency — Artist Retreat Name, Cornwall' },
      { year: '2023', text: 'Shortlisted — Painting Prize Name' },
    ],
  },
  {
    heading: 'Education',
    items: [{ year: '2022', text: 'BA (Hons) Fine Art — Art School Name' }],
  },
  {
    heading: 'Selected clients & press',
    items: [
      { year: '2025', text: 'Cover illustration — Publisher Name' },
      { year: '2024', text: 'Featured in Magazine Name, “Ones to watch”' },
    ],
  },
]
