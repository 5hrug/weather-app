
const returnLatLon = (town: string) => {
  let lat;
  let lon;
  switch (town) {
     case 'Bratislava':
        lat = '48.148598';
        lon = '17.107748';
        break;
     case 'Humenné':
        lat = '48.9325';
        lon = '21.9079';
        break;
     case 'Koromľa':
        lat = '48.7149';
        lon = '22.2925';
        break;
     case 'Košice':
        lat = '48.7164';
        lon = '21.2611';
        break;
     case 'Michalovce':
        lat = '48.7557';
        lon = '21.9184';
        break;
     case 'Sobrance':
        lat = '48.7458';
        lon = '22.1795';
        break;
     default:
        lat = '48.148598';
        lon = '17.107748';
        break;
  }
  return { lat, lon };
};
export default returnLatLon;