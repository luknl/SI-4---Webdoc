"use strict";

const side_bar 	   = $('.sidebar');
const side_content = side_bar.find('.sidecontent');
const popcorn  	   = Popcorn('#video');

const infos = {
	start : [0, 115],
	end   : [115, 130],
	target: ['sidecontent', 'sidecontent'],
	text  : ["Contrairement à son compère Takahata, Miyazaki conçoit le character design de ses personnages. On aboutit alors à une galerie d'héroïnes aux traits étonnamment ressemblants, de Nausicäa à San en passant par Fio. On retrouve cette même similitude chez les personnages masculins, Pazu devenant le successeur d'Asbel et annonçant Ashitaka. Cette continuité étonnante dans le traitement de ses personnages a parfois valu à Miyazaki des lourdes critiques, stigmatisant un manque d'inspiration. Pourtant, chaque personnage de Miyazaki est unique par sa caractérisation, et l'on oublie un peu facilement d'autres personnages comme Marco, Tombo ou Mei !! De plus, le style de Miyazaki évolue bel et bien, même s'il reste fidèle à son univers graphique. Chihiro a ainsi une forme de visage totalement inédite pour une héroïne de Miyazaki. Haku et Hauru n'ont pas l'allure décidée des héros miyazakiens, mais semblent plutôt évoquer les personnages shojo aux traits efféminés.",
	"On ne peut que remarquer la préférence de Miyazaki envers des héroïnes «femmes-enfants ». Il est fort probable qu'aux yeux du réalisateur, le caractère inhérent à une jeune fille est d'être dotée d'un fort tempérament, d'un courage à toute épreuve et surtout d'une sensibilité pure. Les héroïnes de Miyazaki possèdent encore une capacité d'émerveillement propre à l'enfance et une force d'action présageant l'âge adulte. Evidemment, cela n'empêche pas le réalisateur de choisir parfois des personnages plus jeunes, comme Satsuki, Chihiro et Ponyo, ou plus vieux, comme Sophie transformée en grand-mère percluse de rhumatisme. Mais leur caractère s'avère être au final très proche des héroïnes habituelles du réalisateur."],
};

for(let i = 0; i < 2; i++) {
	popcorn.footnote({
		start : infos.start[i],
		end   : infos.end[i],
		target: infos.target[i],
		text  : infos.text[i],
	});
}
