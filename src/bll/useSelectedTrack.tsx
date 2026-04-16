import { useState } from "react";

export function useSelectedTrack() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  const selectTrack = (trackId: string | null) => {
    setSelectedTrackId(trackId);
  };

  return { selectedTrackId, selectTrack };
}
