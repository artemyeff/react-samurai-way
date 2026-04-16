import { PageTitle } from "./ui/PageTitle";
import { TracksList } from "./ui/TracksList";
import { TrackDetail } from "./ui/TrackDetail";
import { useSelectedTrack } from "./bll/useSelectedTrack";

export function MainPage() {
  const { selectedTrackId, selectTrack } = useSelectedTrack();

  return (
    <>
      <PageTitle />
      <div className="wrapper">
        <TracksList trackId={selectedTrackId} onTrackSelect={selectTrack} />
        <TrackDetail trackId={selectedTrackId} />
      </div>
    </>
  );
}
