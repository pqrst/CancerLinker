var stage;
var stage2;

document.addEventListener( "DOMContentLoaded", function(){
    stage = new NGL.Stage( "viewport1" );
    stage.setParameters({backgroundColor:"white"} );
    stage.loadFile( "data/OR17_210-nonanone_1-100.pdb", { defaultRepresentation: true } );


    stage2 = new NGL.Stage( "viewport2" );
    stage2 .setParameters({backgroundColor:"white"} );
    stage2.loadFile( "data/OR17_210-nonanone_1-100.pdb", { defaultRepresentation: true} );


    // stage.loadFile( "data/OR17_210-nonanone_1-100.pdb").then( function( comp ){
    //     // comp.addRepresentation( "ball+stick", { multipleBond: true } );
    //
    //     // comp.addRepresentation( "cartoon" );
    //     // comp.centerView();
    //
    // } );





} );



// prepare PDB loader and load the model
// var oPdbLoader = new THREE.PDBLoader();
// oPdbLoader.load("data/OR17_210-nonanone_1-100.pdb", function(geometry, geometryBonds) {
//     var group = new THREE.Object3D();
//     var i = 0;
//     var colors = geometry.getAttribute( 'color' );
//
//     geometry.elements.forEach(function (position) {
//
//
//
//         var sphere = new THREE.SphereGeometry(0.3);
//         var material = new THREE.MeshPhongMaterial({color: colors[i++]});
//         var mesh = new THREE.Mesh(sphere, material);
//         mesh.position.copy(position);
//         group.add(mesh);
//     });
//
//
//     for (var j = 0; j < geometryBonds.vertices.length; j += 2) {
//         var path = new THREE.SplineCurve3([geometryBonds.vertices[j], geometryBonds.vertices[j + 1]]);
//         var tube = new THREE.TubeGeometry(path, 1, 0.05)
//         var material = new THREE.MeshPhongMaterial({color: 0xcccccc});
//         var mesh = new THREE.Mesh(tube, material);
//         group.add(mesh);
//     }
//     group.position.set(20, 5, -20);
//     group.scale.set(2, 2, 2);
//     lesson7.scene.add(group);
// });