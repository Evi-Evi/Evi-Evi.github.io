ymaps.ready(function(){
	mapss = new ymaps.Map("map", {
		center: [55.887988, 37.637479],
		zoom: 15,
		controls: ['zoomControl']
	}, {
		minZoom: 3
	});
	objectManager = new ymaps.ObjectManager({
        gridSize: 32,
		clusterDisableClickZoom: true
    });
	mapss.geoObjects.add(objectManager);
	var picks = {};
	picks.type = "FeatureCollection";	
	picks.features = [];
	picks.features.push({"type": "Feature","id": 1,"geometry": {"type": "Point", "coordinates": [55.887988, 37.637479]},
			"options": {iconLayout: 'default#image', iconImageHref: 'img/icons/group-17.png'}});
	objectManager.add(JSON.stringify(picks));
});