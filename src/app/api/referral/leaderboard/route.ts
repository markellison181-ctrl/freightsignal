import { NextResponse } from 'next/server';

const mockLeaderboard = [
  { name: 'James P.', referralCount: 11, creditsEarned: 3, joinedMonth: 'Jan 2026' },
  { name: 'Linda W.', referralCount: 9, creditsEarned: 3, joinedMonth: 'Feb 2026' },
  { name: 'Carlos M.', referralCount: 7, creditsEarned: 2, joinedMonth: 'Dec 2025' },
  { name: 'Karen B.', referralCount: 6, creditsEarned: 2, joinedMonth: 'Jan 2026' },
  { name: 'Steve R.', referralCount: 5, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Diana L.', referralCount: 4, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Tom N.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Feb 2026' },
  { name: 'Rachel G.', referralCount: 3, creditsEarned: 1, joinedMonth: 'Jan 2026' },
  { name: 'Paul K.', referralCount: 2, creditsEarned: 0, joinedMonth: 'Dec 2025' },
  { name: 'Amy S.', referralCount: 2, creditsEarned: 0, joinedMonth: 'Feb 2026' },
];

export async function GET() {
  const leaderboard = mockLeaderboard.sort((a, b) => b.referralCount - a.referralCount).map((e, i) => ({ ...e, rank: i + 1, isCurrentUser: false }));
  return NextResponse.json({ success: true, leaderboard, stats: { totalReferrers: leaderboard.length, totalReferrals: leaderboard.reduce((s, e) => s + e.referralCount, 0), totalCredits: leaderboard.reduce((s, e) => s + e.creditsEarned, 0), lastUpdated: new Date().toISOString() } });
}
