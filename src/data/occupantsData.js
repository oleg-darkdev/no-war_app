// Russia
import docListRF from './rf/docsList';
import lossListRF from './rf/lossList';
import photoListRF from './rf/photosList';
import unitsListRF from './rf/unitsList';
import videoListRF from './rf/videosList';
import deathPhotosListRF from './rb/deathPhotosList';
// Belarus
import docListRB from './rb/docsList';
import lossListRB from './rb/lossList';
import photoListRB from './rb/photosList';
import unitsListRB from './rb/unitsList';
import videoListRB from './rb/videosList';
import deathPhotosListRB from './rb/deathPhotosList';


const occupants = {
	rf: {
		docListRF,
		lossListRF,
		photoListRF,
		unitsListRF,
		videoListRF,
		deathPhotosListRF
	},
	rb: {
		docListRB,
		lossListRB,
		photoListRB,
		unitsListRB,
		videoListRB,
		deathPhotosListRB
	}
};

export default occupants;