import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MapPin, ChevronDown } from 'lucide-react';
import { branches } from '../data/mockData';

export default function BranchSelector() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentBranchKey = searchParams.get('branch') || 'kinshasa';

  const currentBranch = branches.find((b) => b.key === currentBranchKey) || branches[0];

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set('branch', selectedKey);
    navigate(`/?${newParams.toString()}`);
  };

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center gap-2 bg-[#232b33] hover:bg-[#2c3640] text-slate-100 px-3.5 py-2 rounded-md border border-slate-700/80 transition-colors cursor-pointer group">
        <MapPin className="w-4 h-4 text-[#c2674b] shrink-0" />
        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Branche:</span>
        <span className="text-sm font-semibold text-white tracking-wide">{currentBranch.name}</span>
        {currentBranch.isMain && (
          <span className="text-[10px] bg-[#c2674b]/30 text-[#e99075] px-1.5 py-0.5 rounded font-medium ml-1">
            Siège
          </span>
        )}
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform" />
      </div>

      <select
        value={currentBranchKey}
        onChange={handleBranchChange}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-slate-900"
        title="Sélectionner une branche"
      >
        {branches.map((b) => (
          <option key={b.key} value={b.key} className="text-slate-900 bg-white">
            {b.name} {b.isMain ? '(Branche Principale - Kinshasa)' : `(${b.province})`}
          </option>
        ))}
      </select>
    </div>
  );
}
