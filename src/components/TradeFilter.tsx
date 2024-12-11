import React from 'react';

interface TradeFilterProps {
  selectedTrade: string;
  onTradeChange: (trade: string) => void;
  trades: string[];
}

export function TradeFilter({ selectedTrade, onTradeChange, trades }: TradeFilterProps) {
  return (
    <select
      value={selectedTrade}
      onChange={(e) => onTradeChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">All Trades</option>
      {trades.map((trade) => (
        <option key={trade} value={trade}>
          {trade}
        </option>
      ))}
    </select>
  );
}