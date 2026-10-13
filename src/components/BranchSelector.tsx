import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { useBranch } from '../utils/useBranch';

export default function BranchSelector() {
  const { branch, branchKey, branches, setBranch } = useBranch();

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBranch(e.target.value);
  };

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center gap-2 bg-[#232b33] hover:bg-[#2c3640] text-slate-100 px-3.5 py-2 rounded-md border border-slate-700/80 transition-colors cursor-pointer group">
        <MapPin className="w-4 h-4 text-[#c2674b] shrink-0" />
        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium hidden sm:inline">
          Branche :
        </span>
        <span className="text-sm font-semibold text-white tracking-wide">
          {branch.name}
        </span>
        {branch.isMain && (
          <span className="text-[10px] bg-[#c2674b]/30 text-[#e99075] px-1.5 py-0.5 rounded font-medium ml-1">
            Siège
          </span>
        )}
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform" />
      </div>

      <select
        value={branchKey}
        onChange={handleBranchChange}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-slate-900"
        title="Sélectionner une branche pour filtrer tout le site"
      >
        {branches.map((b) => (
          <option key={b.key} value={b.key} className="text-slate-900 bg-white">
            {b.name} {b.isMain ? '(Siège National - Kinshasa)' : `(${b.province})`}
          </option>
        ))}
      </select>
    </div>
  );
}
