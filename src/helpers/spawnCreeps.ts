import generateBodyParts from './generateBodyParts';
import generateName from './generateName';
import generateOptions from './generateOptions';

const spawnCreeps = (originRoomName: string, rolesNeeded: RolesNeeded) => {
	const { harvest, upgrade } = rolesNeeded; // 4 4
	const roomCreeps: Creep[] = _.filter(Game.creeps, x => x.memory.originRoomName === originRoomName);

	const harvesters: number = _.filter(roomCreeps, x => x.memory.role === `harvest`).length;
	const upgraders: number = _.filter(roomCreeps, x => x.memory.role === `upgrade`).length;

	const roomSpawners: StructureSpawn[] = _.filter(Game.spawns, x => x.room.name === originRoomName);
	for (let spawner of roomSpawners) {
		if (harvest && harvesters < harvest) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Harvester`),
				generateName(`Harvester`),
				generateOptions(originRoomName, `harvest`),
			);
		} else if (upgrade && upgraders < upgrade) {
			Game.spawns[spawner.name].spawnCreep(
				generateBodyParts(`Upgrader`),
				generateName(`Upgrader`),
				generateOptions(originRoomName, `upgrade`),
			);
		}
	}
};

export default spawnCreeps;
