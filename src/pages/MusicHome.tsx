import React, { useState, useEffect } from 'react';
import styles from './MusicHome.module.css';
import { 
  IoNotificationsOutline, 
  IoMailOutline,
  IoHomeSharp,
  IoSearchOutline,
  IoAddCircleOutline,
  IoLibraryOutline,
  IoPersonOutline,
  IoChevronForwardOutline,
  IoSparkles,
  IoClose,
  IoMusicalNotesOutline,
  IoHeartOutline,
  IoPersonAddOutline
} from 'react-icons/io5';
import { BiChevronRight } from 'react-icons/bi';
import MusicPlayer from '../components/MusicPlayer';

function getUserFromCookie() {
  const match = document.cookie.match(/chiryo_user=([^;]+)/);
  if (match) {
    try {
      return JSON.parse(decodeURIComponent(match[1]));
    } catch {
      return null;
    }
  }
  return null;
}

const MusicHome: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedSong, setSelectedSong] = useState<typeof popularSongs[0] | null>(null);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);

  useEffect(() => {
    setUser(getUserFromCookie());
  }, []);

  // Generate random gradient colors
  const getRandomGradient = () => {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
      'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const categories = ['All', 'Party', 'Blues', 'Sad', 'Hip Hop'];
  
  const popularSongs = [
    {
      id: 1,
      title: 'Starboy Remix',
      artist: 'The Weeknd',
      image: '',
      color: getRandomGradient(),
      album: 'Starboy Remix'
    },
    {
      id: 2,
      title: 'Superman',
      artist: 'Eminem',
      image: '',
      color: getRandomGradient(),
      album: 'Superman'
    },
    {
      id: 3,
      title: 'We Don\'t',
      artist: 'Kyanu & More',
      image: '',
      color: getRandomGradient(),
      album: 'We Don\'t'
    }
  ];

  const collections = [
    {
      id: 1,
      title: 'TOP SONGS GLOBAL',
      subtitle: 'Discover 85 songs',
      image: '',
      bgColor: '#fff',
      imageGradient: getRandomGradient()
    },
    {
      id: 2,
      title: 'PUNJABI SONGS',
      subtitle: 'Discover latest hits',
      image: '',
      bgColor: '#e0f7fa',
      imageGradient: getRandomGradient()
    }
  ];

  const playlists = [
    { id: 1, title: 'Chill Vibes', image: '', color: getRandomGradient() },
    { id: 2, title: 'Workout Mix', image: '', color: getRandomGradient() },
    { id: 3, title: 'Study Session', image: '', color: getRandomGradient() }
  ];

  const notifications = [
    {
      id: 1,
      icon: <IoMusicalNotesOutline />,
      title: 'New Release',
      message: 'The Weeknd just released a new album "Dawn FM"',
      time: '2 min ago',
      type: 'music'
    },
    {
      id: 2,
      icon: <IoHeartOutline />,
      title: 'Liked Song',
      message: 'Your friend Sarah liked "Blinding Lights"',
      time: '1 hour ago',
      type: 'like'
    },
    {
      id: 3,
      icon: <IoPersonAddOutline />,
      title: 'New Follower',
      message: 'John Doe started following you',
      time: '3 hours ago',
      type: 'follow'
    },
    {
      id: 4,
      icon: <IoMusicalNotesOutline />,
      title: 'Playlist Update',
      message: 'Your playlist "Workout Mix" has 5 new songs',
      time: '5 hours ago',
      type: 'music'
    }
  ];

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleSongClick = (song: typeof popularSongs[0]) => {
    setSelectedSong(song);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.greeting}>
          <span className={styles.greetingText}>Hello, </span>
          <span className={styles.userName}>{user?.name || "User"}</span>
          <IoSparkles className={styles.sparkle} />
        </div>
        <div className={styles.headerActions}>
          <button 
            className={styles.iconButton} 
            aria-label="Notifications"
            onClick={toggleNotifications}
          >
            <IoNotificationsOutline className={styles.icon} />
            <span className={styles.notificationBadge}>4</span>
          </button>
          <button className={styles.iconButton} aria-label="Messages">
            <IoMailOutline className={styles.icon} />
          </button>
        </div>
      </header>

      {/* Notifications Popup */}
      {showNotifications && (
        <>
          <div className={styles.overlay} onClick={toggleNotifications}></div>
          <div className={styles.notificationPopup}>
            <div className={styles.popupHeader}>
              <h3 className={styles.popupTitle}>Notifications</h3>
              <button 
                className={styles.closeBtn} 
                onClick={toggleNotifications}
                aria-label="Close notifications"
              >
                <IoClose />
              </button>
            </div>
            <div className={styles.notificationList}>
              {notifications.map((notification) => (
                <div key={notification.id} className={styles.notificationItem}>
                  <div className={`${styles.notificationIcon} ${styles[notification.type]}`}>
                    {notification.icon}
                  </div>
                  <div className={styles.notificationContent}>
                    <h4 className={styles.notificationTitle}>{notification.title}</h4>
                    <p className={styles.notificationMessage}>{notification.message}</p>
                    <span className={styles.notificationTime}>{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.popupFooter}>
              <button className={styles.markAllReadBtn}>Mark all as read</button>
            </div>
          </div>
        </>
      )}

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>Select Categories</h2>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${styles.categoryBtn} ${index === 0 ? styles.categoryActive : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Songs */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Popular Songs</h2>
          <button className={styles.seeAllBtn}>
            See all <BiChevronRight className={styles.arrow} />
          </button>
        </div>
        <div className={styles.songsGrid}>
          {popularSongs.map((song) => (
            <div 
              key={song.id} 
              className={styles.songCard}
              onClick={() => handleSongClick(song)}
            >
              <div 
                className={styles.songImage}
                style={{ background: song.color }}
              >
                <IoMusicalNotesOutline className={styles.musicIcon} />
              </div>
              <div className={styles.songInfo}>
                <h3 className={styles.songTitle}>{song.title}</h3>
                <p className={styles.songArtist}>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Collection */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>New Collection</h2>
        <div className={styles.collectionsScroll}>
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className={styles.collectionCard}
              style={{ backgroundColor: collection.bgColor }}
            >
              <div className={styles.collectionContent}>
                <h3 className={styles.collectionTitle}>{collection.title}</h3>
                <p className={styles.collectionSubtitle}>{collection.subtitle}</p>
                <button className={styles.collectionArrow} aria-label="View collection">
                  <IoChevronForwardOutline />
                </button>
              </div>
              <div 
                className={styles.collectionImage}
                style={{ background: collection.imageGradient }}
              >
                <IoMusicalNotesOutline className={styles.collectionMusicIcon} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlist */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Playlist</h2>
          <button className={styles.seeAllBtn}>
            See all <BiChevronRight className={styles.arrow} />
          </button>
        </div>
        <div className={styles.playlistGrid}>
          {playlists.map((playlist) => (
            <div key={playlist.id} className={styles.playlistCard}>
              <div 
                className={styles.playlistImage}
                style={{ background: playlist.color }}
              >
                <IoMusicalNotesOutline className={styles.musicIcon} />
              </div>
              <h3 className={styles.playlistTitle}>{playlist.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <button className={styles.navItem} aria-label="Home">
          <IoHomeSharp className={styles.navIcon} />
          <span className={styles.navLabel}>Home</span>
        </button>
        <button className={styles.navItem} aria-label="Search">
          <IoSearchOutline className={styles.navIcon} />
          <span className={styles.navLabel}>Search</span>
        </button>
        <button className={styles.navItem} aria-label="Add">
          <IoAddCircleOutline className={styles.navIcon} />
          <span className={styles.navLabel}>Add</span>
        </button>
        <button className={styles.navItem} aria-label="Library">
          <IoLibraryOutline className={styles.navIcon} />
          <span className={styles.navLabel}>Library</span>
        </button>
        <button className={styles.navItem} aria-label="Profile">
          <IoPersonOutline className={styles.navIcon} />
          <span className={styles.navLabel}>Profile</span>
        </button>
      </nav>

      {/* Music Player */}
      {selectedSong && (
        <MusicPlayer 
          song={selectedSong} 
          onClose={() => setSelectedSong(null)} 
        />
      )}
    </div>
  );
};

export default MusicHome;