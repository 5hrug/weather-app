export const cities = [
   'Bratislava',
   'Humenné',
   'Koromľa',
   'Košice',
   'Michalovce',
   'Sobrance',
];

export const unixToHours = (unixTimestamp: number, timezone: number) => {
   const date = new Date(unixTimestamp * 1e3);
   return date.getHours() + timezone / 3600;
};

export const checkAmPm = (hours: number) => {
   return hours > 12 ? hours - 12 : hours;
};
export const unixToMinutes = (unixTimestamp: number) => {
   const date = new Date(unixTimestamp * 1e3);
   const minutes = ('0' + date.getMinutes()).substr(-2);
   return minutes;
};

export const calculateDayTime = (
   unixSunrise: number,
   unixSunset: number,
   timezone: number,

) => {
   const sunriseHours = Number(unixToHours(unixSunrise,timezone));
   const sunriseMinutes = Number(unixToMinutes(unixSunrise));
   const sunsetHours = Number(unixToHours(unixSunset,timezone));
   const sunsetMinutes = Number(unixToMinutes(unixSunset));

   if (sunsetMinutes-sunriseMinutes >= 0) return `${sunsetHours-sunriseHours}h ${sunsetMinutes-sunriseMinutes}m`;
   else return `${sunsetHours-sunriseHours-1}h ${Math.abs(sunsetMinutes-sunriseMinutes)}m`;
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
