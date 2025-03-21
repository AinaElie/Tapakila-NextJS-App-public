"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient;
var event = [{ "event_id": "E001", "event_name": "LOLA", "event_date": "2025-03-07 20:30:00", "event_place": "La City Ivandry", "event_description": "Concert en direct de l artiste LOLA.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/Z79831313j4WkA56YaL0U763892040/w=600,h=800", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Concert" }, { "event_id": "E002", "event_name": "EFA ELA LOATRA ... RICKY", "event_date": "2025-04-06 15:00:00", "event_place": "Palais de la Culture et des Sports", "event_description": "Spectacle en direct avec les artistes EFA ELA LOATRA et RICKY.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/3113jo25e5784M08656pp7WE38974C/w=450,h=600", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Spectacle" }, { "event_id": "E003", "event_name": "MOZIK'IRAY", "event_date": "2025-05-04 15:00:00", "event_place": "Sehatra Maitso Antsahamanitra", "event_description": "Concert réunissant divers artistes locaux.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/o63D73457ih9vM7N1x08426r7C7139/w=450,h=600", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Concert" }, { "event_id": "E004", "event_name": "AFROMADA MUSIC AWARDS", "event_date": "2025-05-17 18:00:00", "event_place": "Studio Arena Ivandry", "event_description": "Cérémonie de remise des prix musicaux AFROMADA.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/3X885207P16dEp52Ir56Z197M4931W/w=600,h=800", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Cérémonie" }, { "event_id": "E005", "event_name": "As des As 2ème édition", "event_date": "2025-03-08 08:30:00", "event_place": "Gymnase couvert Ankatso", "event_description": "Tournoi sportif réunissant les meilleures équipes locales.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/6350Xj3GK9bh1f6178239d6c342187/w=450,h=600", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Loisir" }, { "event_id": "E006", "event_name": "LE ROI LION - 3", "event_date": "2025-03-09 15:00:00", "event_place": "CCI Ivato", "event_description": "Représentation de la comédie musicale Le Roi Lion.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/d17zJ209b06193z17Z33986582X124/w=450,h=600", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Théâtre" }, { "event_id": "E007", "event_name": "CHEMINS DE PARENTALITÉ", "event_date": "2025-05-31 10:00:00", "event_place": "CCI Ivato", "event_description": "Conférence sur les parcours de parentalité.", "event_image": "https://imagedelivery.net/9bJyCbB5zXavioY-Ay5L6w/ticketplace/image/event/c95S11z899071z237Pq4M68T56532p/w=450,h=600", "admin_id": "A001", "event_organizer": "Ticketplace", "event_category": "Conférence" }];
var events = await prisma.event.createMany({
    data: event
});
console.log(events);
