import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/londrina-solid';

const OwnerMap = () => {
  const navigate = useNavigate();
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filters = [
    'Close to me',
    'Hotels',
    'Low $',
    'High $',
    'Individuals',
    'Pet-bath',
    'Pet-walking',
    'Pet-spa',
    'Sheer',
    'Higher Reviews',
  ];

  const markers = [
    { id: 1, top: '30%', left: '15%', tags: ['Hotels', 'Low $'] },
    { id: 2, top: '60%', left: '20%', tags: ['Pet-walking'] },
    { id: 3, top: '70%', left: '60%', tags: ['High $'] },
    { id: 4, top: '48%', left: '43%', tags: ['Hotels', 'High $'], isCluster: true, count: '3+' },
    { id: 5, top: '75%', left: '10%', tags: ['Pet-spa'], isCluster: true, count: '2' },
  ];

  const styles = {
    page: {
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url(/images/Map.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: "'Londrina Solid', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    searchContainer: {
      position: 'absolute',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '400px',
      zIndex: 2,
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      borderRadius: '20px',
      padding: '0.5rem 1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
    searchInput: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: '1rem',
      fontFamily: "'Londrina Solid', sans-serif",
    },
    filterIcon: {
      width: '24px',
      height: '24px',
      marginLeft: '0.5rem',
      cursor: 'pointer',
    },
    filterPanel: {
      display: filtersVisible ? 'flex' : 'none',
      flexWrap: 'wrap',
      justifyContent: 'center',
      background: '#FECD63',
      padding: '1rem',
      borderRadius: '20px',
      marginTop: '0.5rem',
      gap: '0.5rem',
      fontSize: '0.9rem',
    },
    filterButton: {
      background: 'white',
      border: '2px solid #2D2432',
      borderRadius: '20px',
      padding: '0.3rem 0.8rem',
      fontFamily: "'Londrina Solid', sans-serif",
      cursor: 'pointer',
    },
    marker: {
      position: 'absolute',
      width: '50px',
      height: '50px',
    },
    cluster: {
      background: 'rgba(255, 100, 100, 0.4)',
      borderRadius: '50%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#2D2432',
      lineHeight: '50px',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '60px',
      background: '#2D2432',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 1,
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    footerIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      overflow: 'hidden',
    },
    footerIconImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={styles.page}>
      {/* Barra de pesquisa e filtro */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search by location"
            style={styles.searchInput}
          />
          <img
            src="/images/filter-icon.png"
            alt="Filter"
            style={styles.filterIcon}
            onClick={() => setFiltersVisible(!filtersVisible)}
          />
        </div>

        <div style={styles.filterPanel}>
          {filters.map((label) => (
            <div
              key={label}
              style={{
                ...styles.filterButton,
                background: activeFilters.includes(label) ? '#2D2432' : 'white',
                color: activeFilters.includes(label) ? 'white' : '#2D2432',
              }}
              onClick={() => toggleFilter(label)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Marcadores visíveis conforme os filtros */}
      {markers
        .filter(marker =>
          activeFilters.length === 0 ||
          marker.tags.some(tag => activeFilters.includes(tag))
        )
        .map(marker =>
          marker.isCluster ? (
            <div
              key={marker.id}
              style={{
                ...styles.marker,
                ...styles.cluster,
                top: marker.top,
                left: marker.left,
              }}
            >
              {marker.count}
            </div>
          ) : (
            <img
              key={marker.id}
              src="/images/marker1.png"
              alt="Marker"
              style={{ ...styles.marker, top: marker.top, left: marker.left }}
            />
          )
        )}

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.footerIcon}>
          <img
            src="/images/home.svg"
            alt="Home"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerHomeInterface')}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/map-on.svg"
            alt="Map"
            style={styles.footerIconImage}
          />
        </div>
        <div style={styles.footerIcon}>
          <img
            src="/images/settings.svg"
            alt="Settings"
            style={styles.footerIconImage}
            onClick={() => navigate('/OwnerSettings')}
          />
        </div>
      </div>
    </div>
  );
};

export default OwnerMap;
