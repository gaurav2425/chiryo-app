import React from 'react';
import styles from './MusicPlayer.module.css';
import {
  IoChevronDownOutline,
  IoEllipsisHorizontal,
  IoHeartOutline,
  IoHeart,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
  IoShuffleOutline,
  IoRepeatOutline,
  IoChevronDownSharp,
  IoMusicalNotesOutline
} from 'react-icons/io5';

interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  album: string;
  color: string;
}

interface MusicPlayerProps {
  song: Song;
  onClose: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ song, onClose }) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isLiked, setIsLiked] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(97); // 1:37 in seconds
  const [showLyrics, setShowLyrics] = React.useState(false);

  const totalTime = 261; // 4:21 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / totalTime) * 100;

  return (
    <div className={styles.playerContainer}>
      {/* Header */}
      <div className={styles.playerHeader}>
        <button className={styles.headerBtn} onClick={onClose}>
          <IoChevronDownOutline />
        </button>
        <div className={styles.albumInfo}>
          <span className={styles.albumLabel}>PLAYING FROM ALBUM</span>
          <h3 className={styles.albumName}>{song.title}</h3>
        </div>
        <button className={styles.headerBtn}>
          <IoEllipsisHorizontal />
        </button>
      </div>

      {/* Album Art */}
      <div 
        className={styles.albumArt}
        style={{ background: song.color }}
      >
        <div className={styles.albumArtGradient}>
          <IoMusicalNotesOutline className={styles.albumMusicIcon} />
        </div>
      </div>

      {/* Song Info */}
      <div className={styles.songInfo}>
        <div className={styles.songDetails}>
          <h2 className={styles.songTitle}>{song.title}</h2>
          <p className={styles.artistName}>{song.artist}</p>
        </div>
        <button 
          className={styles.likeBtn}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? <IoHeart className={styles.liked} /> : <IoHeartOutline />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progressPercentage}%` }}
          >
            <div className={styles.progressThumb}></div>
          </div>
        </div>
        <div className={styles.timeLabels}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(totalTime)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.controlBtn}>
          <IoShuffleOutline />
        </button>
        <button className={styles.controlBtn}>
          <IoPlaySkipBackSharp />
        </button>
        <button 
          className={styles.playBtn}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button className={styles.controlBtn}>
          <IoPlaySkipForwardSharp />
        </button>
        <button className={styles.controlBtn}>
          <IoRepeatOutline />
        </button>
      </div>

      {/* Lyrics Toggle */}
      <div className={styles.lyricsToggle}>
        <button 
          className={styles.lyricsBtn}
          onClick={() => setShowLyrics(!showLyrics)}
        >
          <span>LYRICS</span>
          <IoChevronDownSharp className={showLyrics ? styles.rotated : ''} />
        </button>
      </div>

      {/* Lyrics Panel (if shown) */}
      {showLyrics && (
        <div className={styles.lyricsPanel}>
          <div className={styles.lyricsContent}>
            <p>I'm a motherfuckin' starboy</p>
            <p>Look what you've done</p>
            <p>I'm a motherfuckin' starboy</p>
            <p>Look what you've done</p>
            <p>I'm a motherfuckin' starboy</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;