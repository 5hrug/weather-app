export const cities = [
   'Bratislava',
   'Humenné',
   'Koromľa',
   'Košice',
   'Michalovce',
   'Sobrance',
];

export const convertUnix = (
   unix_timestamp: number,
   timezone: number,
   daytime?: boolean
) => {
   const date = new Date(unix_timestamp * 1e3);
   console.log(date);
   const actualHours = date.getHours() + timezone / 3600;
   const hours = actualHours > 12 ? actualHours - 12 : actualHours;
   const minutes = '0' + date.getMinutes();
   if (daytime) return `${hours}h ${minutes.substr(-2)}m`;
   else return hours + ':' + minutes.substr(-2);
};


export const returnLatLon = (town: string) => {
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
