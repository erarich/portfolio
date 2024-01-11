import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

export const areaGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const type = route.params['type'];
  const validTypes = ['frontend', 'backend', 'data', 'others'];
  return validTypes.includes(type);
};
