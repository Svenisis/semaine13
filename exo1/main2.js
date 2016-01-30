angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.soluce1 = "";
					
	
		$scope.questions = [
	
			{id:"01",
			 categorie:"Jeux videos",
			 question:"comment s'appelle le plombier Hero de NINTENDO ?",
			 reponseA:"MARIO",
			 reponseB:"LUIGI",
			 reponseC:"WARIO",
			 reponseD:"DONKEY KONG",
			 correct:"reponseA",
			 bonneReponse:"MARIO",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://img0.gtsstatic.com/wallpapers/818b08d21f4a50fa576290b0960e9f02_large.jpeg"
			},
			{id:"02",
			 categorie:"Voitures",
			 question:"Quelle est la 1ere marque a assembler des automobiles a la chaîne?",
			 reponseA:"Audi",
			 reponseB:"Ford",
			 reponseC:"Fiat",
			 reponseD:"Peugeot",
			 correct:"reponseB",
			 bonneReponse:"Ford",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://i38.servimg.com/u/f38/10/08/59/45/10059010.jpg"
			},
			{id:"03",
			 categorie:"Chanteur",
			 question:"Comment s'appelle le nom du chanteur qui chante: c'est l'amour ?",
			 reponseA:"Leopold Nord Et Vous",
			 reponseB:"Desireless",
			 reponseC:"Marc Lavoine",
			 reponseD:"Luna Parker",
			 correct:"reponseA",
			 bonneReponse:"Leopold Nord Et Vous",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			image:"http://photos1.tf1.fr/1200/630/stars80-78ed82-1@1x.jpg"
			},
			{id:"04",
			 categorie:"Informatique",
			 question:"Quel est l'année de l'envoies du 1er courriel? ",
			 reponseA:"1961",
			 reponseB:"1971",
			 reponseC:"1981",
			 reponseD:"1991",
			 correct:"reponseB",
			 bonneReponse:"1971",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/First_Web_Server.jpg/1280px-First_Web_Server.jpg"
			},
			{id:"05",
			 categorie:"Jeu videos",
			 question:"Quelle année fut sortis PONG",
			 reponseA:"1962",
			 reponseB:"1972",
			 reponseC:"1982",
			 reponseD:"2012",
			 correct:"reponseB",
			 bonneReponse:"1972",
			 points:10,
			 pointscat1:10,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:0,
			 image:"http://www.dslretvfx.fr/wp-content/uploads/2015/08/pingpong-after-effects.jpg"
			},
			{id:"06",
			categorie:"voitures",
			 question:"Quelle est la voiture la plus vendue au Monde ?",
			 reponseA:"Citroen 2cv",
			 reponseB:"Renault 4L",
			 reponseC:"VW coccinelle",
			 reponseD:"Toyota corolla",
			 correct:"reponseD",
			 bonneReponse:"Toyota corolla",
			 points:10,
			 pointscat1:0,
			 pointscat2:10,
			 pointscat3:0,
			 pointscat4:0,
			 image:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Facel_Vega_1961_Castle_Hedingham_2008.JPG"
			},
			{id:"07",
			 categorie:"Chanteur",
			 question:"Qui à interpreté la chanson thème du film LA BOUM ?",
			 reponseA:"paul MC Cartney",
			 reponseB:"Richard Sanderson",
			 reponseC:"Christopher Cross",
			 reponseD:"Joe cocker",
			 correct:"reponseB",
			 bonneReponse:"Richard Sanderson",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:10,
			 pointscat4:0,
			 image:"http://www.maxxiweb.com/files/wallpapers/fond/la-boum/72171.jpg"
			},
			{id:"08",
			 categorie:"Informatique",
			 question:"En quelle année est presenté le premier WINDOWS ?",
			 reponseA:"1983",
			 reponseB:"1985",
			 reponseC:"1988",
			 reponseD:"1990",
			 correct:"reponseB",
			 bonneReponse:"1985",
			 points:10,
			 pointscat1:0,
			 pointscat2:0,
			 pointscat3:0,
			 pointscat4:10,
			 image:"http://blog.iakaa.com/wp-content/uploads/2015/11/Microsoft_Windows_1.0_screenshot.png"
			}


		];

		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

		
	function cat (){
		if ($scope.numquestion < 8){
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
		}
		else{
			$scope.domaine = "";
		};
	}	
		
		
	$scope.clear = function () {
		cat();
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.categorie1 = 0;
		$scope.categorie2 = 0;
		$scope.categorie3 = 0;
		$scope.categorie4 = 0;
		$scope.domaine ="sport";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
		$scope.image = "";
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;

					
    };
		
		$scope.valider = function() {
			
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
				$scope.categorie1 += $scope.questions[$scope.numquestion].pointscat1;
				$scope.categorie2 += $scope.questions[$scope.numquestion].pointscat2;
				$scope.categorie3 += $scope.questions[$scope.numquestion].pointscat3;
				$scope.categorie4 += $scope.questions[$scope.numquestion].pointscat4;
			}
			
			$scope.numquestion += 1;
			cat();
			
			if ($scope.numquestion >= 8)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points ==80)
				{
					$scope.texte = "Incroyable,vous avez répondu correctement à toutes les questions !";
					$scope.image = "http://previews.123rf.com/images/slena/slena1202/slena120200026/12230712-Best-of-the-best-rubber-stamp--Stock-Vector-winner.jpg";
				}
				else if ($scope.categorie1 == 20)
				{
					$scope.texte = "Vous êtes incollable en Jeu videos ,Félicitation !";
					$scope.image = "https://i.ytimg.com/vi/NDN3f-FvWHY/maxresdefault.jpg";
				}
				else if ($scope.categorie2 == 20)
				{
					
					$scope.texte = "Vous êtes incollable en Voitures ,Félicitation !";
					$scope.image = "http://shoumi57.free.fr/Photos/albulle/data/photos/Sport%20automobile/F1%20Saison%202006/Imola/Shoumi%20podium%203.jpg";
				}
				else if ($scope.categorie3 == 20)
				{
					$scope.texte = "Vous êtes incollable en Chanteurs ,Félicitation !";
					$scope.image = "http://cdn2-europe1.new2.ladmedia.fr/var/europe1/storage/images/europe1/evenements/europe-1-fete-les-30-ans-du-top-50-684322/13694206-1-fre-FR/Europe-1-fete-les-30-ans-du-Top-50.jpg";
				}
				else if ($scope.categorie4 == 20)
				{
					$scope.texte = "Vous êtes incollable en Informatique ,Félicitation !";
					$scope.image = "https://i.ytimg.com/vi/X14FPvwmcWQ/maxresdefault.jpg";
				}
				else if ($scope.categorie1 == 15)
				{
					$scope.texte = "Presque tout bon en Voitures ,Félicitation !";
					$scope.image = "http://www.cormontreuil.fr/wp-content/uploads/2010/06/sport-site.jpg";
				}
				else if ($scope.categorie2 == 15)
				{
					$scope.texte = "Presque tout bon en Chanteurs ,Félicitation !";
					$scope.image = "http://www.le-top-capendu.fr/cinema-plein-air-a-capendu/image";
				}
				else if ($scope.categorie3 == 15)
				{
					$scope.texte = "Presque tout bon en Jeu videos,Félicitation !";
					$scope.image = "http://www.rom-game.fr/multimedia/news/151117_concoursranking.jpg";
				}
				else if ($scope.categorie4 == 15)
				{
					$scope.texte = "Presque tout bon en Inforamtique ,Félicitation !";
					$scope.image = "https://i.ytimg.com/vi/X14FPvwmcWQ/maxresdefault.jpg";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";

		};
					
			$scope.domaine = $scope.questions[$scope.numquestion].categorie;
			
	}]);
	