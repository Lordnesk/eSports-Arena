import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserService } from "src/users/services/users.service";
import { ROLES_KEY } from "../roles.decorator";
import { RolesService } from "src/roles/roles.service";
import { CustomUnauthorizedException } from "src/common/exceptions/custom-unauthorized.exception";



@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private userService: UserService,
        private rolesService: RolesService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
        if (!roles) return true;

        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            throw new CustomUnauthorizedException('User not found');
        }

        const roleId = await this.userService.getRoleByUserId(user.id);
        const { name } = await this.rolesService.findRole(roleId);

        if (!name) {
            throw new CustomUnauthorizedException('User not found');
        }

        const hasRole = roles.includes(name);
        if (!hasRole) {
            throw new CustomUnauthorizedException('User does not have the necessary role');
        }
        return true;
    }
}