import React from 'react';
import { Link } from 'react-router-dom';
import { Feather, ShieldCheck } from 'lucide-react';

const breedsData = [
  {
    name: 'Gamefowl Aseel',
    origin: 'India & International Lineage',
    desc: 'High stamina international Gamefowl breed. Known for exceptional muscular vigor, heavy bone density, fierce standing posture, and breeding value.',
    image: '/uploads/kathi_sandai_aseel.jpg',
  },
  {
    name: 'Bhimavaram Aseel',
    origin: 'Bhimavaram, West Godavari, AP',
    desc: 'World famous Andhra Aseel breed from Bhimavaram region. Renowned for its tall standing posture, broad chest, immense stamina, and muscular build.',
    image: '/uploads/kathi_sandai_aseel.jpg',
  },
  {
    name: 'Kili Mookku Aseel',
    origin: 'Andhra Pradesh & Tamil Nadu',
    desc: 'Parrot Beak Aseel Naatu Kollu cock with heavy curved beak, thick broad tail, upright posture, and heavy breeding value.',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
  },
  {
    name: 'Pure Naatu Kollu (Natu Kodi)',
    origin: 'South India',
    desc: 'Authentic free-range organic country chicken raised naturally in open farm fields. High demand for rich taste and high egg yield.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800',
  },
  {
    name: 'Peruvidai Naatu Kollu',
    origin: 'Tamil Nadu & Andhra Pradesh',
    desc: 'Heavy breed native country rooster with long heavy legs, red comb, and massive body size ideal for farm stock breeding.',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?w=800',
  },
  {
    name: 'Siruvidai Naatu Kollu',
    origin: 'South India',
    desc: 'Traditional small breed country hen. Highly agile, natural brooder for hatching country eggs naturally.',
    image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800',
  },
  {
    name: 'Kadaknath Naatu Kollu',
    origin: 'Madhya Pradesh & South India',
    desc: 'Original Jet Black Naatu Kollu bird with black plumage, black meat, black bones, and high medicinal value.',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800',
  },
];

const Breeds = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Popular <span className="text-emerald-600">Naatu Kollu Breeds</span>
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Learn about authentic indigenous country chicken breeds available directly from farmers on PoultryMart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breedsData.map((b) => (
          <div
            key={b.name}
            className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="h-52 bg-slate-900 overflow-hidden relative">
              <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                {b.origin}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-900">{b.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{b.desc}</p>
              </div>

              <Link
                to={`/browse?breed=${encodeURIComponent(b.name)}`}
                className="block w-full text-center py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-extrabold text-xs rounded-2xl border border-emerald-200 transition"
              >
                View Available {b.name} Listings →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breeds;
