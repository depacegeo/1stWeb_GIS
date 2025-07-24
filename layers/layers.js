var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PopulationDensity_1 = new ol.format.GeoJSON();
var features_PopulationDensity_1 = format_PopulationDensity_1.readFeatures(json_PopulationDensity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensity_1.addFeatures(features_PopulationDensity_1);
var lyr_PopulationDensity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationDensity_1, 
                style: style_PopulationDensity_1,
                popuplayertitle: 'Population Density',
                interactive: true,
    title: 'Population Density<br />\
    <img src="styles/legend/PopulationDensity_1_0.png" /> Less than 1000<br />\
    <img src="styles/legend/PopulationDensity_1_1.png" /> 1000 - 2000<br />\
    <img src="styles/legend/PopulationDensity_1_2.png" /> 2000 - 6000<br />\
    <img src="styles/legend/PopulationDensity_1_3.png" /> 6000 - 13000<br />\
    <img src="styles/legend/PopulationDensity_1_4.png" /> More than 13000<br />' });
var format_Gender_2 = new ol.format.GeoJSON();
var features_Gender_2 = format_Gender_2.readFeatures(json_Gender_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gender_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gender_2.addFeatures(features_Gender_2);
var lyr_Gender_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gender_2, 
                style: style_Gender_2,
                popuplayertitle: 'Gender',
                interactive: false,
                title: '<img src="styles/legend/Gender_2.png" /> Gender'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PopulationDensity_1.setVisible(true);lyr_Gender_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PopulationDensity_1,lyr_Gender_2];
lyr_PopulationDensity_1.set('fieldAliases', {'Province': 'Province', 'DCODE': 'DCODE', 'DISTRICT': 'DISTRICT', 'DAN': 'DAN', 'DAS': 'DAS', 'GaPa_NaPa': 'GaPa_NaPa', 'Type_GN': 'Type_GN', 'GN_CODE': 'GN_CODE', 'NEW_WARD_N': 'Ward No', 'DDGNWW': 'DDGNWW', 'CENTER': 'CENTER', 'STATE_CODE': 'STATE_CODE', 'DDGN': 'DDGN', 'Area_SQKM': 'Area_SQKM', 'Shape_Area': 'Shape_Area', 'N_HH': 'Number of Household', 'T_Popn': 'Total Population', 'Popn_M': 'Male', 'Popn_F': 'Female', 'A_HH': 'Average Household', 'S_Ratio': 'Sex Ratio', 'density': 'Populaion Density', });
lyr_Gender_2.set('fieldAliases', {'Province': 'Province', 'DCODE': 'DCODE', 'DISTRICT': 'DISTRICT', 'DAN': 'DAN', 'DAS': 'DAS', 'GaPa_NaPa': 'GaPa_NaPa', 'Type_GN': 'Type_GN', 'GN_CODE': 'GN_CODE', 'NEW_WARD_N': 'NEW_WARD_N', 'DDGNWW': 'DDGNWW', 'CENTER': 'CENTER', 'STATE_CODE': 'STATE_CODE', 'DDGN': 'DDGN', 'Area_SQKM': 'Area_SQKM', 'Shape_Area': 'Shape_Area', 'N_HH': 'N_HH', 'T_Popn': 'T_Popn', 'Popn_M': 'Popn_M', 'Popn_F': 'Popn_F', 'A_HH': 'A_HH', 'S_Ratio': 'S_Ratio', 'density': 'density', });
lyr_PopulationDensity_1.set('fieldImages', {'Province': 'Hidden', 'DCODE': 'Hidden', 'DISTRICT': 'Hidden', 'DAN': 'Hidden', 'DAS': 'Hidden', 'GaPa_NaPa': 'Hidden', 'Type_GN': 'Hidden', 'GN_CODE': 'Hidden', 'NEW_WARD_N': 'TextEdit', 'DDGNWW': 'Hidden', 'CENTER': 'Hidden', 'STATE_CODE': 'Hidden', 'DDGN': 'Hidden', 'Area_SQKM': 'Hidden', 'Shape_Area': 'Hidden', 'N_HH': 'TextEdit', 'T_Popn': 'TextEdit', 'Popn_M': 'TextEdit', 'Popn_F': 'TextEdit', 'A_HH': 'TextEdit', 'S_Ratio': 'TextEdit', 'density': 'TextEdit', });
lyr_Gender_2.set('fieldImages', {'Province': 'TextEdit', 'DCODE': 'TextEdit', 'DISTRICT': 'TextEdit', 'DAN': 'TextEdit', 'DAS': 'TextEdit', 'GaPa_NaPa': 'TextEdit', 'Type_GN': 'TextEdit', 'GN_CODE': 'TextEdit', 'NEW_WARD_N': 'TextEdit', 'DDGNWW': 'TextEdit', 'CENTER': 'TextEdit', 'STATE_CODE': 'TextEdit', 'DDGN': 'TextEdit', 'Area_SQKM': 'TextEdit', 'Shape_Area': 'TextEdit', 'N_HH': 'TextEdit', 'T_Popn': 'TextEdit', 'Popn_M': 'TextEdit', 'Popn_F': 'TextEdit', 'A_HH': 'TextEdit', 'S_Ratio': 'TextEdit', 'density': 'TextEdit', });
lyr_PopulationDensity_1.set('fieldLabels', {'NEW_WARD_N': 'inline label - visible with data', 'N_HH': 'inline label - visible with data', 'T_Popn': 'inline label - visible with data', 'Popn_M': 'inline label - visible with data', 'Popn_F': 'inline label - visible with data', 'A_HH': 'inline label - visible with data', 'S_Ratio': 'inline label - visible with data', 'density': 'inline label - visible with data', });
lyr_Gender_2.set('fieldLabels', {'Province': 'no label', 'DCODE': 'no label', 'DISTRICT': 'no label', 'DAN': 'no label', 'DAS': 'no label', 'GaPa_NaPa': 'no label', 'Type_GN': 'no label', 'GN_CODE': 'no label', 'NEW_WARD_N': 'no label', 'DDGNWW': 'no label', 'CENTER': 'no label', 'STATE_CODE': 'no label', 'DDGN': 'no label', 'Area_SQKM': 'no label', 'Shape_Area': 'no label', 'N_HH': 'no label', 'T_Popn': 'no label', 'Popn_M': 'no label', 'Popn_F': 'no label', 'A_HH': 'no label', 'S_Ratio': 'no label', 'density': 'no label', });
lyr_Gender_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});