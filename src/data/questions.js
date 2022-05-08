const questions = [
    {
		questionText: '🎁 Quel est le plus beau cadeau que j\'ai reçu?',
		answerOptions: [
	    	{ answerText: '🐈 Un animal de compagnie', isCorrect: false },
			{ answerText: '✈️ Un voyage surprise', isCorrect: true },
			{ answerText: '📱 Un téléphone', isCorrect: false },
		],
	},
	{
	    questionText: '🎅 Quel est mon travail de rêve?',
		answerOptions: [
			{ answerText: 'Entrepreneur', isCorrect: true },
			{ answerText: 'Directeur / Manager', isCorrect: false },
			{ answerText: 'Devloppeur', isCorrect: false },
			{ answerText: 'Premier ministre', isCorrect: true },
		],
	},
	{
		questionText: 'Quel est mon sport préféré?',
		answerOptions: [
			{ answerText: '⚽ Football', isCorrect: true },
			{ answerText: '🏈 Rugby', isCorrect: false },
			{ answerText: '🏀 Basketball', isCorrect: false },
			{ answerText: '🏐 Volley-ball', isCorrect: false },
		],
	},
	{
		questionText: 'Si je devait manger la même nourriture pour le dîner tous les jours, que serai mon choix?',
		answerOptions: [
			{ answerText: '🍔 Burger', isCorrect: false },
			{ answerText: '🍣 Sushi', isCorrect: false },
			{ answerText: '🍕 Pizza', isCorrect: false },
			{ answerText: '🌯 Burrito', isCorrect: true },
		],
	},
    {
		questionText: '👪 Combien de frères et sœurs j\'ai?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '5', isCorrect: false },
			{ answerText: '10', isCorrect: false },
		],
	},
    {
		questionText: '📺 Quelle est mon émission télévisée préférée?',
		answerOptions: [
			{ answerText: '🤵 Suits', isCorrect: true },
			{ answerText: '👨‍⚕️ The Good Doctor', isCorrect: false },
			{ answerText: '😈 Lucifer', isCorrect: false },
			{ answerText: '🪓 Vikings', isCorrect: false },
		],
	},
    {
		questionText: '🎒 Dans combien d\'écoles j\'y étais?',
		answerOptions: [
			{ answerText: '1', isCorrect: false },
			{ answerText: '3', isCorrect: true },
			{ answerText: '5', isCorrect: false },
			{ answerText: '2', isCorrect: false },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '☀️ Soleil', isCorrect: true },
			{ answerText: '🌙 Lune', isCorrect: false },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '🤪 Fun', isCorrect: false },
			{ answerText: '🕊️ Espoir', isCorrect: true },
            { answerText: '🔒 Protection', isCorrect: false },
            { answerText: '🤠 Aventure', isCorrect: true },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '⛰️ Montagne', isCorrect: true },
			{ answerText: '🚤 Lacs', isCorrect: false },
            { answerText: '🏜️ Dessert', isCorrect: false },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '🎮 Jeux vidéo', isCorrect: false },
			{ answerText: '📗 Livres', isCorrect: true },
            { answerText: '🎵 Musique', isCorrect: true },
			{ answerText: '📺 Télévision', isCorrect: false },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: 'Honnetéte', isCorrect: true },
			{ answerText: 'Loyauté', isCorrect: false },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '🛥️ Bateux', isCorrect: false },
			{ answerText: '✈️ Avions', isCorrect: false },
            { answerText: '🚲 Vélos', isCorrect: false },
			{ answerText: '🚗 Voitures', isCorrect: true },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '🦸 Héros', isCorrect: false },
			{ answerText: '🦹 Villains', isCorrect: true },
		],
	},
    {
		questionText: 'Qu\'est-ce que j\'apprécies le plus?',
		answerOptions: [
			{ answerText: '🌅 Matin', isCorrect: true },
			{ answerText: '🌃 Nuit', isCorrect: false },
            { answerText: '✨ Soirée', isCorrect: false },
			{ answerText: '🏵️ Jour', isCorrect: false },
		],
	},
    {
		questionText: 'Ce qui est le plus important dans la vie?',
		answerOptions: [
			{ answerText: '🌅 Etre heureux', isCorrect: true },
			{ answerText: '🌃 Etre riche', isCorrect: false },
            { answerText: '✨ Etre connu', isCorrect: false },
		],
	},
	{
		questionText: '🕵️‍♂️ Je me considère comme?',
		answerOptions: [
			{ answerText: "Un homme décidé qui ne se laisse pas faire, une forte personnalité..", isCorrect: true },
			{ answerText: "Quelqu'un de prudent et d'alerte. Je suis plus doué que les autres pour penser à l'avance à tous les risques dans une situation donnée.", isCorrect: true },
            { answerText: "Quelqu'un qui aime apprendre et progresser : Il est important de s'améliorer et de se perfectionner pour évoluer.", isCorrect: true },
			{ answerText: "Un passionné. Quelqu'un de différent, sensible, à part.", isCorrect: true },
			{ answerText: "Quelqu'un qui profite de tous les plaisirs de la vie, un boute-en-train.", isCorrect: true },
			{ answerText: "Quelqu'un de gentil, bienveillant, serviable et généreux qui va au devant des gens.", isCorrect: true },
			{ answerText: "Un homme d'action qui cherche la réussite et le succès. Quelqu'un auquel d'autres aimeraient ressembler.", isCorrect: true },
			{ answerText: "Quelqu'un de logique, réfléchi, rationnel et observateur, un peu en retrait.", isCorrect: true },
			{ answerText: "Quelqu'un de conciliant, pacifique, humble et réservé.", isCorrect: true },
		],
	},
	{
		questionText: '✔️​ Laquelle de ces confirmations me décrit le mieux?',
		answerOptions: [
			{ answerText: "Je m'interroge souvent sur les véritables motivations des gens. De nature sceptique, j'ai besoin de temps pour avoir confiance", isCorrect: true },
			{ answerText: "Je sais me mettre en valeur. Je trouve qu'il est très important de donner aux autres une bonne image de soi-même.", isCorrect: true },
			{ answerText: "Quand je pense à ce qui est important pour moi chez les autres, je me dis que je suis exigeant. Mais je le suis aussi avec moi-même. D'ailleurs je le vis mal quand on me fait des reproches : j'aime être irréprochable.", isCorrect: false },
			{ answerText: "J'aime particulièrement le monde des idées et des connaissances. J'exprime peu mes émotions devant les autres. Par exemple, je suis rarement en colère, et quand c'est le cas je peux l'exprimer par un silence.", isCorrect: true },
			{ answerText: "Je prends soin de ne contrarier personne et d'éviter les conflits: je prends souvent en compte l'avis des autres et j'adopte des propos nuancés. J'aime les climats d'harmonie et de paix.", isCorrect: false },
			{ answerText: "Je ne reste pas triste ou déçu longtemps. Je sais rebondir très vite dans le positif. Je ne m'ennuie jamais. J'ai toujours plein d'idées, plein de projets et je touche à tout.", isCorrect: true },
			{ answerText: "Je suis toujours prêt à aider les autres. D'ailleurs quand on me demande des conseils, du réconfort, ou même un service, j'ai du mal à dire NON.", isCorrect: true },
			{ answerText: "Je sais me battre pour ce que je désire (ou pour rétablir ma justice).", isCorrect: true },
			{ answerText: "Je ressens souvent de la mélancolie, ou de la nostalgie pour mon passé. Je suis sujet aux sentiments extrêmes. Je peux passer rapidement d'un état positif à un état négatif et vice versa.", isCorrect: false },
		],
	},
	{
		questionText: '✔️​ Laquelle de ces confirmations me décrit le mieux?',
		answerOptions: [
			{ answerText: "Je m'oppose rarement aux opinions des autres: je ne juge pas. Par ailleurs je suis partagé entre d'un côté mon envie de me laisser diriger, et de l'autre ma tendance à me bloquer quand on essaye de me contrôler : je peux devenir alors très têtu.", isCorrect: false },
			{ answerText: "Je suis plus doué pour créer que pour réaliser, pour avoir plein d'idées que pour les mettre en oeuvre jusqu'au bout. Je ne supporte pas de me sentir enfermé dans des choix restreints. Je suis attiré par plein de choses différentes et variées mais pour moi tout est lié.", isCorrect: false },
			{ answerText: "J'ai des talents particuliers qui me sont propres et je suis sensible aux talents véritables des autres. J'ai beaucoup d'admiration pour ceux qui réussissent brillamment si c'est dans un domaine différent du mien", isCorrect: true },
			{ answerText: "J'adopte souvent un rôle de conseiller et de confident. J'influence, et j'ai tendance à bâtir ma réussite professionelle sur la base des relations personnelles que j'arrive à créer et entretenir.", isCorrect: true },
			{ answerText: "J'ai beaucoup d'énergie et j'aime prendre les choses en main, avoir des responsabilités et éventuellement diriger. Je ne suis pas du genre à me laisser faire : je veux me faire respecter.", isCorrect: true },
			{ answerText: "Je me focalise facilement sur un petit défaut ou une imperfection et j'ai tendance à ne voir que ça : J'aime le travail bien fait, chez moi comme chez les autres. D'ailleurs Je remarque tout de suite quand on n'accomplit pas quelque chose comme il le faudrait.", isCorrect: true },
			{ answerText: "Je repère rapidement les gens qui emploient mal le pouvoir et dont il faut se méfier. Je suis plus tranquille quand je suis entouré de gens en qui j'ai confiance.", isCorrect: true },
			{ answerText: "Je suis très actif et je reste focalisé sur les résultats que je veux atteindre. Je sais dépenser beaucoup d'énergie pour réaliser mes objectifs. Ce qui compte, c'est que mes projets soient une réussite et que cela se sache.", isCorrect: true },
			{ answerText: "Je recherche plus un travail intéressant qu'un travail rémunérateur. Je veux surtout ne pas dépendre des autres et garder mon temps pour moi.", isCorrect: true },
		],
	},
	{
		questionText: '✔️ ​Laquelle de ces confirmations me décrit le mieux?',
		answerOptions: [
			{ answerText: "Je suis décontracté dans mes relations avec les autres. D'ailleurs, quand ils me font des reproches ou sont en colère contre moi, je dédramatise : j'explique en quoi je ne suis pas responsable ou même j'utilise l'humour pour désamorcer la situation.", isCorrect: false },
			{ answerText: "Je ne supporte pas la banalité, le mauvais goût. Je ne suis pas comme les autres et j'aime ce qui sort de l'ordinaire.", isCorrect: true },
			{ answerText: "Je trouve que pour se protéger il est important de prévoir les réactions des autres. Je ne supporte pas les réactions imprévisibles.", isCorrect: true },
			{ answerText: "Je sais exprimer à quelqu'un la colère que j'ai contre lui. Cela permet souvent de clarifier les positions. D'ailleurs, je repère très rapidement les points faibles des autres et je sais les piéger dès qu'ils me provoquent.", isCorrect: true },
			{ answerText: "Je sais me faire apprécier de tous. Mais j'ai souvent le sentiment qu'ils ne réalisent pas tout ce que j'ai fait pour eux.", isCorrect: true },
			{ answerText: "Je ne sais pas toujours ce que je veux : c'est plus facile pour moi de savoir ce que je ne veux pas. Ainsi je peux avoir tendance à laisser les autres prendre les décisions. Pourtant, il m'arrive de détester que l'on choisisse pour moi.", isCorrect: false },
			{ answerText: "Je n'ai pas besoin de l'approbation, ni de la reconnaissance des autres. J'ai souvent plaisir à me retrouver seul avec moi-même pour penser et me ressourcer.", isCorrect: true },
			{ answerText: "J'ai un esprit critique : dans toute situation j'arrive à détecter les détails qui ne vont pas. J'arrive aussi à repérer très facilement les défauts des autres. Je peux être soit irrité soit déçu, mais en général je ne leur dis pas, ou alors pas tout de suite.", isCorrect: true },
			{ answerText: "Dès qu'il y a un peu de compétition, je veux être celui qui gagne. Je ne supporte pas d'échouer, même dans les situations secondaires.", isCorrect: true },
		],
	},
	{
		questionText: '✔️ ​Laquelle de ces confirmations me décrit le mieux?​',
		answerOptions: [
			{ answerText: "J'arrive à très bien sentir les besoins et attentes des gens. J'adapte beaucoup ma personnalité en fonction de chacun. Ainsi je sais plaire à qui je veux.", isCorrect: true },
			{ answerText: "Je suis tout à fait capable de me détacher de l'apparence, du matériel : Je ne suis pas du tout dépendant des choses et de l'image qu'elles véhiculent.", isCorrect: false },
			{ answerText: "Je perçois en chacun du fort et du faible en même temps, et dans chaque opinion du bon et du mauvais. C'est pourquoi je suis souvent neutre. Je prends rarement parti pour une personne ou pour une autre.", isCorrect: true },
			{ answerText: "Dans certaines situations en relation avec les autres, je peux manquer un peu de confiance en moi, pourtant au fond de moi je suis certain de ma valeur et du fait que peu de gens sont aussi exigeants que moi.", isCorrect: true },
			{ answerText: "J'ai du succès : soit j'ai de très bons résultats dans ce que je fais, soit je sais apparaître comme celui qu'on admire ou qu'on envie.", isCorrect: true },
			{ answerText: "J'ai de l'énergie, de la fermeté, du courage. Je suis fort dans l'adversité. Je suis franc et direct : c'est très facile pour moi de dire les choses en face sur le champ.", isCorrect: true },
			{ answerText: "J'ai une vie intérieure ou émotionnelle très riche. J'ai l'impression de ressentir les émotions plus intensément que les autres.", isCorrect: false },
			{ answerText: "Je parle beaucoup, je suis plus rapide que les autres, et je sais prendre la vie du bon côté dans les situations désagréables où les autres se lamentent.", isCorrect: true },
			{ answerText: "J'ai un cercle de proches. Avec eux, je suis très loyal, très respectueux des règles, quelqu'un de très fiable sur qui on peut compter. Avec les autres, je reste sur mes gardes.", isCorrect: true },
		],
	},
	{
		questionText: '✔️ ​Laquelle de ces confirmations me décrit le mieux?​',
		answerOptions: [
			{ answerText: "Je suis quelqu'un qui aime être vu et reconnu. Je sais soigner mon image et me mettre en avant. Je sais aussi m'adapter pour plaire. Je suis quelqu'un de positif, actif, qui va vers les gens. J'ai beaucoup d'énergie et je suis très performant dans ce que je fais. J'ai besoin de réaliser. J'attache beaucoup d'importance à la réussite.", isCorrect: false },
			{ answerText: "Je suis un homme de conviction, quelqu'un de décidé qui ne se laisse pas faire. J'aime prendre les choses en main, et je sais me battre pour obtenir ce que je désire ou pour rétablir ma justice. J'ai de l'énergie, de la fermeté, du courage. En cas de problème je ne me laisse pas abattre : je reprends les choses en main pour maîtriser la situation. Je suis franc et direct : C'est très facile pour moi de dire les choses en face sur le champ.", isCorrect: true },
		],
	},
	{
		questionText: '✔️ ​Laquelle de ces confirmations me décrit le mieux?​',
		answerOptions: [
			{ answerText: "Je suis quelqu'un d'affirmé qui ne se laisse pas faire. J'ai l'habitude de prendre les choses en main et j'aime sentir que je contrôle une situation. J'aime aussi sentir que je ne me laisse pas aller, que je reste fort même dans les moments difficiles. D'une façon générale je sais me battre pour rétablir ma justice. Avec les autres je suis franc et direct : je n'hésite pas à exprimer mon opinion même si cela doit déplaire. D'ailleurs je culpabilise rarement. Je prends mes décisions rapidement, j'ai beaucoup d'énergie pour agir et concrétiser mes idées; le travail ne me fait pas peur.", isCorrect: true },
			{ answerText: "Je suis quelqu'un d'actif, qui aime agir pour réussir. J'attache de l'importance au regard des autres. J'aime être apprécié et reconnu pour ce que je fais, pour mes réalisations, mes résultats. Je sais mettre en avant une image positive de moi-même; j'aime parler de ce que je fais. J'ai un relationnel facile, et je m'adapte à mes interlocuteurs. Je suis souvent apprécié par les gens même si j'ai parfois le sentiment de devoir en faire toujours plus pour être vraiment reconnu. Je prends mes décisions rapidement et je suis capable de faire plusieurs choses à la fois. J'aime diriger.", isCorrect: true },
			{ answerText: "Je suis quelqu'un de sensible, parfois fragile, qui recherche l'intensité dans les émotions. Ma sensibilité me rend très réactif à tout ce qui se passe autour de moi. Je peux ainsi être d'humeur changeante. Je sais être combatif si nécessaire. J'ai besoin de prouver ma valeur et cela me rend assez compétitif. Pour prendre une décision, j'écoute beaucoup mes envies, mes ressentis, et je fais comme je le sens : je ne doute pas de ce que je veux. J'ai un esprit critique.", isCorrect: false },
			{ answerText: "Je suis quelqu'un d'affirmé, loyal et prévoyant. Je peux agir vite, mais j'ai souvent des doutes et je cogite beaucoup : je peux revenir plusieurs fois sur mes réflexions et mes décisions. Il m'arrive de culpabiliser si je réalise que j'ai blessé quelqu'un. Je me montre fort car je ne veux pas que les autres puissent voir ma vulnérabilité. Mon esprit est assez orienté vers le futur : par exemple j'essaye de penser aux conséquences futures de mes décisions et de mes actions. Prévoyant, j'essaye ainsi d'anticiper les problèmes. J'ai le sens du devoir, je suis responsable et je sais prendre les choses en main.", isCorrect: true },
			{ answerText: "Je suis quelqu'un de spontané, positif et optimiste. J'aime les responsabilités, je sais aussi prendre la vie du bon coté et je ne m'ennuie jamais : J'aime réfléchir, j'ai toujours plein d'idées et plein de projets, mais en général, j'ai plus de plaisir à imaginer, cogiter, créer dans mon esprit, qu'à concrétiser une idée et la mener à terme en faisant face aux difficultés. Je sais facilement rebondir en cas de problème; je finis toujours par m'en sortir d'une manière ou d'une autre : je sais convaincre et charmer par mon discours. Sinon je passe à autre chose et je n'y pense plus. Avec les gens je suis positif , décontracté et spontané.", isCorrect: true },
		],
	},
]

export default questions;