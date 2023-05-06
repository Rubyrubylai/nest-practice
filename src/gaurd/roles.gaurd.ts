import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {  // canActivate() function should return a boolean, , indicating whether the current request is allowed or not
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    let user = request.user;
    user = {roles: 'admin'};  // for testing

    return matchRoles(roles, user.roles);
  }
}

function matchRoles(roles, userRoles) {
  return roles.indexOf(userRoles) != -1
}
