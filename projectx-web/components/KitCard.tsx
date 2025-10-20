'use client';

import type { AgeBand, StreamsPlus, KitLevel } from '@/lib/schemas/kit';
import { Badge } from './ui/Badge';

interface KitCardProps {
  id: string;
  slug: string;
  name: string;
  ageBands: AgeBand[];
  level: KitLevel;
  price: number;
  streamsPlus: StreamsPlus[];
  featured?: boolean;
  onSelect: () => void;
}

export default function KitCard({
  id,
  slug,
  name,
  ageBands,
  level,
  price,
  streamsPlus,
  featured,
  onSelect,
}: KitCardProps) {
  const displayStreams = streamsPlus.slice(0, 3);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-px-stone bg-white p-6 shadow-sm transition-all hover:shadow-card hover:border-px-orange/50">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <Badge variant="orange">Featured</Badge>
        </div>
      )}

      {/* Content */}
      <div>
        <div className="flex items-start justify-between pr-12">
          <div>
            <h3 className="text-lg font-bold text-px-ink">{name}</h3>
            <p className="mt-1 text-xs text-gray-500">{level}</p>
          </div>
        </div>

        {/* Age Bands */}
        <div className="mt-3 flex flex-wrap gap-2">
          {ageBands.map((ab) => (
            <Badge key={ab} variant="secondary">
              {ab}
            </Badge>
          ))}
        </div>

        {/* STREAMS+ */}
        <div className="mt-4 flex flex-wrap gap-2">
          {displayStreams.map((stream) => (
            <span key={stream} className="text-xs bg-px-orange/10 text-px-orange px-2 py-1 rounded">
              {stream}
            </span>
          ))}
          {streamsPlus.length > 3 && (
            <span className="text-xs text-gray-400">+{streamsPlus.length - 3}</span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-px-stone pt-4">
        <div className="text-lg font-bold text-px-ink">
          ₹{price.toLocaleString('en-IN')}
        </div>
        <button
          onClick={onSelect}
          className="rounded-lg bg-px-orange px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
