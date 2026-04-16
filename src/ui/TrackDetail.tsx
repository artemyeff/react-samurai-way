import { useDetailTrack } from "../bll/useDetailTrack";
import styles from "./TrackDetail.module.css";

type Props = {
  trackId: string | null;
};

export function TrackDetail({ trackId }: Props) {
  const { trackDetails } = useDetailTrack(trackId);

  return (
    <div className={styles.track}>
      <h2>Details</h2>
      {!trackDetails && !trackId && "not selected track"}

      {trackDetails && trackId && trackDetails.id !== trackId && "loading..."}
      {trackDetails && trackId && trackDetails.id === trackId && (
        <>
          <h3>Title</h3>
          <p>{trackDetails?.attributes.title}</p>
          <h3>Lyrics</h3>
          <p>{trackDetails?.attributes.lyrics ?? "no lyrics"}</p>
        </>
      )}
    </div>
  );
}
