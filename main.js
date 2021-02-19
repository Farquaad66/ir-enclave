$(function() {

    //Populate using an object literal

    WTF.init({

        heading: [
            "[[ MANDALORIAN ENCLAVE // ACCESSING BOUNTIES... ]]<br><br>[[ BOUNTIES LOADED ]]"
        ],
        response: [
           "[[ RETRIEVE BOUNTY HUNT ]]"
        ],
        template: [
		"The bounty requires you to go to @locale and @mission. The target is @target, known as @firstname @lastname.However, be careful because @complication. @theme.",
		"Your task is to travel to @locale and @mission. The target is @target, known as @firstname @lastname. You may encounter resistance in the form of @obstacle. @theme.",
		"Your task is to travel to @locale and @mission. The target is @target. However, be careful because @complication. @theme.",
		"The bounty requires you to infiltrate @group on @locale known as the @groupname1 @groupname2. You must kill them all. You may encounter difficulty in the form of @obstacle. @theme.",
        ],
        locale: [
		"Alderaan",
		"Balmorra",
		"Belsavis",
		"Cademimu V",
		"Corellia",
		"Dantooine",
		"Dromund Kaas",
		"Hoth",
		"Hutta",
		"Nar Shaddaa",
		"Onderon",
		"Ord Mantell",
		"Quesh",
		"Rishi",
		"Tanaab",
		"Taris",
		"Tatooine",
		"Zakuul"
        ],
        mission: [
		"assassinate the target",
		"kill the target",
		"arrest the target",
		"capture the target",
		"find and eleminate the target",
		"find and capture the target",
		"kidnap the target",
		"find the target and bring him back, dead or alive",
		"get the target alive to the contract giver",
		"get the targets head back to the contract giver",
		"end the targets life",
        ],
        behavior: [
	        "an abrasive",
		"an absent-minded",
		"an active",
		"an affable",
		"an aggrandizing",
		"an aloof",
		"an altruistic",
		"an amiable",
		"an anxious",
		"an apprehensive",
		"an argumentative",
		"an aspiring",
		"an authoritarian",
		"a belligerent",
		"a boisterous",
		"a calculating",
		"a candid",
		"a canny and experienced",
		"a capable",
		"a cheerful",
		"a clever",
		"a community-oriented",
		"a conceited",
		"a condescending",
		"a conscientious",
		"a controlling",
		"a courteous",
		"a daring",
		"a debonair",
		"a determined",
		"a diligent",
		"a direct",
		"a disagreeable",
		"a disparaging",
		"a draconian",	
		"an eccentric",
		"an economically ruthless",
		"an efficient",
		"an egotistical",
		"an empathetic",
		"an engaging",
		"an exacting",
		"a fiscally responsible",
		"a flamboyant",
		"a flighty",
		"a flustered",
		"a frugal",
		"a frustrated",
		"a garrulous",
		"a genial",
		"a goal oriented",
		"a greedy",
		"a gregarious",
		"a grieving",
		"a gruff",
		"a hesitant",
		"a humble",
		"an ill-tempered",
		"an impulsive",
		"an industrious",
		"an intelligent",
		"an intimidating",
		"an intrepid",
		"an irritable",
		"a jaded",
		"a materialistic",
		"a melodramatic",
		"a naive and inexperienced",
		"a negligent",
		"a no-nonsense",
		"an obsequious",
		"an opinionated",
		"an optimistic",
		"an organized",
		"an ostentatious",
		"an outgoing",
		"a paranoid",
		"a particular",
		"a patient",
		"a persistent",
		"a persuasive",
		"a pessimistic",
		"a philanthropic",
		"a placid", 
		"a pragmatic",
		"a pretentious",
		"a professional",
		"a punctual",
		"a quick-tempered",
		"a rambunctious",
		"a rational",
		"a recalcitrant",
		"a recently promoted",
		"a reclusive",
		"a refined",
		"a reliable",
		"a reluctant",
		"a reserved",
		"a resilient",
		"a resolute",
		"a responsible",
		"a risk-taking",
		"a scrupulous",
		"a shrewd",
		"a slovenly",
		"a sly",
		"a strict",
		"a strident",
		"a taciturn",
		"a tactful",
		"a temperamental",
		"a tenacious",
		"an unconventional",
		"an unpredictable",
		"an unscrupulous",
		"a vain",
		"a verbose",
		"a vindictive"
        ],
        target: [
		"human spice adict",
		"zabrak murderer",
		"escaped prisoner",
		"gamorean gangster",
		"twi'lek smuggler",
		"ex mandalorian and known bounty hunter in that area",
		"M1-4X droid, protecting republic troopers",
		"civic leader",
		"ex imperial",
		"female twi'lek dancer",
		"old republic war veteran",
		"exporter of fine textiles",
		"exporter of luxury goods",
		"force-user",
		"geologist",
		"grifter",
		"high-level corporate executive",
		"hutt",
		"Imperial deserter",
		"information broker",
		"local gang enforcer",
		"member of local law enforcement",
		"mercenary band",
		"mercenary",
		"mid-level corporate executive",
		"news reporter",
		"nurse",
		"owner of a fine restaurant who is in reality a dangerous canibal",
		"owner of a small animal hospital who secretly eats the ill animals. The shop is well known in the area ",
		"worker of a shipping company who keeps stealing money from his boss",
		"owner of a sleazy diner who deals in secret with spice",
		"pair of siblings who run a scrapyard and killed a hutt trooper once",
		"politician up for re-election",
		"politician who corrupt ways are too bad for the city",
		"Republic deserter",
		"mad scientist",
		"scrapyard owner",
		"smuggler",
		"socialite",
		"ex imperial soldier, who betrayed the empire",
		"spice dealer",
		"swoop racer",
		"tailor",
		"travelling merchant"
        ],
        group: [
		"a criminal syndicate",
		"a spice dealer gang",
		"a gang of miscreants",
		"a group of illegal weapon sellers",
		"a group of criminals",
		"a small criminal organization",
		"a group of bank robbers",
		"a small gang",
		"a small syndicate"
        ],
        complication: [
		"the target has a blaster and knows how to use it",
		"the target keeps exotic animals as security",
		"an unidentified person close to the target is a highly trained bodyguard",
		"the target is about to leave the planet in a few days",
		"the target is armed and dangerous",
		"the target is an echani and very skilled in hand to hand combat",
		"the target has killed a Mandalorian and taken his beskar armor, being protected even more",
		"the target is a former house rist member, making him very dangerous",
		"the target is a master of stealth, being able to hide from you easily",
		"the target already knows that a bounty is on his head and may have prepared traps",
		"the target is imprisoned",
		"the target has weapons and will use them against you",
		"the target is a fantastic sniper",
        ],
       
        obstacle: [
		"dangerous wildlife",
		"guards",
		"dangerous guards",
		"loyal guards",
		"capable and alert guards",
		"a bounty hunter that is outside of the enclave is after the target as well",
		"loyal and skilled guards",
		"a Republic patrol",
		"skilled guards",
		"poorly trained guards",
		"a rioting populace"
        ],
        reason: [
		"who is out for revenge",
		"who is blackmailing the target",
		"who is acting for unknown reasons",
		"who is extorting the target",
		"who is pursuing misguided revenge",
		"who plans to kidnap the target",
		"who intends to assassinate the target",
		"who is the target's creditor",
		"who suspects the target is an Imperial contact"
        ],
        theme: [
		"Talk to the contract giver for more details. The coordinates to them are attached.",
		"A hutt hired you to do this. Do not disappoint him and feel free to travel to him for more details.",
		"Attached is the holo number of the contract giver",
		"Good luck. This is your chance to make yourself a name",
		"Leave no witnesses",
		"Be careful and good luck, Hunter",
		"Try to not get too much attention on yourself here",
        ],
		firstname: [
		"Manklo",
		"Njok",
		"Fibiw",
		"Bob",
		"Poolk",
		"Amanof",
		"Pinfo",
		"Lokos",
		"Pople",
		"Obamo",
		"Max",
		"Johnk",
		"Konst",
		"Philo",
		"Qau",
		"Wuio",
		"Erio",
		"Ryo",
		"Tnam",
		"Yyeem",
		"Ugan",
		"Iopna",
		"Oogwei",
		"Paau",
		"Alo",
		"Siuwq",
                "Ding", 
		],
		lastname: [
		"Kalopne",
		"Mnagel",
		"Mnonee",
		"Uinga",
		"Yuojo",
		"Molovot",
		"Vinbva",
		"Zvee",
		"Iofaw",
		"Nawe",
		"Mnilik",
		"Baum",
		"Hose",
		"Airnil",
		"Brettni",
		"Ioln"
		"Hippot",
		"Judiah",
		"Koppy",
		"Laonme",
                "Zeez",
		"Xiom",
		"Chep",
		"Vaenoalo",
		"Beenop",
		"Niona",
		"Mimip",
		],
		groupname1: [
		"Black",
		"Red",
		"Yellow",
		"Orange",
		"White",
		"Blue",
		"Pink",
		"Green",
		"Grey",
		"Small",
		"Big",
		"Dark",
		"Light",
		"Heavy",
		"Hot",
		"Cold",
		"Drug",
		"Sneaky",
		"Mystic",
		"Fantastic",
		"Ugly",
		"Beautiful",
		"Fat"
		"Skinny"
		],
		groupname2: [
		"Eye",
		"Moon",
		"Planet",
		"Weapon",
		"Spice",
		"Gun",
		"Blaster",
		"Blood",
		"Raiders",
		"Hand",
		"Finger",
		"Foot",
	        "Botton",
		"Ocean",
		"Gangsters",
		"Dealers",
		"Haters",
		"Radicals",
		]
    });
	
});
