import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { branches, Branch } from '../data/mockData';

export function useBranch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentBranchKey = searchParams.get('branch') || 'kinshasa';
  const branch: Branch =
    branches.find((b) => b.key === currentBranchKey) || branches[0];

  const setBranch = (newBranchKey: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('branch', newBranchKey);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const branchLink = (path: string) => {
    // Return path preserving the branch param
    const prefix = path.startsWith('/') ? path : `/${path}`;
    return `${prefix}?branch=${branch.key}`;
  };

  return {
    branch,
    branchKey: branch.key,
    branches,
    setBranch,
    branchLink,
    searchParams,
  };
}
