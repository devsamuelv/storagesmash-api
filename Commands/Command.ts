import { Express } from "express";
import { Security } from "./Security/Security";
import { McServer } from "./McServer/McServer";
import { Referal } from "./Referal/Referal";
import { User } from "./User/User";
import { Plan } from "./Plan";

export class Command {
	constructor(express: Express) {
		// User
		new User(express);

		// Minecraft Server
		new McServer(express);

		// Referal
		new Referal(express);

		// Security
		new Security(express);

		// Minecraft Plans
		new Plan(express);

		console.warn("HTTP: INIT");
	}
}
