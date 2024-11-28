var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_hidrantes__1 = new ol.format.GeoJSON();
var features_hidrantes__1 = format_hidrantes__1.readFeatures(json_hidrantes__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrantes__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrantes__1.addFeatures(features_hidrantes__1);
var lyr_hidrantes__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrantes__1, 
                style: style_hidrantes__1,
                popuplayertitle: "hidrantes_",
                interactive: true,
                title: '<img src="styles/legend/hidrantes__1.png" /> hidrantes_'
            });

lyr_OSMStandard_0.setVisible(true);lyr_hidrantes__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_hidrantes__1];
lyr_hidrantes__1.set('fieldAliases', {'id': 'id', 'endereço': 'endereço', 'long': 'long', 'lat': 'lat', 'tipo': 'tipo', 'funcioname': 'funcioname', 'util para': 'util para', 'chave de a': 'chave de a', });
lyr_hidrantes__1.set('fieldImages', {'id': 'TextEdit', 'endereço': 'TextEdit', 'long': 'TextEdit', 'lat': 'TextEdit', 'tipo': 'TextEdit', 'funcioname': 'TextEdit', 'util para': 'TextEdit', 'chave de a': 'TextEdit', });
lyr_hidrantes__1.set('fieldLabels', {'id': 'hidden field', 'endereço': 'no label', 'long': 'hidden field', 'lat': 'hidden field', 'tipo': 'no label', 'funcioname': 'no label', 'util para': 'hidden field', 'chave de a': 'no label', });
lyr_hidrantes__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});