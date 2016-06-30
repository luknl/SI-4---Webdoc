"use strict";

const side_bar 	   = $('.sidebar');
const side_content = side_bar.find('.sidecontent');
const popcorn  	   = Popcorn('#video');

const infos = {
	start : [0, 37, 74, 107, 144],
	end   : [37, 74, 107, 144, 181],
	target: ['sidecontent', 'sidecontent', 'sidecontent', 'sidecontent', 'sidecontent'],
	text  : ["La filmographie de Miyazaki est également reconnaissable à ses thématiques récurrentes, car le réalisateur a toujours été fidèle à ses idées. Ainsi la plupart des personnages de Miyazaki sont des personnages d'exception : des descendanst de famille royale (Sheeta dans Laputa), des princesses (Nausicaä, Ashitaka, Ponyo), des sorciers (Kiki, Hauru), et même un personnage transformé en cochon (Porco Rosso) !! Bien sûr on retrouve quelques héroïnes plus « banales », comme Chihiro, mais elles participent toutes à une histoire merveilleuse et finissent, par leurs actions, à emporter l'adhésion des autres protagonistes et du spectateur, ce qui est assez éloigné du cinéma plus réaliste et plus distancié de Takahata.",
	"Le thème de l'environnement est également très présent dans la filmographie de Miyazaki. Qu'il s'agisse de Nausicaä, Princesse Mononoke,Mon voisin Totoro ou encore Conan le fils du futur, on retrouve une préoccupation constante du réalisateur sur le rapport entre l'Homme et la Nature. Cependant, Miyazaki ne se pose jamais en moralisateur et ne propose pas de solution miracle pour sauver notre planète, il se contente de dresser un constat, parfois très pessimiste, souvent très émouvant, de cette relation violente entre l'humanité et son environnement. Il y a de l'animisme dans l'écologie de Miyazaki. Pour lui, tout est vivant et les dieux sont partout : esprits de la forêts dansNausicaä, Totoro et Mononoke, dieux des poussières dans Totoro et Chihiro, dieux de la rivière dans Chihiro. Cependant cette thématique n'est pas constante et inévitable, dans Kiki ou même Chihiro, le réalisateur s'intéresse plus à l'intégration de ses héroïnes dans la société qu'à un quelconque message écologique, et dans Le château ambulant, la guerre est une toile de fond à l'histoire d'amour entre Hauru et Sophie.",
	"Le voyage initiatique est un autre thème récurrent chez Miyazaki, même si celui-ci n'aime pas ce terme. Ses héros ou héroïnes sont souvent des nomades ou des déracinés. Ses films de même que ses mangas débutent souvent par un exil ou un déménagement (Mon Voisin Totoro). Dans Princesse Mononoke, Ashitaka quitte son village natal parce qu'il victime d'une malédiction. Pour accomplir sa formation de sorcière, Kiki doit vivre un an séparée de sa famille. Exilée de force, Nausicaä parcourt le monde pour prévenir une guerre imminente. Enfin, dans Shuna no Tabi, le héros part à la recherche de graines dorées pour nourrir son peuple. Ce thème du voyage initiatique prend également son sens dansLe voyage de Chihiro. Au cours de son périple dans ce monde peuplé de dieux, Chihiro devient bien plus mature, responsable, elle change véritablement de comportement. Dans Le château ambulant, enfin, Sophie doit elle aussi fuir sa douillette maison et se réfugier chez Hauru à cause de la malédiction de la sorcière de la Dévastation.",
	"Ecologiste et animiste, Hayao Miyazaki a consacré sa carrière entière à faire de la nature une puissance à part entière de ses histoires. Fondée sur les quatre éléments la constituant (l’air, la terre, le feu, l’eau), elle sert de vecteur aux fables, aux intrigues et à la poésie du maitre de l’animation japonaise. Si l’air est encore au cœur de son dernier film Le vent se lève, il est possible de relier sa carrière entière à une fascination pour le ciel, comme le décrypte très justement Erwan Desbois à travers les images d’avions conçus pour ses films.",
	"Il est aussi possible de voir deux tendances dans son approche des éléments. Une partie de ses films se concentre exclusivement sur l’un d’entres eux. Mon Voisin Totoro est une œuvre purement tellurique quant Kiki la petite sorcière ou Nausicaä se tournent entièrement vers l’air. Mais, comme devenu maitre alchimiste, Miyazaki a décidé de faire communier les éléments entre eux, avec toutes les formules possibles. Panel des combinaisons.",
	],
};

for(let i = 0; i < 5; i++) {
	popcorn.footnote({
		start : infos.start[i],
		end   : infos.end[i],
		target: infos.target[i],
		text  : infos.text[i],
	});
}
