import type { ReactNode } from "react";
import {
  AgencyLeaderboard,
  CapitolSerp,
  CatalogRank,
  CitySerpClimb,
  HarborSearch,
  MaDemandMap,
  MapPackPins,
  RiStatePulse,
  SeasonDial,
  TriStateLink,
  TrustRank,
} from "./SeoVisuals";
import {
  BostonPulse,
  ChannelOrbit,
  CoastBookings,
  CorridorTracker,
  CtMarketGrid,
  LeadFunnel,
  RoiMeter,
  StarterStack,
  WickfordBoard,
} from "./MarketingVisuals";
import { ConvertWireframe, MobileFirstBuild, ShipChecklist } from "./WebVisuals";

const visuals: Record<string, ReactNode> = {
  "ri-state-pulse": <RiStatePulse />,
  "agency-leaderboard": <AgencyLeaderboard />,
  "city-serp-climb": <CitySerpClimb />,
  "convert-wireframe": <ConvertWireframe />,
  "channel-orbit": <ChannelOrbit />,
  "lead-funnel": <LeadFunnel />,
  "starter-stack": <StarterStack />,
  "map-pack-pins": <MapPackPins />,
  "season-dial": <SeasonDial />,
  "harbor-search": <HarborSearch />,
  "corridor-tracker": <CorridorTracker />,
  "mobile-first-build": <MobileFirstBuild />,
  "trust-rank": <TrustRank />,
  "ship-checklist": <ShipChecklist />,
  "ct-market-grid": <CtMarketGrid />,
  "capitol-serp": <CapitolSerp />,
  "ma-demand-map": <MaDemandMap />,
  "boston-pulse": <BostonPulse />,
  "roi-meter": <RoiMeter />,
  "tri-state-link": <TriStateLink />,
  "wickford-board": <WickfordBoard />,
  "coast-bookings": <CoastBookings />,
  "catalog-rank": <CatalogRank />,
};

export function KeywordVisual({ id }: { id: string }) {
  return <>{visuals[id] ?? <RiStatePulse />}</>;
}
