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
      <div className="flex items-center gap-1.5 sm:gap-2 bg-[#232b33] hover:bg-[#2c3640] text-slate-100 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-md border border-slate-700/80 transition-colors cursor-pointer group min-h-[38px] sm:min-h-[40px] max-w-[130px] sm:max-w-none">
        <MapPin className="w-3.5 h-3.5 text-[#c2674b] shrink-0" />
        <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium hidden md:inline">
          Branche :
        </span>
        <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
          {branch.name}
        </span>
        {branch.isMain && (
          <span className="hidden sm:inline-block text-[10px] bg-[#c2674b]/30 text-[#e99075] px-1.5 py-0.5 rounded font-medium ml-0.5 shrink-0">
            Siège
          </span>
        )}
        <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-white transition-transform shrink-0" />
      </div>

      <select
        value={branchKey}
        onChange={handleBranchChange}
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full text-slate-900"
        title="Sélectionner une branche"
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
