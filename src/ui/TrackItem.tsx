import clsx from "clsx";
import { type TrackListItemOutput } from "../dal/api";
import styles from "./TracksList.module.css";

type Props = {
  track: TrackListItemOutput;
  isSelected: boolean;
  onSelect: (trackId: string) => void;
};

export function TrackItem({ track, isSelected, onSelect }: Props) {
  const className = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected,
  });

  return (
    <li className={className}>
      <div onClick={() => onSelect(track.id)}>{track.attributes.title}</div>
      <audio controls src={track.attributes.attachments[0].url}></audio>
    </li>
  );
}
