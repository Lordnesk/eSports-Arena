import { DataSource } from "typeorm";
import { Seeder } from 'typeorm-extension'
import { Role } from "src/roles/entitites/role.entity";





export default class RoleSeed implements Seeder {
 
    public async run(dataSource: DataSource): Promise <void>{

        const roleRepository = dataSource.getRepository(Role);

        const rolesData = [
            {name: 'admin'},
            {name: 'player'},
        ]


        for(const role of rolesData){
            const rolExists = await roleRepository.findOne({where: {name: role.name}});
            if(!rolExists){
                const newRole = roleRepository.create(role);
                await roleRepository.save(newRole);
            }
        }
    }
}