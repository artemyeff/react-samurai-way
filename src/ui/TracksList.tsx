import { useTracks } from "../bll/useTracks";
import { TrackItem } from "./TrackItem";
import styles from "./TracksList.module.css";

type Props = {
  trackId: string | null;
  onTrackSelect: (id: string | null) => void;
};

export function TracksList({ trackId, onTrackSelect }: Props) {
  const { tracks } = useTracks();

  const handleReset = () => {
    onTrackSelect?.(null);
  };

  const handleClick = (selectTrackId: string) => {
    onTrackSelect?.(selectTrackId);
  };

  if (tracks === null) {
    return (
      <>
        <div>loading..</div>
      </>
    );
  }

  if (tracks.length === 0) {
    return (
      <>
        <div>no tracks</div>
      </>
    );
  }

  return (
    <div>
      <button onClick={handleReset}>reset</button>
      <ul className={styles.tracks}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              onSelect={handleClick}
              isSelected={track.id === trackId}
            />
          );
        })}
      </ul>
    </div>
  );
}
