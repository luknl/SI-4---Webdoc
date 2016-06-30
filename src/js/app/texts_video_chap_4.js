"use strict";

const side_bar 	   = $('.sidebar');
const side_content = side_bar.find('.sidecontent');
const popcorn  	   = Popcorn('#video');

const infos = {
	start : [0, 124, 239, 501, 710, 895],
	end   : [124, 239, 501, 710, 895, 1080],
	target: ['sidecontent', 'sidecontent', 'sidecontent', 'sidecontent', 'sidecontent', 'sidecontent', 'sidecontent'],
	text  : ["La majorité des films du studio Ghibli sont créé en utilisant les techniques traditionelles d’animation. Qu’est-ce que ça signifie ? Chaque image est dessinée à la main par les animateurs, avant d’être rassembler les unes à la suite des autres pour donner l’illusion du mouvement, et ainsi créer le film. C’est un processus très répétitif et chrono-phage mais Miyazaki penses que “ Dessiner à la main sur du papier est le fondement de l’animation.",
	"Malgré le fait que Miyazaki préfère la dessin à la main, l’imagerie générée par ordinateur ou CGI ( Computer Generated Imagery ) , a été utilisé dans plusieurs films du Studio Ghibli. Cela permet d’aider les animateurs sur des scènes qui aurait été trop compliqué à créer en utilisant les techniques traditionelles. Dans Princesse Mononoke, la technique de digital painting, a été utilisé pour accélérer le processus et finir le film à temps.",
	"Dans les films de Miyazaki, la musique est en adéquation parfaite avec l'animation. Elle colle toujours scrupuleusement aux images, soulignant la qualité dramatique et émotionnelle de nombreuses séquences. En fait, le compositeur, Joe Hisaishi réussit une prouesse: composer une bande son qui puisse être écouter pour elle même mais qui soit si liée au film qu'à l'écoute d'un morceau, on repense de suite au passage concerné. Contrairement aux films américains, où la musique soutient l'action et peut combler certains silences à l'écran, la musique des bandes originales de Miyazaki est mûrement réfléchie. Les deux hommes travaillent en étroite collaboration et discutent longuement du choix de la composition. Dans une interview accordé à Animeland (HS n°3), Hisaishi décrit comment s'organise son travail sur un film:« C'est toujours le même processus à chaque film. La réalisation dure deux à trois ans et elle est toujours très longue car Miyazaki est très pointilleux et très exigeant. Avant de me donner un vrai scénario, il me donne un genre de storyboard assez complet, il me présente les personnages et me parle un peu de l'histoire. Puis il commence à travailler pendant que moi-même j'avance de mon côté. Il me donne aussi dix mots clés, sur lesquels je fixe mon travail.",
	"Au bout d'un an, nous avons de quoi faire un premier CD : l'image album qui sort bien avant la réalisation complète de l'oeuvre. Cet image album a deux fonctions: il me permet de concrétiser ce à quoi ressemblera la musique plus tard, mais il permet aussi à Miyazaki, qui continue à dessiner, de travailler en musique.",
	"Ce n'est qu'une fois le film terminé, soit encore un an plus tard, que nous retravaillons ensemble. Il choisit l'endroit où l'on va utiliser chaque morceau, ceux que l'on ne va pas utiliser, et c'est là que je fais le véritable soundtrack. »",
	"En 1984, sa première expérience cinématographique est aussi sa première collaboration avec Miyazaki à l'occasion de Nausicaä de la vallée du vent. Miyazaki lui confie la musique de l'image album et tombe rapidement en admiration devant le travail du jeune musicien qui a tout de suite capté le tempo particulier qui anime l'oeuvre du réalisateur. Bien qu'à l'origine le soundtrack devait être confié à un musicien confirmé, Miyazaki et Takahata (alors producteur) ont insisté pour que Hisaishi se charge de l'intégralité de la musique du long-métrage.",
	"Par la suite, Hisaishi compose les bandes-originales du Château dans le ciel, de Mon voisin Totoro (dont l'ouverture est devenue l'hymne national des maternelles japonaises), de Kiki la petite sorcière, de Porco Rosso, de Princesse Mononoke, du Voyage de Chihiro, du Château ambulant, de Ponyo sur la falaise et enfin du Vent se lève. Avouant lui-même que chaque collaboration avec Miyazaki est une épreuve du feu, il ne manque pourtant jamais l'opportunité de collaborer de nouveau avec le maître. Le travail de brassage des genres et des époques qu'il affectionne va de pair avec celui de Miyazaki. Comme lui, il possède cette faculté de créer des univers qui, sans se référer à une nationalité précise, évoquent des références du monde entier. Ainsi, malgré son aspect folklorique, les musiques de Princesse Mononoke ou du Voyage de Chihiro se révèle parfaitement universelle grâce à la combinaison judicieuse de l'orchestration et d'instruments traditionnels. Joe Hisaishi y exprime son admiration pour le classicisme et des structures musicales inédites, directement empruntées au folklore."],
};

for(let i = 0; i < 2; i++) {
	popcorn.footnote({
		start : infos.start[i],
		end   : infos.end[i],
		target: infos.target[i],
		text  : infos.text[i],
	});
}
