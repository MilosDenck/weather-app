export const getUserLocation = async (): Promise<{ lat: number; lon: number } > => {
	return new Promise((resolve, reject) => {
	  if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          resolve({ lat, lon });
        },
        (error) => {
          resolve({ lat: 52.5244, lon: 13.4105 });
        }
		  );
	  } else {
		  resolve({ lat: 52.5244, lon: 13.4105 });
	  }
	});
};