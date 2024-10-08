import { type PlayList as PlayListType } from "../../../shared/data/playlists/schema";
import styles from "./PlayList.module.css";
import { IconButton } from "../../../shared/ui/button/IconButton";

interface PlayListProps {
  playList: PlayListType;
  onEdit: (playList: PlayListType) => void;
  onDelete: (playList: PlayListType) => void;
}

export function PlayList({ playList, onEdit, onDelete }: PlayListProps) {
  return (
    <div className={styles.playList}>
      <div className={styles.playListInfo}>
        <p className={styles.playListTitle}>{playList.name}</p>
        <p className={styles.playListTracks}>
          {playList?.tracks?.length || 0} Tracks
        </p>
      </div>

      <div>
        <IconButton icon="edit" onClick={() => onEdit(playList)} />
        <IconButton icon="delete" onClick={() => onDelete(playList)} />
      </div>
    </div>
  );
}
