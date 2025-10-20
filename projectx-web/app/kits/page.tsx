'use client';

import { useState, useMemo } from 'react';
import KitCard from '@/components/KitCard';
import { Badge } from '@/components/ui/Badge';
import Section from '@/components/Section';
import { SAMPLE_KITS } from '@/data/kits';
import type { AgeBand, StreamsPlus, KitLevel } from '@/lib/schemas/kit';

const AGE_BANDS: AgeBand[] = ['0-5', '5-10', '10-15', '15-20', '20-25', '25+'];
const LEVELS: KitLevel[] = ['Starter', 'Explorer', 'Advanced', 'Mastery', 'Premium'];
const STREAMS: StreamsPlus[] = ['Science', 'Technology', 'Robotics', 'Engineering', 'Arts', 'Mathematics', 'Sustainability'];

export default function KitsPage() {
  const [selectedAgeBands, setSelectedAgeBands] = useState<AgeBand[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<KitLevel[]>([]);
  const [selectedStreams, setSelectedStreams] = useState<StreamsPlus[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredKits = useMemo(() => {
    return SAMPLE_KITS.filter((kit) => {
      // Age band filter
      if (selectedAgeBands.length > 0) {
        const hasMatchingAge = kit.ageBands.some((ab: AgeBand) => selectedAgeBands.includes(ab));
        if (!hasMatchingAge) return false;
      }

      // Level filter
      if (selectedLevels.length > 0 && !selectedLevels.includes(kit.level)) {
        return false;
      }

      // STREAMS+ filter
      if (selectedStreams.length > 0) {
        const hasMatchingStream = kit.streamsPlus.some((s: StreamsPlus) => selectedStreams.includes(s));
        if (!hasMatchingStream) return false;
      }

      // Price filter
      if (kit.price < priceRange[0] || kit.price > priceRange[1]) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = kit.name.toLowerCase().includes(query);
        const matchesDesc = kit.description.toLowerCase().includes(query);
        const matchesSkills = kit.skills.some((s: string) => s.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesSkills) return false;
      }

      return true;
    });
  }, [selectedAgeBands, selectedLevels, selectedStreams, priceRange, searchQuery]);

  const toggleAgeBand = (ab: AgeBand) => {
    setSelectedAgeBands((prev) =>
      prev.includes(ab) ? prev.filter((x) => x !== ab) : [...prev, ab]
    );
  };

  const toggleLevel = (level: KitLevel) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((x) => x !== level) : [...prev, level]
    );
  };

  const toggleStream = (stream: StreamsPlus) => {
    setSelectedStreams((prev) =>
      prev.includes(stream) ? prev.filter((x) => x !== stream) : [...prev, stream]
    );
  };

  const clearFilters = () => {
    setSelectedAgeBands([]);
    setSelectedLevels([]);
    setSelectedStreams([]);
    setPriceRange([0, 20000]);
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedAgeBands.length > 0 ||
    selectedLevels.length > 0 ||
    selectedStreams.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 20000 ||
    searchQuery !== '';

  return (
    <div>
      <Section title="ProjectX Learning Kits" subtitle="Pick the perfect kit. Launch outcomes in weeks.">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search kits by name, skill, or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-px-stone bg-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-px-orange"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-6 rounded-lg border border-px-stone bg-white p-4">
              {/* Age Bands */}
              <div>
                <h3 className="mb-3 font-semibold text-sm">Age Band</h3>
                <div className="space-y-2">
                  {AGE_BANDS.map((ab) => (
                    <label key={ab} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAgeBands.includes(ab)}
                        onChange={() => toggleAgeBand(ab)}
                        className="rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm">{ab} yrs</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div>
                <h3 className="mb-3 font-semibold text-sm">Level</h3>
                <div className="space-y-2">
                  {LEVELS.map((level) => (
                    <label key={level} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={() => toggleLevel(level)}
                        className="rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* STREAMS+ */}
              <div>
                <h3 className="mb-3 font-semibold text-sm">Domain</h3>
                <div className="space-y-2">
                  {STREAMS.map((stream) => (
                    <label key={stream} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStreams.includes(stream)}
                        onChange={() => toggleStream(stream)}
                        className="rounded border-gray-300"
                      />
                      <span className="ml-2 text-sm">{stream}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-3 font-semibold text-sm">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="1000"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                    }
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                    }
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500">
                    ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full rounded-lg bg-px-orange px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Results Grid */}
          <main className="lg:col-span-3">
            {/* Results Summary */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold">{filteredKits.length}</span> of{' '}
                <span className="font-semibold">{SAMPLE_KITS.length}</span> kits
              </p>
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2">
                  {selectedAgeBands.map((ab) => (
                    <Badge key={ab} variant="secondary">
                      {ab} yrs ×
                    </Badge>
                  ))}
                  {selectedLevels.map((level) => (
                    <Badge key={level} variant="secondary">
                      {level} ×
                    </Badge>
                  ))}
                  {selectedStreams.map((stream) => (
                    <Badge key={stream} variant="secondary">
                      {stream} ×
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Kits Grid */}
            {filteredKits.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredKits.map((kit) => (
                  <KitCard
                    key={kit.id}
                    id={kit.id}
                    slug={kit.slug}
                    name={kit.name}
                    ageBands={kit.ageBands}
                    level={kit.level}
                    price={kit.price}
                    streamsPlus={kit.streamsPlus}
                    featured={kit.featured}
                    onSelect={() => {
                      // TODO: Navigate to /kits/[slug]
                      console.log('Navigate to kit:', kit.slug);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border-2 border-dashed border-gray-300 py-12 text-center">
                <p className="text-gray-500">No kits match your filters. Try adjusting your search.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 rounded-lg bg-px-orange px-6 py-2 text-sm font-medium text-white hover:bg-orange-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </Section>
    </div>
  );
}
