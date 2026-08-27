import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../services/api';
import PoultryCard from '../../components/PoultryCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Search, Phone, ShieldCheck, CheckCircle, ArrowRight, UserPlus, Sparkles, Feather, MapPin } from 'lucide-react';

const popularBreedsList = [
  { name: 'Pure Naatu Kollu', desc: 'Organic Country Hen / Natu Kodi', icon: '🌾', badge: '100% Organic' },
  { name: 'Peruvian', desc: 'Heavyweight Peruvian Aseel Breed', icon: '🦚', badge: 'Peruvian Spec' },
  { name: 'Peru Cross', desc: 'Heavy Peruvidai Hybrid Breed', icon: '⚡', badge: 'Peru Cross' },
  { name: 'Gamefowl Aseel', desc: 'High Game Breed & Muscular Stamina', icon: '👑', badge: 'Gamefowl Line' },
  { name: 'Bhimavaram Aseel', desc: 'Famous West Godavari Breeder & Fighter', icon: '🔥', badge: 'Bhimavaram Spec' },
  { name: 'Peruvidai Naatu Kollu', desc: 'Heavy Breed Country Rooster', icon: '🐓', badge: 'Heavy Size' },
  { name: 'Kili Mookku Aseel', desc: 'Parrot Beak Native Rooster', icon: '🦜', badge: 'Champion Line' },
  { name: 'Kathi Sandai Aseel', desc: 'High Stamina Fighter Rooster', icon: '⚔️', badge: 'Stamina Fighter' },
];

const Home = () => {
  const [featuredPoultry, setFeaturedPoultry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heroSearch, setHeroSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await API.get('/poultry?limit=6&sortBy=newest');
        setFeaturedPoultry(res.data.poultry || []);
      } catch (error) {
        console.error('[Fetch Featured Error]', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/browse?search=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      navigate('/browse');
    }
  };

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-800/50 border border-emerald-500/30 px-4 py-2 rounded-full text-xs font-bold text-emerald-200 backdrop-blur-md shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>100% Authentic Naatu Kollu (Country Chicken) Marketplace</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-none">
                Buy & Sell <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Naatu Kollu</span> Directly from Farmers
              </h1>

              <p className="text-lg text-emerald-100/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Find organic free-range Naatu Kollu (Natu Kodi), Peruvian, Peru Cross, Gamefowl Aseel, Bhimavaram, Peruvidai, and Kili Mookku country hens and roosters directly from local farmers. Zero middleman fees!
              </p>

              {/* Integrated Hero Search Bar */}
              <form onSubmit={handleHeroSearchSubmit} className="relative max-w-xl mx-auto lg:mx-0">
                <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-white/20">
                  <Search className="w-5 h-5 text-slate-400 absolute left-5 pointer-events-none" />
                  <input
                    type="text"
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    placeholder="Search Peruvian, Peru Cross, Gamefowl, Bhimavaram..."
                    className="w-full pl-12 pr-36 py-3 bg-transparent text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-600/30 transition transform hover:scale-105"
                  >
                    Find Naatu Kollu
                  </button>
                </div>
              </form>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/browse"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-sm shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Browse Naatu Kollu
                </Link>
                <Link
                  to="/seller/register"
                  className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-sm backdrop-blur-md shadow-xl transition transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4 text-emerald-400" />
                  Sell Your Naatu Kollu
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-emerald-800/40 grid grid-cols-3 gap-4 text-center lg:text-left text-xs font-semibold text-emerald-200/80">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Organic Country Breed</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>1-Tap Call Farmer</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Zero Buyer Signup</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-2xl glow-emerald transform lg:rotate-2 hover:rotate-0 transition duration-500">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1000"
                    alt="Authentic Free Range Naatu Kollu"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Peruvian & Native Breeds
                      </span>
                      <h3 className="text-xl font-black">Organic Free Range Naatu Kollu</h3>
                      <p className="text-xs text-emerald-200">Peruvian, Peru Cross, Gamefowl & Bhimavaram</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl text-slate-900 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Marketplace Focus</span>
                    <span className="text-lg font-black text-emerald-700">Naatu Kollu Direct Farmers</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-lg">
                    🐓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Poultry Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
              Direct From Farmers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Featured <span className="text-emerald-600">Naatu Kollu Listings</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Recently approved Peruvian roosters, Peru Cross, Gamefowl Aseel, and organic country hens.
            </p>
          </div>
          <Link
            to="/browse"
            className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-black text-xs transition flex items-center gap-1.5 border border-emerald-200"
          >
            View All Naatu Kollu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner message="Fetching Naatu Kollu listings..." />
        ) : featuredPoultry.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl text-center border border-slate-200 shadow-sm">
            <p className="text-slate-500 font-bold">No Naatu Kollu listings available right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPoultry.map((item) => (
              <PoultryCard key={item._id} poultry={item} />
            ))}
          </div>
        )}
      </section>

      {/* Popular Breeds Section */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-200/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
              Native Breeds
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Popular <span className="text-emerald-600">Naatu Kollu Varieties</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore authentic native country chicken breeds raised organically in open farm fields.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {popularBreedsList.map((breed) => (
              <Link
                key={breed.name}
                to={`/browse?breed=${encodeURIComponent(breed.name)}`}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  {breed.badge}
                </div>
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200/60 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {breed.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-700 transition">
                  {breed.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">{breed.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
