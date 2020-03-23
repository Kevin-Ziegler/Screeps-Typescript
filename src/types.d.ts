// memory extension samples
interface CreepMemory {
	originRoomName: string;
	task: string;
	working: boolean;
}

interface Memory {
	uuid: number;
	log: any;
}

interface RoomNeeds {
	energySources: number;
	energySpots: number;
	energySourceDistance: number;
	controllerSpots: number;
	controllerDistance: number;
	availableEnergy: number;
}

interface TasksNeeded {
	harvest?: number;
	upgrade?: number;
	build?: number;
	mine?: number;
	repair?: number;
}

// `global` extension samples
declare namespace NodeJS {
	interface Global {
		log: any;
	}
}
