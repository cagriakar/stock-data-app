import type { MarketStatus, Match, RowMatch } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMatchData(data: RowMatch[]): Match[] {
  return data.map((match) => {
    const formattedMatch = Object.entries(match).reduce(
      (acc, [key, value]) => ({ ...acc, [key.split('. ')[1] as keyof Match]: value }),
      {} as Match
    );
    return formattedMatch;
  });
}

export function formatMarketData(data: MarketStatus[]): MarketStatus[] {
  return data.map((market) => ({ ...market, current_status: market.current_status.toLocaleUpperCase() }));
}
